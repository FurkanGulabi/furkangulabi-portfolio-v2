import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://furkangulabi.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: "https://furkangulabi.com/tr",
          en: "https://furkangulabi.com/en",
        },
      },
    },
    {
      url: "https://furkangulabi.com/resume",
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: "https://furkangulabi.com/tr/resume",
          en: "https://furkangulabi.com/en/resume",
        },
      },
    },
    {
      url: "https://furkangulabi.com/projects",
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: "https://furkangulabi.com/tr/projects",
          en: "https://furkangulabi.com/en/projects",
        },
      },
    },
    {
      url: "https://furkangulabi.com/contact",
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: "https://furkangulabi.com/tr/contact",
          en: "https://furkangulabi.com/en/contact",
        },
      },
    },
  ];
}
