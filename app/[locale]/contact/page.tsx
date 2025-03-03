import ContactForm from "@/components/forms/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: t("PageTitle"),
  };
}

const ContactPage = () => {
  const t = useTranslations("ContactPage");
  return (
    <section
      className="flex justify-center flex-col gap-3 items-center"
      aria-labelledby="contact-title"
    >
      <Card className="flex flex-col gap-3 !px-0 !py-8 sm:dark:bg-black/10 bg-transparent backdrop-blur-lg font-semibold items-center justify-center max-w-4xl  xl:p-2">
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          <CardTitle id="contact-title">{t("title")}</CardTitle>
          <CardDescription
            className="break-words max-w-96 md:max-w-full text-center"
            aria-label={t("description")}
          >
            {t("description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactPage;
