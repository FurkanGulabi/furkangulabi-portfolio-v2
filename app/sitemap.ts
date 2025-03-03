import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://furkangulabi.com";
  const routes = ["/", "/projects", "/resume", "/contact"];
  const lastModified = new Date();

  const sitemap: MetadataRoute.Sitemap = [];

  // Add routes for each locale
  routing.locales.forEach((locale) => {
    routes.forEach((route) => {
      // All locales should have their prefix in the URL
      const path = `/${locale}${route}`;

      // Set priority based on the route (home page gets highest priority)
      const priority =
        route === "/"
          ? 1.0
          : route === "/projects"
          ? 0.9
          : route === "/resume"
          ? 0.8
          : 0.7;

      sitemap.push({
        url: `${baseUrl}${path}`,
        lastModified,
        changeFrequency: "weekly",
        priority,
      });
    });
  });

  return sitemap;
}
