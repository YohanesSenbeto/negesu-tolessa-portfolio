import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { getCollection } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type TrackBody = {
  type?: string;
  path?: string;
  referrer?: string;
  tag?: string;
  id?: string;
  text?: string;
  href?: string;
  ua?: string;
  lang?: string;
  screen?: string;
  viewport?: string;
  tz?: string;
  ts?: number;
};

function header(req: NextRequest, name: string): string | undefined {
  const value = req.headers.get(name);
  return value && value.length > 0 ? value : undefined;
}

function isPublicIp(ip: string): boolean {
  return !/^(127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.|::1$)/i.test(
    ip,
  );
}

type Geo = {
  country?: string;
  region?: string;
  city?: string;
  latitude?: string;
  longitude?: string;
};

async function geoFromIp(ip: string): Promise<Geo | undefined> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    const res = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, {
      signal: ctrl.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return undefined;
    const j = (await res.json()) as {
      success?: boolean;
      country_code?: string;
      region?: string;
      city?: string;
      latitude?: number | string;
      longitude?: number | string;
    };
    if (!j.success) return undefined;
    return {
      country: j.country_code || undefined,
      region: j.region || undefined,
      city: j.city || undefined,
      latitude: j.latitude != null ? String(j.latitude) : undefined,
      longitude: j.longitude != null ? String(j.longitude) : undefined,
    };
  } catch {
    return undefined;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as TrackBody;

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

    let geo: Geo = {
      country: header(req, "x-vercel-ip-country"),
      region: header(req, "x-vercel-ip-country-region"),
      city: header(req, "x-vercel-ip-city"),
      latitude: header(req, "x-vercel-ip-latitude"),
      longitude: header(req, "x-vercel-ip-longitude"),
    };

    if (!geo.country && ip && isPublicIp(ip)) {
      const looked = await geoFromIp(ip);
      if (looked) geo = looked;
    }

    const doc = {
      type: body.type || "event",
      path: body.path,
      referrer: body.referrer,
      click: body.tag
        ? { tag: body.tag, id: body.id, text: body.text, href: body.href }
        : undefined,
      device: {
        ua: body.ua,
        lang: body.lang,
        screen: body.screen,
        viewport: body.viewport,
        tz: body.tz,
      },
      ipHash,
      geo,
      ts: body.ts ? new Date(body.ts) : new Date(),
      createdAt: new Date(),
    };

    const collection = await getCollection("analytics_events");
    await collection.insertOne(doc);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
