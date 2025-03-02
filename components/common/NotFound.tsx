"use client";
import { Countdown } from "@/components/animations/Countdown";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "use-intl";

export const NotFound = () => {
  const t = useTranslations("NotFound");

  const [imageError, setImageError] = useState(false);

  return (
    <main className="min-h-[500px] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto flex items-center justify-center flex-col gap-8 max-w-lg"
      >
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="https://c.tenor.com/NtG9wqurUVsAAAAd/tenor.gif"
            className="rounded-lg shadow-md"
            alt="404 error - page not found illustration"
            width={400}
            height={400}
            priority
            onError={() => setImageError(true)}
          />

          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg">
              <p className="text-muted-foreground">{t("ImageError")}</p>
            </div>
          )}
        </div>

        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold text-primary">
            404 - {t("PageTitle")}
          </h1>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <p className="text-muted-foreground flex items-center gap-2">
            {t("Redirecting")}
          </p>
          <Countdown initial={5} />
        </div>
      </motion.div>
    </main>
  );
};
