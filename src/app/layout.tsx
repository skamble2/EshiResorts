import type { Metadata } from "next";
import { Inter, Playfair_Display, Kalam } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten script used for the brand tagline (matches the logo's lettering).
const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Bhimashankar resort",
    "jungle resort Pune",
    "luxury resort Bhimashankar",
    "Eshi Resorts",
    "resort near Pune",
  ],
  openGraph: {
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/images/gallery/exterior-1.jpg", width: 1200, height: 800 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${kalam.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sand-50 text-ink">{children}</body>
    </html>
  );
}
