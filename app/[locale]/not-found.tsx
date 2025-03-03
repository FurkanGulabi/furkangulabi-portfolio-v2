import { NotFound as NotFoundComponent } from "@/components/common/NotFound";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale: locale,
    namespace: "NotFound",
  });

  return {
    title: t("PageTitle"),
  };
}

const NotFound = async () => {
  return <NotFoundComponent />;
};

export default NotFound;
