"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

/**
 * A primary button that opens a new email to Debbie.
 *
 * The address is assembled on the client for the same reason as
 * ObfuscatedEmail: it must never appear as a literal string in the exported
 * HTML, which is where scrapers read from. Until hydration the button points at
 * LinkedIn — the site-wide contact route that needs no JavaScript — so the
 * button is a working way to reach her in every state rather than a dead
 * anchor.
 */
export default function EmailButton({
  label,
  subject,
  className = "btn btn--primary",
}: {
  label: string;
  subject?: string;
  className?: string;
}) {
  const [mailto, setMailto] = useState<string | null>(null);

  useEffect(() => {
    const address = `${site.emailUser}@${site.emailDomain}`;
    const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    setMailto(`mailto:${address}${query}`);
  }, [subject]);

  if (!mailto) {
    return (
      <a
        className={className}
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <a className={className} href={mailto}>
      {label}
    </a>
  );
}
