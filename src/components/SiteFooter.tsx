import Link from "next/link";
import { nav, site } from "@/content/site";
import ObfuscatedEmail from "./ObfuscatedEmail";
import s from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className="wrap">
        <div className={s.top}>
          <div>
            <p className={s.brand}>{site.name}</p>
            <p className={s.blurb}>
              Marketing leadership for B2B SaaS and AI platform companies.
              Fractional, full-time, or advisory.
            </p>
          </div>

          <div>
            <h2 className={s.colTitle}>Pages</h2>
            <ul className={s.list}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={s.colTitle}>Connect</h2>
            <ul className={s.list}>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <ObfuscatedEmail />
              </li>
              <li>
                <a href={site.resumePath} download>
                  Download résumé
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.bottom}>
          <span>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            Campaign and website work shown belongs to the companies it was
            created for.
          </span>
        </div>
      </div>
    </footer>
  );
}
