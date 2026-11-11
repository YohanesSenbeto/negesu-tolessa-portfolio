import { createHash } from "node:crypto";
import { getCollection } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function hashIp(ip: string) {
  const salt = process.env.IP_HASH_SALT || "negesu-portfolio";
  return createHash("sha256").update(ip + salt).digest("hex").slice(0, 32);
}

function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: Request) {
  try {
    const text = await req.text();
    if (text.length > 8000) {
      return Response.json({ ok: false, error: "Payload too large." }, { status: 413 });
    }
    const body = JSON.parse(text || "{}") as Record<string, unknown>;

    const ip = clientIp(req);
    const doc = {
      type: typeof body.type === "string" ? body.type.slice(0, 40) : "event",
      path: typeof body.path === "string" ? body.path.slice(0, 300) : null,
      referrer: typeof body.referrer === "string" ? body.referrer.slice(0, 500) : null,
      tag: typeof body.tag === "string" ? body.tag.slice(0, 40) : null,
      text: typeof body.text === "string" ? body.text.slice(0, 120) : null,
      href: typeof body.href === "string" ? body.href.slice(0, 300) : null,
      ua: typeof body.ua === "string" ? body.ua.slice(0, 400) : null,
      lang: typeof body.lang === "string" ? body.lang.slice(0, 40) : null,
      screen: typeof body.screen === "string" ? body.screen.slice(0, 40) : null,
      viewport: typeof body.viewport === "string" ? body.viewport.slice(0, 40) : null,
      tz: typeof body.tz === "string" ? body.tz.slice(0, 60) : null,
      ipHash: hashIp(ip),
      geo: {
        country: req.headers.get("x-vercel-ip-country") || null,
        region: req.headers.get("x-vercel-ip-country-region") || null,
        city: req.headers.get("x-vercel-ip-city") || null,
      },
      createdAt: new Date(),
    };

    const col = await getCollection("analytics_events");
    await col.insertOne(doc);

    return Response.json({ ok: true });
  } catch (err) {
    console.error("track error", err);
    return Response.json({ ok: false }, { status: 400 });
  }
}
