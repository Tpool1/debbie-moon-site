"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { campaignMeta, campaignSlides } from "@/content/campaign";
import s from "./CampaignCarousel.module.css";

/**
 * The track is a plain CSS scroll-snap row, so it scrolls and every slide stays
 * reachable with JavaScript disabled. This component only layers on the arrows,
 * dots, and active-slide tracking.
 */
export default function CampaignCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const total = campaignSlides.length;

  // Derive the active slide from whichever one sits nearest the track's centre.
  // "Most visible" via IntersectionObserver is ambiguous whenever more than one
  // slide fits on screen — as happens in the dialog — and leaves `active`
  // pointing at a neighbour, which then throws off the arrows.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const sync = () => {
      const centre = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDistance = Infinity;

      [...track.children].forEach((child, i) => {
        const slide = child as HTMLElement;
        const slideCentre =
          slide.offsetLeft - track.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(slideCentre - centre);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      });

      // At either end the scroll is clamped, so the first and last slides can
      // never actually reach the centre when several fit on screen. Without
      // this the counter never reads 1, and the end arrows never disable.
      const max = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft <= 1) best = 0;
      else if (track.scrollLeft >= max - 1) best = track.children.length - 1;

      setActive(best);
    };

    sync();
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, campaignSlides.length - 1));
    const slide = track.children[clamped] as HTMLElement | undefined;
    if (!slide) return;

    // Commit the selection now rather than waiting for the scroll listener:
    // the dots, counter, and arrow disabled states should respond to the click
    // itself, not to a smooth-scroll animation that may still be in flight.
    setActive(clamped);

    // The track snaps on `scroll-snap-align: center`, so scroll to centre the
    // slide. Left-aligning it instead lands between snap points and the browser
    // pulls the scroll straight back, which reads as a dead arrow whenever the
    // slide is narrower than the track.
    const target =
      slide.offsetLeft -
      track.offsetLeft +
      slide.offsetWidth / 2 -
      track.clientWidth / 2;
    const max = track.scrollWidth - track.clientWidth;

    // scrollTo on the track avoids scrollIntoView yanking the whole page.
    track.scrollTo({
      left: Math.max(0, Math.min(target, max)),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <>
      <div className={s.head}>
        <div>
          <p className="eyebrow">{campaignMeta.eyebrow}</p>
          <h2 className={`h2 ${s.title}`}>{campaignMeta.title}</h2>
        </div>
        <div>
          <p className={s.summary}>{campaignMeta.summary}</p>
          <p className={s.role}>{campaignMeta.role}</p>
        </div>
      </div>

      <div className={s.viewport}>
        <ul
          ref={trackRef}
          className={s.track}
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-label={`${campaignMeta.title} campaign, ${total} pieces`}
          aria-roledescription="carousel"
        >
          {campaignSlides.map((slide, i) => (
            <li
              key={slide.slug}
              className={s.slide}
              data-index={i}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}: ${slide.molecule}`}
            >
              <figure className={s.figure}>
                {/* Plain <img> rather than next/image: the optimizer is
                    unavailable under static export and these are already
                    correctly sized WebP. */}
                <img
                  className={s.img}
                  src={slide.image}
                  alt={`${campaignMeta.title} campaign piece. Headline: ${slide.headline} ${slide.subhead}`}
                  width={2000}
                  height={1250}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
                <figcaption className={s.caption}>
                  <span className={s.molecule}>{slide.molecule}</span>
                  <span className={s.sector}>{slide.sector}</span>
                  <span className={s.line}>{slide.headline}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <div className={s.controls}>
        <div className={s.buttons}>
          <button
            type="button"
            className={s.arrow}
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous piece"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className={s.arrow}
            onClick={() => goTo(active + 1)}
            disabled={active === total - 1}
            aria-label="Next piece"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className={s.dots}>
          {campaignSlides.map((slide, i) => (
            <button
              key={slide.slug}
              type="button"
              className={s.dot}
              aria-current={i === active}
              aria-label={`Go to ${slide.molecule}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <p className={s.counter} aria-live="polite">
          {active + 1} / {total}
        </p>
      </div>
    </>
  );
}
