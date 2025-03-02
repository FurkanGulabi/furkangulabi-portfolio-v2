import { Link } from "@/i18n/navigation";

import { useTranslations } from "next-intl";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  const t = useTranslations("Footer");
  const socials = [
    {
      icon: <FaGithub />,
      path: "https://github.com/FurkanGulabi",
      ariaLabel: "My Github page",
    },
    {
      icon: <FaLinkedinIn />,
      path: "https://tr.linkedin.com/in/furkan-g%C3%BClabi-80309b28a",
      ariaLabel: "My LinkedIn page",
    },
    {
      icon: <FaInstagram />,
      path: "https://www.instagram.com/furkan_gulabi",
      ariaLabel: "My Instagram page",
    },
  ];

  return (
    <footer className="flex items-center justify-between w-full p-4 border-t border-muted mt-32">
      <div className="flex-col md:flex-row w-full max-w-5xl mx-auto flex gap-4 items-center xl:items-start justify-between pt-6 pb-10">
        <div className="flex w-auto flex-col items-start">
          <Link href="/" className="flex items-center">
            <h1 className="scroll-m-20 text-xl flex items-center gap-2 font-semibold tracking-tight md:text-2xl group">
              <div className="w-8 h-8 bg-primary rounded-full blur-[px] shadow-primary shadow-[0_0_8px] group-hover:shadow-[0_0_14px] transition-shadow duration-300"></div>
              Furkan
            </h1>
          </Link>

          <p className="text text-muted-foreground">{t("Description")}</p>
          <p className="text-xs text-muted-foreground/90 mt-2 flex gap-2">
            <SlLocationPin size={15} /> {t("Location")}
          </p>
          <p className="text-xs text-muted-foreground/90 mt-2">
            &copy; {new Date().getFullYear()} Furkan - {t("Copyrights")}
          </p>
        </div>

        {/* Sosyal Medya Bağlantıları */}
        <div className="flex flex-col justify-start items-start w-auto gap-2 mt-3 xl:mt-0">
          <h2 className="text-sm font-semibold">{t("FollowMe")}</h2>
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label={social.ariaLabel}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
