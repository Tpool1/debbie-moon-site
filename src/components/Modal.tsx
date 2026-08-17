"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import s from "./Modal.module.css";

/**
 * The pop-out shell behind the Selected Work cards. A native <dialog> so focus
 * trapping, Esc, and inertness of the page behind come from the platform
 * rather than being re-implemented.
 *
 * The body mounts only while open. Both of the things that go in here — a
 * carousel that runs scroll listeners over its track, and a gallery of
 * full-size artwork — are worth nothing on a page where the dialog may never
 * be opened.
 */
export default function Modal({
  label,
  title,
  className = "",
  panelClassName = "",
  children,
}: {
  /** Text of the trigger link. */
  label: string;
  /** Accessible name for the dialog itself. */
  title: string;
  /** Lets the host page apply its own card-link styles to the trigger. */
  className?: string;
  /** Lets a body opt into layout tweaks scoped to the dialog. */
  panelClassName?: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    dialogRef.current?.close();
    // Set state here rather than waiting for the dialog's `close` event: that
    // event is queued as a task, and a throttled tab can defer it long enough
    // to leave the component out of sync with the element.
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    // Opening here rather than in the click handler means the body is already
    // committed to the DOM, and it avoids depending on a rAF callback, which
    // browsers throttle in backgrounded tabs.
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();

    // Esc closes the dialog in the platform, not through our handler, so sync
    // state off it. `cancel` fires synchronously on Esc; `close` is the
    // belt-and-braces backstop for any other path that closes the element.
    // Both are native listeners: `close` does not bubble, so React never
    // delegates it, and onClose would silently miss.
    const onClose = () => setOpen(false);
    dialog.addEventListener("cancel", onClose);
    dialog.addEventListener("close", onClose);

    // showModal() blocks interaction but not scrolling of the page behind.
    const { style } = document.documentElement;
    const previous = style.overflow;
    style.overflow = "hidden";

    return () => {
      dialog.removeEventListener("cancel", onClose);
      dialog.removeEventListener("close", onClose);
      style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`link ${s.trigger} ${className}`}
        onClick={() => setOpen(true)}
      >
        {label} &rarr;
      </button>

      <dialog
        ref={dialogRef}
        className={s.dialog}
        aria-label={title}
        // A click landing on the dialog itself rather than its contents is a
        // click on the backdrop.
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className={`${s.panel} ${panelClassName}`}>
          <button
            type="button"
            className={s.close}
            onClick={close}
            aria-label="Close"
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
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {open && children}
        </div>
      </dialog>
    </>
  );
}
