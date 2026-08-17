import type { GalleryPiece } from "@/components/WorkGallery";

/**
 * The NobleAI brand system — the legacy mark Debbie inherited, then the pieces
 * she shipped once the new visual language was set. Photographs of the printed
 * work rather than the source files, which is what makes the point: the same
 * mark, palette, and molecule motif surviving the trip from a deck template to
 * a twelve-foot trade-show wall.
 *
 * NobleAI owns the work; it appears here as portfolio with credit.
 *
 * `span` places the piece in the gallery grid. The shapes are wildly different
 * — a 2.6:1 backdrop, a roll-up banner taller than it is wide, a 5.9:1
 * LinkedIn header — so each one declares where it sits rather than being forced
 * into a common aspect ratio and cropped.
 */

export const brandMeta = {
  eyebrow: "NobleAI, Brand Building",
  title: "Building NobleAI's Brand From Zero",
  summary: [
    "Working with NobleAI's CEO and a freelance designer, the new brand included a completely new visual and verbal identity for the company's next stage of growth, spanning logo, color, typography, illustration, photography, voice, templates, and guidelines.",
    "Applied across the website, product, sales materials, campaigns, events, and content, the system strengthened company-wide recognition and helped accelerate sales conversations. New logo and website launched within 45 days.",
  ],
  role: "Brand strategy and creative direction by Debbie Moon. Created for NobleAI; work owned by NobleAI.",
  /** The card used to link straight out to the site; the pop-out carries it. */
  site: "https://www.noble.ai",
  siteLabel: "noble.ai",
} as const;

export const brandPieces: GalleryPiece[] = [
  {
    slug: "legacy",
    title: "Legacy Brand",
    note: "Starting point",
    alt: "The legacy Noble.AI logo: the wordmark in white on black, with the O drawn as a green circle, the A as a red triangle, and the I as a blue bar.",
    image: "/images/brand/noble-legacy.webp",
    width: 1600,
    height: 900,
    span: "stacked",
  },
  {
    slug: "deck",
    title: "Presentation Template",
    note: "Sales enablement",
    alt: "A NobleAI title slide: the new logo top left, placeholder customer name and date, and the molecule motif drawn in blue down the right side.",
    image: "/images/brand/noble-deck.webp",
    width: 1246,
    height: 706,
    span: "stacked",
  },
  {
    slug: "food-bev",
    title: "Food & Beverage Overview",
    note: "Content assets",
    alt: "A NobleAI food and beverage overview sheet headed 'Accelerate Food & Beverage Product Innovation: From Months to Minutes', with the molecule motif across the top and a row of use-case icons below.",
    image: "/images/brand/noble-food-bev.webp",
    width: 1275,
    height: 1650,
    span: "portrait",
  },
  {
    slug: "banner",
    title: "Event Banners",
    note: "Event signage",
    alt: "A NobleAI roll-up banner standing beside open lobby doors at a conference, reading 'AI for Science. Deep Insights. Safe, Sustainable Solutions'.",
    image: "/images/brand/noble-banner.webp",
    width: 1100,
    height: 2432,
    span: "portrait",
  },
  {
    slug: "linkedin",
    title: "LinkedIn Banner",
    note: "Social campaign",
    alt: "The NobleAI LinkedIn company page, its header a blue-to-violet gradient with the molecule structure drawn across it in white and the logo at the right.",
    image: "/images/brand/noble-linkedin.webp",
    width: 1616,
    height: 275,
    span: "full",
  },
  {
    slug: "booth",
    title: "Booth Backdrop",
    note: "Event environment",
    alt: "A NobleAI trade show booth: two twelve-foot backdrop walls reading 'Accelerate Product Innovation. In Minutes. Not Months.' and 'AI for Science. Deep Insights. Safe, Sustainable Solutions.' with the molecule motif across the bottom.",
    image: "/images/brand/noble-booth.webp",
    width: 1800,
    height: 694,
    span: "full",
  },
];
