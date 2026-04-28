import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hazim-bakar.com",
      lastModified: new Date(),
    },
    {
      url: "https://hazim-bakar.com/education",
      lastModified: new Date(),
    },
    {
      url: "https://hazim-bakar.com/project",
      lastModified: new Date(),
    },
    {
      url: "https://hazim-bakar.com/experience",
      lastModified: new Date(),
    },
  ];
}
