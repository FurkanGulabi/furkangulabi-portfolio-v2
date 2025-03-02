import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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

const Socials = () => {
  return (
    <div className="flex flex-row items-center justify-center mb-4 xl:mb-0 xl:justify-start gap-6 mt-4">
      {socials.map((social, index) => {
        return (
          <Button
            asChild
            key={index}
            variant={"outline"}
            size={"icon"}
            className="rounded-full border-2 border-primary hover:bg-primary hover:text-background  "
          >
            <Link
              href={social.path}
              target="_blank"
              className="text-3xl"
              aria-label={social.ariaLabel}
            >
              {social.icon}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default Socials;
