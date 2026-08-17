"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site, cta } from "@/content/site";
import s from "./SiteHeader.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  // `showModal` gives us the focus trap, Esc-to-close, and inert background
  // for free — no need to reimplement any of it.
  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  const isCurrent = (href: string) => pathname === href;

  return (
    <header className={s.header} data-scrolled={scrolled}>
      <div className={`wrap ${s.inner}`}>
        <Link href="/" className={s.brand}>
          {site.name}
        </Link>

        <nav className={s.nav} aria-label="Primary">
          <ul className={s.navList}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={s.navLink}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--primary"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta.buttonLabel}
          </a>
        </nav>

        <button
          type="button"
          className={s.menuButton}
          onClick={openMenu}
          aria-haspopup="dialog"
        >
          <span className={s.bars} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          Menu
        </button>
      </div>

      <dialog ref={dialogRef} className={s.dialog} aria-label="Site menu">
        <div className={s.dialogHead}>
          <span className={s.brand}>{site.name}</span>
          <button
            type="button"
            className={s.close}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <nav className={s.dialogNav} aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={s.dialogLink}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="btn btn--primary"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cta.buttonLabel}
        </a>
      </dialog>
    </header>
  );
}
