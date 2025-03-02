import { getTranslations, setRequestLocale } from "next-intl/server";
import ResumeContent from "./ResumeContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale: locale,
    namespace: "ResumePage",
  });

  return {
    title: t("PageTitle"),
  };
}

export default async function ResumePage({
  params,
}: {
  params: { locale: string };
}) {
  // Set the locale for the request
  const { locale } = await params;
  setRequestLocale(locale);

  return <ResumeContent />;
}
