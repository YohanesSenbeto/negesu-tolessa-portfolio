import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { getCollection } from "@/lib/mongodb";
import { profile } from "@/lib/data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = (body.name || "").trim().slice(0, 100);
    const email = (body.email || "").trim().slice(0, 200);
    const message = (body.message || "").trim().slice(0, 5000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email." },
        { status: 400 },
      );
    }

    const forwarded = req.headers.get("x-forwarded-for");
    const ip =
      (forwarded && forwarded.split(",")[0]?.trim()) ||
      req.headers.get("x-real-ip") ||
      undefined;
    const salt = process.env.IP_HASH_SALT || "";
    const ipHash =
      ip && ip !== "unknown"
        ? crypto.createHash("sha256").update(ip + salt).digest("hex")
        : undefined;

    const doc = {
      name,
      email,
      message,
      ipHash,
      createdAt: new Date(),
    };

    const col = await getCollection("contact_messages");
    await col.insertOne(doc);

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from:
              process.env.CONTACT_FROM ||
              "Portfolio <onboarding@resend.dev>",
            to: process.env.CONTACT_TO || profile.email,
            subject: `New portfolio message from ${name}`,
            reply_to: email,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          }),
        });
      } catch {
        /* email failure should not fail the stored submission */
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again." },
      { status: 500 },
    );
  }
}
