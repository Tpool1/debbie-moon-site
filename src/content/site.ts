/**
 * Global site identity, navigation, and contact details.
 * Every other content module builds on this.
 */

export const site = {
  name: "Debbie Moon",
  role: "Marketing Executive",
  /** Used in <title> suffixes and the JSON-LD Person block. */
  jobTitle: "Marketing Executive | B2B SaaS & AI Platforms",
  url: "https://dmoonmarketing.com",
  tagline: "Building Brand. Sparking Demand. Accelerating Pipelines.",
  metaDescription:
    "Debbie Moon is a marketing executive with 20+ years scaling B2B SaaS and AI platform companies — demand generation, positioning, and go-to-market leadership, fractional or full-time.",
  linkedin: "https://www.linkedin.com/in/debbiehmoon/",
  linkedinRecommendations:
    "https://www.linkedin.com/in/debbiehmoon/details/recommendations/",
  /**
   * Split so the full address never appears as a literal string in the
   * exported HTML. ObfuscatedEmail joins these on the client.
   */
  emailUser: "debbie",
  emailDomain: "dmoonmarketing.com",
  resumePath: "/debbie-moon-resume.pdf",
  alumniOf: "University of California, Irvine",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work-with-me/", label: "Work With Me" },
  { href: "/about/", label: "About" },
] as const;

/** Fed to the Person JSON-LD `knowsAbout` array. */
export const expertise = [
  "Demand Generation",
  "Go-to-Market Strategy",
  "Product Marketing",
  "Brand Strategy",
  "Positioning and Messaging",
  "Account-Based Marketing",
  "B2B SaaS Marketing",
] as const;

export const cta = {
  headline: "Ready to Cut Through the Noise and See Results?",
  body: "Tell me what's going on and we'll figure out whether it's a fit.",
  buttonLabel: "Let's Connect",
} as const;
