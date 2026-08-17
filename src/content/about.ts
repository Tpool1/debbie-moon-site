export const aboutHero = {
  title: "Built for the",
  accentTitle: "Build.",
  subheadline:
    "From agency creative to B2B technology and high-growth startups, I have built and scaled brands, brought complex products and platforms to market, and created the marketing engines that drive demand.",
  storyTitle: "The Story So Far",
} as const;

export const story = [
  "My career started in advertising agencies, back when AOL CDs still arrived in the mail. Agency life taught me to move quickly, adapt, and use creativity to solve real business problems. I helped launch retail stores, promote video games and toys, and fill hotel rooms for major consumer brands.",
  "I later moved into B2B technology, SaaS, and high-growth startups, where I have spent most of my career. At Cisco and Hitachi Vantara, I worked on major IoT initiatives, from Cisco's Internet of Everything campaigns to Hitachi's Smart Cities work and Lumada, its IoT platform built within a startup-like business unit.",
  "Building from the ground up has been a constant. I have often been the first marketing hire or leader, creating the strategy, systems, programs, and teams needed to grow. My experience spans demand generation, go-to-market strategy, product marketing, brand, corporate communications, events, and sales enablement. I enjoy taking a complex product or SaaS offering, finding what makes it matter to the market, and building the programs that bring it to life.",
  "Across industries, audiences, and stages of growth, I bring scrappy B2C instincts to the discipline of B2B marketing. I think on my feet, bring teams together, and stay close to both strategy and execution. I am always looking for the idea that will break through the noise and move the business forward, whether that means a standout campaign or giving old swag, including the occasional AOL CD, a useful second life as a marketing moment.",
] as const;

export type WorkItem = {
  title: string;
  kicker: string;
  body: string;
  role: string;
  images: { src: string; alt: string }[];
  /** Text of the pop-out trigger; the arrow is appended by the dialog. */
  hrefLabel: string;
  /** Which pop-out the card opens. */
  modal: "campaign" | "brand" | "website";
};

export const selectedWork = {
  title: "Work I've Led",
  intro:
    "Creative campaigns, brand building, and digital experiences, from strategy through launch.",
  items: [
    {
      title: "“Meet” Some Bad Molecules",
      kicker: "Product Launch Creative",
      body: "A launch campaign for NobleAI's Risk and Ingredient Replacement (RAIR) solution, created to make a complex technical challenge more immediate and memorable. Punchy copy and realistic 3D molecular visuals connected chemical risk to the everyday products it affects.",
      role: "Concept, creative copy, and campaign leadership from development through execution across digital channels and events. Scientific illustrations created in partnership with a specialist illustrator.",
      // One piece, not a three-up collage: the Erythrosine ad is the campaign's
      // best-known execution and the birthday cake is what makes a chemistry
      // headline stop anyone at thumbnail size.
      images: [
        {
          src: "/images/campaign/erythrosine-red-3.webp",
          alt: "Campaign piece for Erythrocine, also known as Red 3: a pink birthday cake scattered with confetti sprinkles, the molecule modelled on top of it like a cake topper.",
        },
      ],
      // The campaign used to live in its own section on the home page. It now
      // opens in a dialog from this card, so there is no page to link to.
      modal: "campaign",
      hrefLabel: "Check out campaign creatives",
    },
    {
      title: "Building a Brand from Zero",
      kicker: "Brand Strategy & Identity",
      body: "When I joined NobleAI, the company had a legacy logo and a website with little relevant content. Working closely with the CEO, a designer, and a web development agency, I built a cohesive visual and verbal identity, including a refined logo and a new website launched within 45 days. The system carried across every customer touchpoint, giving the growing company a brand people could recognize and trust.",
      role: "Brand strategy, identity system, messaging, and creative direction across digital, product, sales, campaigns, and events.",
      // A tighter crop of the trade-show backdrop than the one in the pop-out:
      // the full two-panel shot loses its headlines at thumbnail size.
      images: [
        {
          src: "/images/brand/noble-booth-thumb.webp",
          alt: "A NobleAI trade show backdrop reading 'AI for Science. Deep Insights. Safe, Sustainable Solutions.' under the company logo, with the molecule motif running across the bottom.",
        },
      ],
      modal: "brand",
      hrefLabel: "See the brand transformation",
    },
    {
      title: "Making Complex Technology Easier to Understand",
      kicker: "Website Strategy & Launches",
      body: "I led complete website launches for NobleAI and SimplifyX, plus strategic website improvements for Seekr, translating complex products and services into clear, useful customer journeys built to support conversion.",
      role: "Website strategy, positioning, information architecture, UX direction, messaging, content, and creative direction.",
      images: [
        {
          src: "/images/work/simplifyx-home.webp",
          alt: "The SimplifyX homepage, showing the site structure and messaging.",
        },
      ],
      // The card used to link out to simplifyx.com — one of the three sites,
      // and none of the work behind it. The pop-out carries all three.
      modal: "website",
      hrefLabel: "See the web work",
    },
  ] satisfies WorkItem[],
} as const;

/**
 * The page closes here: story, work, then this. The standalone pull-quote block
 * and the certifications list that used to sit between the work and the CTA are
 * gone — the recommendations they drew from are one link away below, and the
 * page ends on the ask rather than on a credentials list.
 */
export const letsTalk = {
  title: "Let's Talk",
  body: "Whether you are looking for marketing leadership, exploring a project, or simply want to connect, I would love to hear what is ahead.",
  buttonLabel: "Start a Conversation",
  resumeLabel: "Download résumé",
  linkedinLabel: "Read recommendations on LinkedIn",
} as const;
