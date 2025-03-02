"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export const links = [
  { id: "home", label: "Home", href: "/" },
  { id: "resume", label: "Resume", href: "/resume" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "contact", label: "Contact", href: "/contact" },
];
function normalizePath(path: string) {
  // Remove the language prefix (e.g., '/tr') from the path
  const replaced = path.replace(/^\/\w+/, "");

  if (replaced) {
    return replaced;
  } else {
    return "/";
  }
}

const DesktopNav = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const normalizedPathname = normalizePath(pathname);

  return (
    <ul className="flex gap-8">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`text-primary/70  relative hover:text-primary transition-all ${
                link.href === pathname && "text-primary/100"
              }`}
            >
              {normalizedPathname === link.href && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-y-6 w-full h-1  bg-primary"
                  style={{ borderRadius: 9999 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <span className="relative z-10">{t(link.label)}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopNav;
