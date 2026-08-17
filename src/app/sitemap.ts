import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Static export requires a fixed output, so no dynamic revalidation here.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/work-with-me/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/about/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
