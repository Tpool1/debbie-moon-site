import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { site } from "@/content/site";
import {
  hero,
  credibility,
  challenges,
  proof,
  partnership,
  waysToWork,
  homeQuote,
} from "@/content/home";
import ChallengeList from "@/components/ChallengeList";
import PullQuote from "@/components/PullQuote";
import ClosingCTA from "@/components/ClosingCTA";
import s from "./home.module.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.metaDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={s.hero}>
        <div className={`wrap ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <h1 className={`h1 ${s.heroHeadline}`}>
              Building Brand. Sparking Demand.{" "}
              <span className={s.heroAccent}>Accelerating Pipelines.</span>
            </h1>
            <p className={`lede ${s.heroStandfirst}`}>{hero.standfirst}</p>
            <div className={s.heroActions}>
              <a
                className="btn btn--primary"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.ctaLabel}
              </a>
              <Link className="btn btn--ghost" href="/work-with-me/">
                Ways to work together
              </Link>
            </div>
          </div>

          <div className={s.portrait}>
            <img
              src="/images/headshot.webp"
              alt={`${site.name}, ${site.role}`}
              width={1260}
              height={1450}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ---------- Credibility strip ---------- */}
      <section className={`fabric ${s.credibility}`} aria-label="Background">
        <div className={`wrap ${s.credibilityInner}`}>
          <p className={s.credibilityLine}>{credibility.line}</p>
          <ul className={s.companies}>
            {credibility.companies.map((company) => (
              <li key={company.name}>
                <img
                  className={s.logo}
                  style={{ "--logo-scale": company.scale } as CSSProperties}
                  src={company.src}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
            <li className={s.companiesMore}>{credibility.suffix}</li>
          </ul>
        </div>
      </section>

      {/* ---------- Challenges ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">{challenges.title}</h2>
            <div className="section-head-aside">
              <p className="lede">{challenges.intro}</p>
              <p className={s.hint}>{challenges.hint}</p>
            </div>
          </div>
          <ChallengeList items={challenges.items} />
        </div>
      </section>

      {/* ---------- Proof ---------- */}
      <section className="section section--tint fabric">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">{proof.title}</h2>
          </div>
          <ul className={s.stats}>
            {proof.stats.map((stat) => (
              <li key={stat.figure} className={s.stat}>
                <p className={s.figure}>{stat.figure}</p>
                <p className={s.statBody}>{stat.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Partnership ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">{partnership.title}</h2>
          </div>
          <div className={s.partnerBlock}>
            <h3 className={s.colLabel}>{partnership.whoLabel}</h3>
            <ul className={s.whoList}>
              {partnership.who.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
          <div className={s.partnerBlock}>
            <h3 className={s.colLabel}>{partnership.leadLabel}</h3>
            <div className={s.disciplineGrid}>
              {partnership.disciplineGroups.map((g) => (
                <div key={g.group}>
                  <h4 className={s.groupLabel}>{g.group}</h4>
                  <ul className={s.disciplineList}>
                    {g.items.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Three ways to work together ---------- */}
      <section className="section section--tint fabric">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">{waysToWork.title}</h2>
            <div className="section-head-aside">
              <p className="lede">{waysToWork.intro}</p>
            </div>
          </div>
          <div className={s.cards}>
            {waysToWork.cards.map((card) => (
              <Link key={card.name} href={card.anchor} className={s.card}>
                <h3 className={`h3 ${s.cardTitle}`}>{card.name}</h3>
                <p className={s.cardBody}>{card.body}</p>
                <p className={s.cardLink}>
                  Learn more <span aria-hidden="true">&rarr;</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonial ---------- */}
      <section className="section">
        <div className="wrap">
          <PullQuote quote={homeQuote.quote} />
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="section section--tint fabric">
        <div className="wrap">
          <ClosingCTA />
        </div>
      </section>
    </>
  );
}
