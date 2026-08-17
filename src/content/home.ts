export const hero = {
  headline: "Building Brand. Sparking Demand. Accelerating Pipelines.",
  standfirst:
    "I partner with founders and CxOs at B2B enterprises and high-growth startups to build and scale the marketing engine behind revenue.",
  ctaLabel: "Connect on LinkedIn",
} as const;

/**
 * The logo files are silhouettes in --accent rather than the brands' own
 * colours. The supplied sources were a mix of real alpha and checkerboard
 * "transparency" baked into the pixels, in palettes running from Cisco red to
 * the Toys R Us primaries; a single-colour strip is the only way seven of them
 * sit together at one visual weight, and it keeps red off the page.
 *
 * `scale` is an optical correction on top of the shared cap height. A stacked
 * mark like Honda's wing needs to be taller than a long wordmark like Saatchi
 * & Saatchi for the two to look the same size.
 */
export type CompanyLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
  scale: number;
};

export const credibility = {
  line: "Advertising agency roots, corporate savvy, startup grit.",
  companies: [
    {
      name: "Saatchi & Saatchi",
      src: "/images/logos/saatchi-saatchi.webp",
      width: 2028,
      height: 160,
      scale: 0.62,
    },
    {
      name: "Honda Powersports",
      src: "/images/logos/honda.webp",
      width: 202,
      height: 160,
      scale: 1.42,
    },
    {
      name: "Toys R Us",
      src: "/images/logos/toys-r-us.webp",
      width: 641,
      height: 160,
      scale: 0.92,
    },
    {
      name: "Cisco",
      src: "/images/logos/cisco.webp",
      width: 304,
      height: 160,
      scale: 1.24,
    },
    {
      name: "Hitachi Vantara",
      src: "/images/logos/hitachi-vantara.webp",
      width: 1446,
      height: 160,
      scale: 0.68,
    },
    {
      name: "Skycatch",
      src: "/images/logos/skycatch.webp",
      width: 1098,
      height: 160,
      scale: 0.74,
    },
    {
      name: "NobleAI",
      src: "/images/logos/noble-ai.webp",
      width: 654,
      height: 160,
      scale: 1.08,
    },
    {
      name: "Seekr",
      src: "/images/logos/seekr.png",
      width: 3357,
      height: 609,
      scale: 0.84,
    },
  ] satisfies CompanyLogo[],
  suffix: "…and more",
} as const;

export const challenges = {
  title: "The Challenges I’m Most Often Brought In to Solve.",
  intro:
    "I set the marketing strategy and roll up my sleeves to execute it, assembling the right team and partners as the business evolves. I bring structure and clear ownership while staying fast enough to experiment, adapt, and optimize as the data shifts.",
  hint: "Select a challenge to see my approach.",
  items: [
    {
      problem: "No one owns marketing and efforts feel chaotic",
      approach:
        "Bring structure and clear ownership so marketing is focused, accountable, and delivering measurable impact.",
    },
    {
      problem: "Brand identity and messaging get lost in the market",
      approach:
        "Guide brand strategy and sharpen messaging so it's consistent, visible, and differentiated.",
    },
    {
      problem: "Pipeline is inconsistent and underwhelming",
      approach:
        "Build demand generation programs that deliver qualified leads and create predictable growth.",
    },
    {
      problem: "Sales, marketing and product teams are not aligned",
      approach:
        "Create cross-functional alignment so priorities, campaigns, and execution move in the same direction.",
    },
    {
      problem: "We can't see how marketing drives revenue",
      approach:
        "Put the right measurement and reporting in place so results tie directly to business outcomes.",
    },
  ],
} as const;

export const proof = {
  title: "Proof, Not Promises",
  stats: [
    {
      figure: "$3.9M → $26.8M",
      body: "Grew marketing-sourced and attributed pipeline over three years at NobleAI, increasing marketing's share of new pipeline from 15% to 43%.",
    },
    {
      figure: "3x",
      body: "Exceeded pipeline targets within six months at Behavox, generating 10,000 leads, 300 MQLs, and 60 SQLs through digital campaigns and virtual events only.",
    },
    {
      figure: "45 days",
      body: "Average time to lead a corporate website from blank page to live, including strategy, structure, and copy, as the first marketing hire at NobleAI and SimplifyX.",
    },
  ],
} as const;

export const partnership = {
  title: "Who I Partner With and What I Lead",
  whoLabel: "Leaders I partner with",
  who: [
    "Founders and CEOs",
    "CROs and revenue leaders",
    "CxO and leadership teams",
  ],
  leadLabel: "Key marketing focus areas",
  disciplineGroups: [
    {
      group: "Demand and pipeline",
      items: [
        "Demand generation and digital marketing",
        "ABM and partner programs",
        "Marketing operations",
        "Website, search, and SEO",
      ],
    },
    {
      group: "Positioning and story",
      items: [
        "Positioning and messaging",
        "Product marketing",
        "Content strategy",
        "Brand and creative",
      ],
    },
    {
      group: "Go-to-market and comms",
      items: [
        "GTM planning and launch",
        "Sales enablement",
        "Events, field marketing, and experiential",
        "Corporate communications",
        "PR and analyst relations",
      ],
    },
  ],
} as const;

export const waysToWork = {
  title: "Three Ways to Work Together",
  intro:
    "From focused projects to fully embedded leadership, every engagement is tailored to your stage, your team, and what you need most right now.",
  cards: [
    {
      name: "Marketing leadership",
      anchor: "/work-with-me/#marketing-leadership",
      body: "Fractional or full-time leadership where I own the marketing function, set the strategy, and work with your existing team to execute and grow as the business evolves.",
    },
    {
      name: "Advisory services",
      anchor: "/work-with-me/#the-playbook",
      body: "Project-based or ongoing advisory support that reviews your marketing function and gives you a clear, prioritized plan on what to build or improve next.",
    },
    {
      name: "Ready-made team",
      anchor: "/work-with-me/#the-bench",
      body: "When you need more hands, I have a roster of trusted specialists and agencies I can engage quickly, so you have a capable marketing team without having to build one from scratch.",
    },
  ],
} as const;

export const homeQuote = {
  quote:
    "Her orchestration had a tremendous impact on increasing and accelerating pipeline for my team.",
} as const;
