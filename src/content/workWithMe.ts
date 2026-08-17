export const workHero = {
  title: "Stop Random Acts of Marketing.",
  accentTitle: "Start a Growth Engine.",
  standfirst:
    "I partner with founders and CxOs to bring clear direction, senior ownership, and the right support to the work that drives growth.",
} as const;

export const engagementIntro =
  "I work best with founders and leadership teams who want a real operator, not a strategy deck. The style is flexible. The accountability isn't.";

/**
 * Each card carries the same three beats in the same order — format, ideal
 * situation, outcome — so the three read as one comparison rather than three
 * write-ups. The per-card scope lists that used to sit here are now the shared
 * "My Core Capabilities" strip below, which says the same thing once.
 */
export type Engagement = {
  id: string;
  name: string;
  promise: string;
  /** Format. */
  structure: string;
  body: string;
  /** Ideal situation. */
  bestFor: string;
  /** Outcome — the line the card closes on. */
  trigger: string;
};

export const engagements: Engagement[] = [
  {
    // The ids are the anchor targets the home page's three cards link to.
    id: "marketing-leadership",
    name: "Marketing Leadership",
    promise: "Senior ownership for the full marketing function.",
    structure: "Fractional or full-time.",
    body: "I step into the senior marketing seat to set direction, align teams and partners, and make marketing accountable to business and revenue goals.",
    bestFor:
      "Organizations that need an experienced leader to bring focus, momentum, and ownership to the full marketing function.",
    trigger: "Engage when marketing needs an owner.",
  },
  {
    id: "the-playbook",
    name: "Advisory Services",
    promise: "Expert perspective for pivotal decisions.",
    structure: "Project-based or ongoing.",
    body: "I assess the challenge in front of you, identify what is limiting progress, and provide clear priorities your team can put into action.",
    bestFor:
      "Leadership teams preparing for a launch, evaluating investments, or reassessing their go-to-market approach.",
    trigger: "Engage when the next decision needs clarity.",
  },
  {
    id: "the-bench",
    name: "Ready-Made Team",
    promise: "The right specialists, led as one team.",
    structure: "Tailored, multi-partner.",
    body: "I assemble and lead a trusted group of specialists around the work that matters most.",
    bestFor:
      "Companies that need to launch, reposition, improve demand generation, or expand execution without a prolonged hiring process.",
    trigger: "Engage when the strategy needs more hands quickly.",
  },
];

export const capabilities = {
  title: "My Core Capabilities",
  items: [
    "Go-to-Market",
    "Demand Generation",
    "Product Marketing",
    "Brand",
    "Corporate Communications",
    "Executive Communications",
    "Sales Enablement",
    "Content Strategy",
    "Website & Digital Experience",
    "Events",
    "Marketing Operations",
    "Analytics & Measurement",
  ],
} as const;

export const howItWorks = {
  title: "How It Works",
  steps: [
    {
      name: "Short conversation",
      body: "We talk for 30 minutes. You tell me what's going on, I ask questions, and we figure out honestly whether I'm the right fit.",
    },
    {
      name: "Proposal or next step",
      body: "If there's a fit, I'll put together a simple proposal covering scope, time commitment, and terms. No boilerplate, no long sales process.",
    },
    {
      name: "Inside from day one",
      body: "I join your channels, attend the meetings that matter, and start doing real work immediately, not spending weeks getting up to speed.",
    },
  ],
} as const;

export const workQuote = {
  title: "What Colleagues Say",
  quote:
    "Debbie built a demand generation function from the ground up, bringing teams together to establish the workflows, processes, and alignment needed to guide prospects through the full funnel. She combines a deep understanding of marketing strategy with the ability to translate that strategy into organized, actionable execution.",
  attribution: "Former direct report, B2B AI company",
  linkLabel: "Read more on LinkedIn",
} as const;

export const workCta = {
  headline: "Let's Start With a Conversation",
  body: [
    "We start with a 30-minute conversation about what is going on, where you need support, and whether I am the right fit.",
    "If it makes sense to move forward, I will put together a simple proposal outlining scope, time commitment, and next steps.",
  ],
  buttonLabel: "Start a Conversation",
} as const;
