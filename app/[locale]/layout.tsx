import { Providers } from "@/app/[locale]/providers";
import "@/app/globals.css";
import { BackgroundGradientAnimation } from "@/components/aceternity/background-gradient-animation";
import PageTransition from "@/components/animations/PageTransition";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

type MetadataProps = {
  params: { locale: string };
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
});

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale: locale,
    namespace: "Metadata",
  });

  return {
    title: {
      template: "%s | Furkan Gülabi",
      default: "Furkan Gülabi",
    },
    description: t("description"),
    abstract: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: "https://furkangulabi.com",
      languages: {
        "en-US": "https://furkangulabi.com",
        "tr-TR": "https://furkangulabi.com/tr",
      },
    },
    applicationName: t("applicationName"),
    authors: [{ name: "Furkan Gülabi", url: "https://furkangulabi.com" }],
    creator: "Furkan Gülabi",
    publisher: "Furkan Gülabi",
    category: "Personal Site",
    classification: "Personal Site",
    twitter: {
      card: "summary",
      site: "@furkangulabi",
      creator: "@furkangulabi",
      images: "https://furkangulabi.com/logo.png",
    },
    openGraph: {
      type: "website",
      url: "https://furkangulabi.com",
      title: "Furkan Gülabi",
      description: t("description"),
      siteName: "Furkan Gülabi",
      images: [{ url: "https://furkangulabi.com/logo.png" }],
    },
    generator: "Furkan Gülabi",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "tr")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning suppressContentEditableWarning>
      <head>
        <Script
          async
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head>
      <body className={`${PoppinsFont.variable} antialiased min-h-screen`}>
        <Providers
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundGradientAnimation />
          <NextIntlClientProvider messages={messages}>
            <Header />
            <PageTransition>
              {children}
              <Footer />
            </PageTransition>
            <Toaster richColors />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
