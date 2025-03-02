import { locales } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";

// Create and export the middleware
export default createMiddleware({
  ...routing,
  localePrefix: "always",
  defaultLocale: "en",
  locales,
  localeDetection: true,
});

export const config = {
  // Match all paths, including root
  matcher: ["/((?!api|_next|.*\\..*).*)", "/"],
};
