import type { MetadataRoute } from "next";

const BASE_URL = "https://hazim-bakar.com";

const projectSlugs = [
  "muqrie-travel-agency",
  "kem-bumi-jati",
  "hazim-bakar-portfolio",
  "self-hosted-ai-assistant",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/education`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/project`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/project/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
