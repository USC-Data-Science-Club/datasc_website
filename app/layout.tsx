import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono, Silkscreen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

// Style guide: Minecraft (logo), Alte Haas Grotesk (headings), IBM Plex Mono (body).
// Silkscreen and Hanken Grotesk are the closest free web fonts to the first two.
const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400", variable: "--font-silkscreen" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-hanken" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

const description =
  "DataSC is the Data Science Club of the University of Southern California: a ten-week curriculum, semester-long project teams, and a community of students who like working with data.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.datasc.org"),
  title: "DataSC — Data Science Club of USC",
  description,
  keywords: ["data science", "USC", "student club", "machine learning", "analytics", "USC data science"],
  alternates: { canonical: "/" },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://www.datasc.org/",
    title: "DataSC — Data Science Club of USC",
    description,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataSC — Data Science Club of USC",
    description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${silkscreen.variable} ${hanken.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
