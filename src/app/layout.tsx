import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HENDERLAND CORPS | Building Ideas. Creating Possibilities.",
  description:
    "A modern multidisciplinary company focused on developing innovative products, digital experiences, creative solutions and independent ventures.",
  keywords: [
    "Henderland Corps",
    "Henderland Creations",
    "Venture Studio",
    "Product Innovation",
    "Software Development",
    "Digital Products",
    "Creative Solutions",
    "henderlandcorps.in"
  ],
  authors: [{ name: "HENDERLAND CORPS" }],
  creator: "HENDERLAND CORPS",
  publisher: "HENDERLAND CORPS",
  metadataBase: new URL("https://henderlandcorps.in"),
  alternates: {
    canonical: "https://henderlandcorps.in",
  },
  openGraph: {
    title: "HENDERLAND CORPS | Building Ideas. Creating Possibilities.",
    description:
      "A modern multidisciplinary company focused on developing innovative products, digital experiences, creative solutions and independent ventures.",
    url: "https://henderlandcorps.in",
    siteName: "HENDERLAND CORPS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HENDERLAND CORPS",
    description: "Building Ideas. Creating Possibilities.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#07080a] text-slate-100 flex flex-col font-sans selection:bg-slate-200/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
