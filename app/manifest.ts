import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: "Manifest",
  });

  return {
    name: t("name"),
    short_name: t("shortName"),
    description: t("description"),
    start_url: `/${routing.defaultLocale}`,
    display: "standalone",
    background_color: "#121212",
    theme_color: "#121212",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    lang: routing.defaultLocale,
    dir: "ltr",
    prefer_related_applications: false,
    categories: ["portfolio", "web development", "developer"],
    screenshots: [
      {
        src: "/screenshot.webp",
        sizes: "1280x720",
        type: "image/png",
        label: "Homepage of Furkan Gülabi's Portfolio",
      },
    ],
  };
}
