import Link from "next/link";
import React, { Suspense } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto flex flex-row items-center justify-between py-6 xl:py-12">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex items-center justify-center gap-4 group"
        >
          <span className="w-12 h-12 bg-primary rounded-full blur-[px] shadow-primary shadow-custom group-hover:shadow-[0_0_20px] transition-shadow duration-300"></span>
          <h2 className="text-4xl font-bold ">Furkan</h2>
        </Link>
        {/* Navigation */}
        <nav className="hidden xl:flex">
          <Suspense>
            <DesktopNav />
          </Suspense>
        </nav>
        <nav className="xl:hidden ">
          <Suspense>
            <MobileNav />
          </Suspense>
        </nav>
      </div>
    </header>
  );
};

export default Header;
