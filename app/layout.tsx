import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OG_IMAGE } from "@/lib/seo";
import { SITE_NAME, SITE_SUB, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});
const serif = Noto_Serif_KR({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "600", "700"],
  display: "swap",
});

const description = `${SITE_TAGLINE}. ${SITE_SUB}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} · 쉬운 로마 역사`, template: `%s · ${SITE_NAME}` },
  description,
  applicationName: SITE_NAME,
  keywords: [
    "로마 역사",
    "로마이야기",
    "로마 황제",
    "포에니 전쟁",
    "클레오파트라",
    "로마 군단",
    "그리스 로마 신화",
    "나두",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} · 쉬운 로마 역사`,
    description,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description, images: [OG_IMAGE.url] },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${sans.variable} ${serif.variable} min-h-screen bg-bg font-sans text-ink antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
