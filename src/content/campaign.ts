/**
 * The "Bad Molecules" campaign — 12 pieces created for NobleAI, of which the
 * six approved for the portfolio appear below, in the order Debbie specified.
 * Erythrosine leads: it is the piece she picked for the card thumbnail, so the
 * pop-out opens on the artwork that was clicked.
 *
 * Debbie wrote the concept and copy; a scientific illustrator produced the
 * artwork. NobleAI owns the work; it appears here as portfolio with credit.
 *
 * `headline` and `subhead` are transcribed verbatim from the type set into
 * each image, so they double as the accessible description of the artwork.
 * Where the artwork contains a spelling the dictionary would disagree with
 * (Chlorphyrifos), the transcription preserves what was printed and `molecule`
 * carries the conventional name.
 */

export type CampaignSlide = {
  slug: string;
  /** Conventional chemical name, used for captions and the sector chip. */
  molecule: string;
  sector: string;
  headline: string;
  subhead: string;
  image: string;
};

export const campaignMeta = {
  id: "bad-molecules",
  eyebrow: "NobleAI, Product Launch",
  title: "Bad Molecules",
  summary:
    "A campaign that makes the chemicals regulators are phasing out more visible and relatable. Each piece pairs a photoreal molecular formation with an everyday product, from red dye in birthday cake to lipstick and sunscreen, grounding a technical problem in familiar consumer products.",
  role: "Concept and copy by Debbie Moon. Scientific illustration by a specialist illustrator. Created for NobleAI; work owned by NobleAI.",
} as const;

export const campaignSlides: CampaignSlide[] = [
  {
    slug: "erythrosine-red-3",
    molecule: "Erythrosine (Red 3)",
    sector: "Food and Beverage",
    headline: "Meet Erythrocine (aka Red 3). Pretty in pink. Dangerous to eat.",
    subhead:
      "Don't let toxic chemicals crash your party. Time to clean up the recipe.",
    image: "/images/campaign/erythrosine-red-3.webp",
  },
  {
    slug: "bisphenol-s",
    molecule: "Bisphenol S",
    sector: "Consumer Plastics",
    headline: "Meet Bisphenol S, aka BPS. Marketed as green, flagged as harmful.",
    subhead: "Consumers deserve better. Explore safer solutions today.",
    image: "/images/campaign/bisphenol-s.webp",
  },
  {
    slug: "siloxanes-d4",
    molecule: "Cyclic Siloxane D4",
    sector: "Cosmetics",
    headline: "Meet Cyclic Siloxane D4. Silky smooth skin, suspect side effects.",
    subhead: "Smarter formulations start here. Reformulate with insight.",
    image: "/images/campaign/siloxanes-d4.webp",
  },
  {
    slug: "butylated-hydroxyanisole",
    molecule: "Butylated Hydroxyanisole",
    sector: "Cosmetics",
    headline: "Meet Butylated Hydroxyanisole. The red flag in your lipstick.",
    subhead:
      "Find safer ingredients in minutes. Reformulate with confidence.",
    image: "/images/campaign/butylated-hydroxyanisole.webp",
  },
  {
    slug: "chlorpyrifos",
    molecule: "Chlorpyrifos",
    sector: "Agriculture",
    headline: "Meet Chlorphyrifos. The bad apple in your grocery basket.",
    subhead:
      "Ready for a safer pesticide solution? Find sustainable alternatives in minutes.",
    image: "/images/campaign/chlorpyrifos.webp",
  },
  {
    slug: "hexabromocyclododecane",
    molecule: "Hexabromocyclododecane",
    sector: "Flame Retardants",
    headline:
      "Meet Hexabromocyclododecane. The fire-safety hero with a toxic secret.",
    subhead:
      "Ready for safer flame retardants? Find sustainable alternatives in minutes.",
    image: "/images/campaign/hexabromocyclododecane.webp",
  },
];

/**
 * The pop-out uses the same gallery-card structure as the brand and website
 * work so all three portfolio stories scan consistently.
 */
export const campaignGalleryMeta = {
  ...campaignMeta,
  summary: [campaignMeta.summary],
} as const;

export const campaignPieces: GalleryPiece[] = campaignSlides.map((slide) => ({
  slug: slide.slug,
  title: slide.molecule,
  note: `${slide.sector} · ${slide.headline}`,
  alt: `${campaignMeta.title} campaign piece. Headline: ${slide.headline} ${slide.subhead}`,
  image: slide.image,
  width: 2000,
  height: 1250,
  span: "stacked",
}));
import type { GalleryPiece } from "@/components/WorkGallery";
