import { NotFound as NotFoundComponent } from "@/components/common/NotFound";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
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
