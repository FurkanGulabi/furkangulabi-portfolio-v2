"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { InteractiveHoverButton } from "./magicui/hover-button";

// Define the image map with static imports
import GetItDoneDark from "@/public/projects/getitdone/dark.webp";
import GetItDoneLight from "@/public/projects/getitdone/light.webp";
import PGeneratorDarkEn from "@/public/projects/PGenerator/dark-en.webp";
import PGeneratorDarkTr from "@/public/projects/PGenerator/dark-tr.webp";
import PGeneratorLightEn from "@/public/projects/PGenerator/light-en.webp";
import PGeneratorLightTr from "@/public/projects/PGenerator/light-tr.webp";
import RPlace from "@/public/projects/rplace/image.webp";

const imageMap: Record<string, StaticImageData> = {
  "/projects/getitdone/dark.webp": GetItDoneDark,
  "/projects/getitdone/light.webp": GetItDoneLight,
  "/projects/PGenerator/dark-en.webp": PGeneratorDarkEn,
  "/projects/PGenerator/dark-tr.webp": PGeneratorDarkTr,
  "/projects/PGenerator/light-en.webp": PGeneratorLightEn,
  "/projects/PGenerator/light-tr.webp": PGeneratorLightTr,
  "/projects/rplace/image.webp": RPlace,
};

interface ProjectCardProps {
  image: {
    "dark-en": string;
    "dark-tr": string;
    "light-en": string;
    "light-tr": string;
  };
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const locale = useLocale();
  const t = useTranslations("ProjectsPage");

  const defaultKey = `dark-${locale}` as "dark-en" | "dark-tr";
  const [imageSrc, setImageSrc] = useState<StaticImageData>(
    imageMap[image[defaultKey]]
  );

  useEffect(() => {
    const key = `${isDark ? "dark" : "light"}-${locale}` as
      | "dark-en"
      | "dark-tr"
      | "light-en"
      | "light-tr";
    setImageSrc(imageMap[image[key]]);
  }, [isDark, locale, image]);

  return (
    <Card
      className="overflow-hidden h-full p-0 flex flex-col w-full max-w-md transition-all duration-300 hover:shadow-xl border-primary/20 bg-white/5 hover:scale-[1.02] group"
      role="article"
      aria-labelledby={`project-title-${title
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={imageSrc}
          placeholder="blur"
          alt={t("projectImageAlt", { title })}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
          loading="eager"
          aria-hidden="false"
          role="img"
          onError={() => setImageSrc(imageMap[image[defaultKey]])}
        />
      </div>
      <CardContent className="flex-grow pt-6">
        <h3
          id={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-xl font-bold mb-2 dark:text-white"
        >
          {t(title)}
        </h3>
        <p className="text-muted-foreground dark:text-gray-300 line-clamp-3">
          {t(description)}
        </p>
        <div
          className="flex flex-wrap gap-2 mt-4"
          aria-label={t("technologiesLabel")}
        >
          {tags &&
            tags.length > 0 &&
            tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium rounded-full transition-colors duration-200 bg-white/10 hover:bg-white/15 backdrop-blur-md"
                role="listitem"
              >
                {tag}
              </span>
            ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-2 pt-0 pb-6">
        <Link
          href={liveUrl}
          target="_blank"
          className="flex-1"
          aria-label={t("liveButtonAriaLabel", { title })}
          rel="noopener noreferrer"
        >
          <InteractiveHoverButton>{t("LiveButton")}</InteractiveHoverButton>
        </Link>
        <Link
          href={githubUrl}
          target="_blank"
          aria-label={t("githubButtonAriaLabel", { title })}
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="aspect-square p-0 w-10 h-10 flex items-center justify-center border backdrop-blur-md border-white/40 hover:bg-white/20 transition-colors cursor-pointer bg-transparent"
          >
            <FaGithub size={20} aria-hidden="true" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
