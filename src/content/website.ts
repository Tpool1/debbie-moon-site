/**
 * The website work — two launches (NobleAI, SimplifyX) and a set of strategic
 * improvements (Seekr). Screenshots of the live pages, since the point of the
 * piece is the finished customer journey rather than the wireframes behind it.
 *
 * Each company owns its site; the pages appear here as portfolio with credit.
 */

export const websiteMeta = {
  eyebrow: "NobleAI, SimplifyX, Seekr",
  title: "Website Strategy & Launches",
  summary: [
    "For NobleAI and SimplifyX, I led complete website launches from positioning and messaging through information architecture, content, UX direction, and creative direction. For Seekr, I optimized the homepage and built a new Resource Library.",
    "Working with external web development agencies, I translated complex offerings into clear, useful customer journeys built to support conversion.",
  ],
  role: "Website strategy, messaging, information architecture, content, UX direction, creative direction, and agency collaboration.",
} as const;

export const websiteProjects = [
  {
    slug: "nobleai-website-build",
    title: "NobleAI Website Build",
    description:
      "Built a new brand-led website with NobleAI’s CEO and web developer, launching the company’s first fully realized site within 45 days.",
    images: [
      {
        alt: "The NobleAI homepage, headed 'Science-Based AI for Real-World Predictions' with a sub-headline on commercialization, margin, and performance, and a 'Talk to an expert' call to action.",
        src: "/images/work/noble-home-hero.webp",
        width: 1800,
        height: 830,
      },
    ],
  },
  {
    slug: "simplifyx-website-build",
    title: "SimplifyX Website Build",
    description:
      "Rebuilt a code-dependent site into a CMS-powered experience with updated content, clearer UX, and multiple conversion paths. The side-by-side view shows the transformation from the original site to the new launch in 30 days.",
    images: [
      {
        label: "Before",
        alt: "The previous SimplifyX homepage hero, headed 'The AI Platform That Finally Delivers on Enterprise Promises' over a pale gradient, with 'Learn More' and 'Explore Use Cases' buttons.",
        src: "/images/work/simplifyx-old-hero.webp",
        width: 1170,
        height: 700,
      },
      {
        label: "After",
        alt: "The rebuilt SimplifyX homepage hero, headed 'AI with deep industry intelligence for Financial Services' beside a screenshot of the product's command centre.",
        src: "/images/work/simplifyx-new-hero.webp",
        width: 1456,
        height: 645,
      },
    ],
  },
  {
    slug: "seekr-website-optimization",
    title: "Seekr Website Optimization",
    description:
      "Added a clear “What We Do” section and improved navigation to make Seekr’s offering easier to understand. I also built the Resource Library from scratch to create a more useful content destination.",
    images: [
      {
        alt: "The Seekr homepage, showing a row of customer logos under 'Top leaders trust Seekr' above a paragraph explaining how enterprises, government, and critical infrastructure use its AI operating system.",
        src: "/images/work/seekr-home.webp",
        width: 1700,
        height: 843,
      },
    ],
  },
] as const;
