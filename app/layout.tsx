import "@/app/globals.css";
import { BackgroundGradientAnimation } from "@/components/aceternity/background-gradient-animation";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${PoppinsFont.variable} antialiased min-h-screen`}>
        <Providers
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundGradientAnimation />

          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
