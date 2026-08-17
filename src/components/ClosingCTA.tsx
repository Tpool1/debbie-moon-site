import { site, cta } from "@/content/site";
import ObfuscatedEmail from "./ObfuscatedEmail";
import s from "./ClosingCTA.module.css";

export default function ClosingCTA({
  headline = cta.headline,
  body = cta.body,
  showResume = false,
}: {
  headline?: string;
  body?: string;
  showResume?: boolean;
}) {
  return (
    <div className={s.block}>
      <h2 className="h2">{headline}</h2>
      <p className={`lede ${s.body}`}>{body}</p>

      <div className={s.actions}>
        <a
          className="btn btn--primary"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cta.buttonLabel}
        </a>
        <p className={s.secondary}>
          or email <ObfuscatedEmail />
        </p>
      </div>

      {showResume && (
        <p className={s.secondary} style={{ marginTop: "1.75rem" }}>
          <a href={site.resumePath} download>
            Download résumé &rarr;
          </a>
        </p>
      )}
    </div>
  );
}
