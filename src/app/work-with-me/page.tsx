import type { Metadata } from "next";
import { site } from "@/content/site";
import {
  workHero,
  engagementIntro,
  engagements,
  capabilities,
  howItWorks,
  workQuote,
  workCta,
} from "@/content/workWithMe";
import EmailButton from "@/components/EmailButton";
import s from "./work.module.css";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Fractional or full-time embedded marketing leadership, advisory support, or a full marketing function — built around what your company needs right now.",
  alternates: { canonical: "/work-with-me/" },
};

export default function WorkWithMePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={s.hero}>
        {/* Same two-column head as the sections below it, so the title and its
            standfirst together span the full width rather than stacking into a
            column that leaves half the page empty. */}
        <div className={`wrap section-head ${s.heroHead}`}>
          <h1 className={`h1 ${s.heroTitle}`}>
            <span>{workHero.title}</span>
            <span className={s.heroAccent}>{workHero.accentTitle}</span>
          </h1>
          <div className={`lede section-head-aside ${s.heroBody}`}>
            <p>{workHero.standfirst}</p>
          </div>
        </div>
      </section>

      {/* ---------- Engagement types ---------- */}
      <section className="section section--tint fabric">
        <div className="wrap">
          <div className={`section-head ${s.engagementSectionHead}`}>
            <h2 className="h2">Engagement Types</h2>
            <p className={`lede ${s.engagementIntro}`}>{engagementIntro}</p>
          </div>

          {/* Format, ideal situation, outcome — the same three beats in the
              same order in all three cards, so they can be read across. */}
          <div className={s.engagements}>
            {engagements.map((e) => (
              <article key={e.id} id={e.id} className={s.engagement}>
                <div className={s.engagementHead}>
                  <h3 className={`h2 ${s.name}`}>{e.name}</h3>
                  <p className={s.promise}>{e.promise}</p>
                </div>

                <p className={s.structure}>{e.structure}</p>
                <p className={s.body}>{e.body}</p>

                <p className={s.bestFor}>
                  <span className={s.bestForLabel}>Best for</span>
                  {e.bestFor}
                </p>

                <p className={s.trigger}>{e.trigger}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Core capabilities ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">{capabilities.title}</h2>
          </div>
          <ul className={s.capabilities}>
            {capabilities.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Testimonial ---------- */}
      <section className="section section--tint fabric">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">{workQuote.title}</h2>
          </div>
          <figure className={s.quoteBlock}>
            <span className={s.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className={s.quote}>{workQuote.quote}</blockquote>
            <figcaption className={s.quoteAttribution}>
              {workQuote.attribution}
            </figcaption>
          </figure>
          <p className={s.quoteLink}>
            <a
              className="link"
              href={site.linkedinRecommendations}
              target="_blank"
              rel="noopener noreferrer"
            >
              {workQuote.linkLabel} &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">{howItWorks.title}</h2>
          </div>
          <ol className={s.steps}>
            {howItWorks.steps.map((step, i) => (
              <li key={step.name} className={s.step}>
                <p className={s.stepNum} aria-hidden="true">
                  {i + 1}
                </p>
                <h3 className={`h3 ${s.stepName}`}>{step.name}</h3>
                <p className={s.stepBody}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section section--tint fabric">
        <div className="wrap">
          <div className={s.cta}>
            <h2 className="h2">{workCta.headline}</h2>
            {workCta.body.map((para) => (
              <p key={para.slice(0, 30)} className={`lede ${s.ctaBody}`}>
                {para}
              </p>
            ))}
            <div className={s.ctaActions}>
              <EmailButton
                label={workCta.buttonLabel}
                subject="Let's start a conversation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
