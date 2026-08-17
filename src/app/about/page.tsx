import type { Metadata } from "next";
import { site } from "@/content/site";
import { aboutHero, story, selectedWork, letsTalk } from "@/content/about";
import EmailButton from "@/components/EmailButton";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import CampaignModal from "@/components/CampaignModal";
import BrandModal from "@/components/BrandModal";
import WebsiteModal from "@/components/WebsiteModal";
import s from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "From ad agencies to Cisco and Hitachi Vantara to 15+ years building marketing functions from zero at high-growth startups — Debbie Moon's path into demand generation and go-to-market leadership.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={s.hero}>
        <div className={`wrap section-head ${s.heroHead}`}>
          <h1 className={`h1 ${s.heroTitle}`}>
            {aboutHero.title}{" "}
            <span className={s.heroAccent}>{aboutHero.accentTitle}</span>
          </h1>
          <p className={`lede section-head-aside ${s.heroBody}`}>
            {aboutHero.subheadline}
          </p>
        </div>
      </section>

      {/* ---------- Story ---------- */}
      <section className={`section ${s.storySection}`}>
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">{aboutHero.storyTitle}</h2>
          </div>
          <div className={s.story}>
            <img
              className={s.portrait}
              src="/images/about-profile.webp"
              alt={`${site.name}, ${site.role}`}
              width={1200}
              height={1800}
              fetchPriority="high"
              decoding="async"
            />
            <div>
              {story.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Selected work ---------- */}
      <section className="section section--tint fabric">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">{selectedWork.title}</h2>
            <div className="section-head-aside">
              <p className="lede">{selectedWork.intro}</p>
            </div>
          </div>

          <div className={s.work}>
            {/* Every card opens its work in a pop-out; `modal` says which. */}
            {selectedWork.items.map((item) => {
              const modal = "modal" in item ? item.modal : undefined;

              return (
                <article key={item.title} className={s.workCard}>
                  <div className={s.thumbs} data-count={item.images.length}>
                    {item.images.map((img) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>

                  <div className={s.workBody}>
                    <p className={s.workKicker}>{item.kicker}</p>
                    <h3 className={`h3 ${s.workTitle}`}>{item.title}</h3>
                    <p className={s.workText}>{item.body}</p>
                    <p className={s.workRole}>{item.role}</p>

                    {modal === "campaign" && (
                      <CampaignModal
                        label={item.hrefLabel}
                        className={s.workLink}
                      />
                    )}

                    {modal === "brand" && (
                      <BrandModal label={item.hrefLabel} className={s.workLink} />
                    )}

                    {modal === "website" && (
                      <WebsiteModal
                        label={item.hrefLabel}
                        className={s.workLink}
                      />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Let's talk ---------- */}
      <section className="section">
        <div className="wrap">
          <div className={s.talk}>
            <h2 className="h2">{letsTalk.title}</h2>
            <p className={`lede ${s.talkBody}`}>{letsTalk.body}</p>

            <div className={s.talkActions}>
              <EmailButton
                label={letsTalk.buttonLabel}
                subject="Let's start a conversation"
              />
              <p className={s.talkEmail}>
                Or email <ObfuscatedEmail />
              </p>
            </div>

            <p className={s.talkLinks}>
              <a href={site.resumePath} download>
                {letsTalk.resumeLabel} &rarr;
              </a>
              <a
                href={site.linkedinRecommendations}
                target="_blank"
                rel="noopener noreferrer"
              >
                {letsTalk.linkedinLabel} &rarr;
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
