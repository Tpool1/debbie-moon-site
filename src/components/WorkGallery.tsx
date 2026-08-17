import s from "./WorkGallery.module.css";

export type GalleryMeta = {
  eyebrow: string;
  title: string;
  /** Body copy, one string per paragraph. */
  summary: readonly string[];
  /** Credit line, set smaller and quieter than the summary. */
  role: string;
  site?: string;
  siteLabel?: string;
};

export type GalleryPiece = {
  slug: string;
  title: string;
  note: string;
  /** Alt text. Written per piece: `note` is caption copy, not description. */
  alt: string;
  image: string;
  width: number;
  height: number;
  span: "full" | "portrait" | "stacked";
};

/**
 * The body shared by the Work I've Led pop-outs that show a set of finished
 * pieces — the NobleAI brand system and the website work. A grid rather than
 * the campaign's carousel: the campaign is variations on one layout, where
 * these are unrelated formats, and stepping through them one at a time hides
 * the only thing worth showing — that they hold together.
 */
export default function WorkGallery({
  meta,
  pieces,
}: {
  meta: GalleryMeta;
  pieces: readonly GalleryPiece[];
}) {
  return (
    <>
      <div className={s.head}>
        <div>
          <p className="eyebrow">{meta.eyebrow}</p>
          <h2 className={`h2 ${s.title}`}>{meta.title}</h2>
        </div>
        <div>
          {meta.summary.map((para) => (
            <p key={para.slice(0, 40)} className={s.summary}>
              {para}
            </p>
          ))}
          <p className={s.role}>{meta.role}</p>
          {meta.site && (
            <p className={s.siteLink}>
              <a
                className="link"
                href={meta.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Literal glyph: React does not decode &nearr;. */}
                {meta.siteLabel} ↗
              </a>
            </p>
          )}
        </div>
      </div>

      <div className={s.grid}>
        {pieces.map((piece) => (
          <figure key={piece.slug} className={s.piece} data-span={piece.span}>
            <img
              className={s.img}
              src={piece.image}
              alt={piece.alt}
              width={piece.width}
              height={piece.height}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={s.caption}>
              <span className={s.pieceTitle}>{piece.title}</span>
              <span className={s.note}>{piece.note}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
