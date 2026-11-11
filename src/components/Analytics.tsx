"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const CONSENT_KEY = "nt_consent";

type Consent = "accepted" | "declined";

const noopSubscribe = () => () => {};

function readConsent(): Consent | null {
  const v = localStorage.getItem(CONSENT_KEY);
  return v === "accepted" || v === "declined" ? v : null;
}

function deviceInfo() {
  return {
    ua: navigator.userAgent,
    lang: navigator.language,
    screen: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

function send(payload: Record<string, unknown>) {
  const body = JSON.stringify({
    ...payload,
    ...deviceInfo(),
    ts: Date.now(),
  });
  try {
    if ("sendBeacon" in navigator) {
      navigator.sendBeacon(
        "/api/track",
        new Blob([body], { type: "application/json" }),
      );
      return;
    }
  } catch {
    /* fall through to fetch */
  }
  fetch("/api/track", { method: "POST", body, keepalive: true }).catch(
    () => {},
  );
}

export default function Analytics() {
  const isClient = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const stored = useSyncExternalStore(noopSubscribe, readConsent, () => null);
  const [decision, setDecision] = useState<Consent | null>(null);
  const consent = decision ?? stored;

  useEffect(() => {
    if (consent !== "accepted") return;

    send({
      type: "pageview",
      path: location.pathname + location.hash,
      referrer: document.referrer || undefined,
    });

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest?.("a,button,[data-track]") as HTMLElement | null;
      if (!el) return;
      send({
        type: "click",
        path: location.pathname + location.hash,
        tag: el.tagName.toLowerCase(),
        id: el.id || undefined,
        text: (el.textContent || "").trim().slice(0, 80) || undefined,
        href: el.getAttribute("href") || undefined,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  const decide = (value: Consent) => {
    localStorage.setItem(CONSENT_KEY, value);
    setDecision(value);
  };

  if (!isClient || consent !== null) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-xl z-[70] rounded-2xl border border-line bg-surface/95 backdrop-blur-xl p-4 shadow-2xl">
      <p className="text-sm text-muted mb-3 leading-relaxed">
        This site uses a few cookies to understand visits and improve the experience. See the{" "}
        <a href="/privacy" className="text-brand underline underline-offset-2 hover:text-brand-2">
          Privacy Policy
        </a>
        . No cross-site tracking.
      </p>
      <div className="flex items-center gap-2">
        <button onClick={() => decide("accepted")} className="btn-primary px-4 py-2 text-sm">
          Accept
        </button>
        <button
          onClick={() => decide("declined")}
          className="rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-ink"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
