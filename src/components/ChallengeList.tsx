"use client";

import { useEffect, useId, useState } from "react";
import s from "./ChallengeList.module.css";

type Challenge = { problem: string; approach: string };

/**
 * The original site revealed each approach on hover. Hover alone strands touch
 * and keyboard users, so the control is a real button that toggles on click and
 * *additionally* opens on hover when the device actually has a fine pointer.
 * One item stays open so the section never reads as empty.
 */
export default function ChallengeList({ items }: { items: readonly Challenge[] }) {
  const [open, setOpen] = useState(0);
  const [canHover, setCanHover] = useState(false);
  const baseId = useId();

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <ul className={s.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <li key={item.problem} className={s.item} data-open={isOpen}>
            <button
              type="button"
              id={buttonId}
              className={s.trigger}
              aria-expanded={isOpen}
              aria-controls={panelId}
              // On a hover device the row is already open by the time the
              // click lands, so toggling here would immediately close it.
              // Click just commits the selection; only touch needs a toggle.
              onClick={() => setOpen(canHover ? i : isOpen ? -1 : i)}
              onMouseEnter={canHover ? () => setOpen(i) : undefined}
              onFocus={canHover ? () => setOpen(i) : undefined}
            >
              <span className={s.problem}>{item.problem}</span>
              {/* A plus that loses its upright stroke on open, leaving a minus.
                  The two strokes are separate paths so only the vertical one
                  has to animate. */}
              <svg
                className={s.plus}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 12h16" />
                <path className={s.plusStem} d="M12 4v16" />
              </svg>
            </button>

            <div
              className={s.panelOuter}
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
            >
              <div className={s.panelInner}>
                <p className={s.approach}>{item.approach}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
