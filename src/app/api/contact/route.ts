import { createHash } from "node:crypto";
import { getCollection } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hashIp(ip: string) {
  const salt = process.env.IP_HASH_SALT || "negesu-portfolio";
  return createHash("sha256").update(ip + salt).digest("hex").slice(0, 32);
}

function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

async function sendEmailNotification(payload: {
  name: string;
  email: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;
  const from = process.env.CONTACT_FROM || "Negesu Portfolio <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO || "nagasu.tolessa@gmail.com";
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `New portfolio message from ${payload.name}`,
        html: `<h2>New message from your portfolio</h2>
               <p><strong>Name:</strong> ${payload.name}</p>
               <p><strong>Email:</strong> ${payload.email}</p>
               <p><strong>Message:</strong></p>
               <p>${payload.message.replace(/\n/g, "<br/>")}</p>`,
      }),
    });
  } catch {
    // Email is best-effort; the message is already stored in MongoDB.
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || name.length > 100) {
      return Response.json({ ok: false, error: "Please enter a valid name." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email) || email.length > 200) {
      return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!message || message.length > 5000) {
      return Response.json({ ok: false, error: "Please enter a message (max 5,000 characters)." }, { status: 400 });
    }

    const ip = clientIp(req);
    const doc = {
      name,
      email,
      message,
      ipHash: hashIp(ip),
      userAgent: req.headers.get("user-agent") || null,
      source: "portfolio-contact-form",
      country: req.headers.get("x-vercel-ip-country") || null,
      read: false,
      createdAt: new Date(),
    };

    const col = await getCollection("contact_messages");
    await col.insertOne(doc);

    await sendEmailNotification({ name, email, message });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("contact error", err);
    return Response.json(
      { ok: false, error: "Could not send your message. Please try again or email directly." },
      { status: 500 },
    );
  }
}
