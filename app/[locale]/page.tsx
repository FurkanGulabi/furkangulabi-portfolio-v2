import Charts from "@/components/common/Charts";
import Photo from "@/components/common/Photo";
import Socials from "@/components/common/Socials";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale,
    namespace: "HomePage",
  });

  return {
    title: t("PageTitle"),
  };
}

// The params are automatically handled by next-intl
export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <section className="container mx-auto ">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none text-foreground/70 flex flex-col gap-2 ">
          <h2 className="h2 xl:mt-0 mt-7">{t("greeting")}</h2>
          <h1 className="h1">{t("name")}</h1>
          <h2 className="h2 xl:text-4xl md:text-2xl text-[20px]">
            {t("professionPrefix")}{" "}
            {/*  <span className="text-primary  ">{t("profession")}</span>  */}
            <Suspense>
              <TypingAnimation className="text-primary">
                {t("profession")}
              </TypingAnimation>
            </Suspense>
          </h2>
          <p className="break-words leading-6 max-w-[500px] font-semibold mt-5 text-[15px] text-foreground/70 italic">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span className="text-primary">&quot;</span>
            {t("description")}
            <span className="text-primary">&quot;</span>
          </p>
          <Socials />
        </div>
        <Suspense>
          <Photo />
        </Suspense>
      </div>
      <Suspense>
        <Charts />
      </Suspense>
    </section>
  );
}
