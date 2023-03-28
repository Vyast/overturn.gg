import "@/styles/globals.css";

import { AnalyticsWrapper } from "@/components/analytics";
import { type Children } from "@/types";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: Children) {
  return (
    <html
      lang="en"
      className={clsx(
        "scroll-smooth bg-primary font-sans text-gray-50 antialiased",
        inter.variable
      )}
    >
      <head />
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex flex-grow flex-col">{children}</main>
          <Footer />
        </div>

        <AnalyticsWrapper />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  generator: "Next.js",
  description: "Overturn is a Destiny 2 clan",
  applicationName: "overturn.gg",
  keywords: [
    "destiny",
    "d2",
    "destiny2",
    "destiny 2",
    "clan",
    "team",
    "gaming",
    "org",
    "organization",
  ],
  authors: [{ name: "Vyast", url: "https://github.com/Vyast" }],
  // themeColor: "#0a0d12",
  // colorScheme: "only light",
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "favicon.ico",
  //   apple: {
  //     url: "/apple-touch-icon.png",
  //     sizes: "180x180",
  //     type: "image/png",
  //   },
  // },
  // openGraph: {
  //   title: "Venom Anti-Cheat - Premium FiveM Server Protection",
  //   description: seo.description,
  //   url: "https://venom.ac",
  //   siteName: seo.app_name,
  //   images: [
  //     {
  //       url: "https://nextjs.org/og.png",
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  //   locale: "en-US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: 'Venom Anti-Cheat - Premium FiveM Server Protection"',
  //   description: seo.description,
  //   creator: "@vyasts",
  //   images: ["https://nextjs.org/og.png"],
  // },
};
