import s from "./PullQuote.module.css";

export default function PullQuote({
  quote,
  attribution = "From a LinkedIn recommendation",
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <figure className={s.block}>
      <span className={s.mark} aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className={s.quote}>{quote}</blockquote>
      <figcaption className={s.attribution}>{attribution}</figcaption>
    </figure>
  );
}
