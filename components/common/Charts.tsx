/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface Stat {
  value: number;
  text: string;
  duration: number;
}

interface CountsStat extends Stat {
  current: number | string;
  animated: boolean;
}

const stats: Stat[] = [
  { value: 3, text: "yearsOfExperience", duration: 1 },
  { value: 7, text: "projectsCompleted", duration: 2 },
  { value: 4, text: "englishLevel", duration: 3 },
];

const englishLevels: { [key: number]: string } = {
  1: "A1",
  2: "A2",
  3: "B1",
  4: "B2",
};

const countUp = (from: number, to: number, duration: number = 1) => {
  return (progress: number) =>
    Math.min(Math.round(from + (to - from) * progress), to);
};

export default function Stats() {
  const t = useTranslations("HomePage.Charts");
  const [counts, setCounts] = useState<CountsStat[]>(
    stats.map((stat) => ({ ...stat, current: 0, animated: false }))
  );

  useEffect(() => {
    stats.forEach((stat, index) => {
      const duration = stat.duration;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const elapsed = Math.min((now - startTime) / (endTime - startTime), 1);
        const progress = easeInOut(elapsed);

        setCounts((currentCounts) =>
          currentCounts.map((c, i) =>
            i === index
              ? {
                  ...c,
                  current:
                    index === 2
                      ? englishLevels[
                          countUp(
                            1,
                            4,
                            duration
                          )(progress) as keyof typeof englishLevels
                        ]
                      : countUp(0, stat.value, duration)(progress),
                  animated: progress === 1,
                }
              : c
          )
        );

        if (elapsed < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    });
  }, []);

  const easeInOut = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  return (
    <div className="flex w-full flex-row items-center justify-between mt-2 md:space-y-0">
      {counts.map((stat, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center md:text-left xl:flex-row xl:items-center space-x-0 xl:space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`h1 font-bold text-7xl  ${
              stat.current.toString().length > 1 ? "w-20" : "w-9"
            } ${stat.animated ? "text-primary/100" : "text-primary/70"}`}
          >
            {stat.current}
          </h1>
          <div className="text-muted-foreground text-center xl:text-start mt-2 xl:mt-0 ml-0 xl:ml-3 break-words max-w-xs">
            {t(stat.text)}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
