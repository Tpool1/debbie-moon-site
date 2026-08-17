"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import s from "./ObfuscatedEmail.module.css";

const reverse = (value: string) => [...value].reverse().join("");

/**
 * Shows the email address without ever putting a harvestable copy of it into
 * the exported HTML.
 *
 * Pre-hydration the address is emitted reversed and flipped back visually with
 * `direction: rtl; unicode-bidi: bidi-override`, so the static file contains
 * "moc.liamg@..." — correct to a reader, useless to a regex scraper. Once
 * hydrated it is replaced with a real mailto link, which is what nearly every
 * visitor gets.
 *
 * LinkedIn is the primary contact route site-wide and is a plain anchor needing
 * no JavaScript, so the accessible path to Debbie is never dependent on this.
 */
export default function ObfuscatedEmail({
  className,
}: {
  className?: string;
}) {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    setAddress(`${site.emailUser}@${site.emailDomain}`);
  }, []);

  if (!address) {
    return (
      <span className={`${s.reversed} ${className ?? ""}`}>
        {reverse(`${site.emailUser}@${site.emailDomain}`)}
      </span>
    );
  }

  return (
    <a className={className} href={`mailto:${address}`}>
      {address}
    </a>
  );
}
