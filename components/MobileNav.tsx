"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

import { links } from "@/components/DesktopNav";
import { motion } from "framer-motion";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

function normalizePath(path: string) {
  // Remove the language prefix (e.g., '/tr') from the path
  const replaced = path.replace(/^\/\w+/, "");

  if (replaced) {
    return replaced;
  } else {
    return "/";
  }
}

const MobileNav = () => {
  const pathname = usePathname();
  const normalizedPathname = normalizePath(pathname);
  return (
    <Sheet>
      <SheetTrigger
        id="sheet"
        role="button"
        aria-label="Open menu"
        aria-labelledby="labeldiv"
        tabIndex={0}
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-myColor" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="font-semibold text-4xl">Furkan</h1>
          </Link>
        </div>
        {/* Nav */}
        <nav>
          <ul className="flex flex-col gap-8 items-center">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`text-primary/70 text-xl relative hover:text-primary/100 ${
                      link.href === pathname && "text-primary/100"
                    }`}
                  >
                    {link.href === normalizedPathname && (
                      <motion.div
                        layoutId="active-sheet-pill"
                        className="absolute inset-y-7 w-full h-1 bg-primary"
                        style={{ borderRadius: 9999 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      />
                    )}
                    <span className="relative z-10 mix-blend-exclusion">
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
