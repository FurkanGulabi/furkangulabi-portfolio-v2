import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import ResumeContent from "./ResumeContent";

export async function generateMetadata() {
  const locale = await getLocale();
  setRequestLocale(locale);
  const t = await getTranslations({
    locale: locale,
    namespace: "ResumePage",
  });

  return {
    title: t("PageTitle"),
  };
}

export default async function ResumePage() {
  // Get the locale using getLocale instead of from params
  const locale = await getLocale();
  setRequestLocale(locale);

  return (
    <main aria-label="Resume Page">
      <ResumeContent />
    </main>
  );
}
