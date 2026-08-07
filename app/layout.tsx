import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/components/ThemeProvider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="DataSC is USC's home for hands-on data science learning, built to be welcoming, practical, and career-relevant. Join our community of students passionate about data science." />
        <meta name="keywords" content="data science, USC, student club, machine learning, analytics, programming, USC data science" />
        <meta name="author" content="DataSC at USC" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.datasc.org/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.datasc.org/" />
        <meta property="og:title" content="DataSC - USC's Data Science Club" />
        <meta property="og:description" content="USC's home for hands-on data science learning, built to be welcoming, practical, and career-relevant." />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.datasc.org/" />
        <meta property="twitter:title" content="DataSC - USC's Data Science Club" />
        <meta property="twitter:description" content="USC's home for hands-on data science learning, built to be welcoming, practical, and career-relevant." />
        <meta property="twitter:image" content="/logo.png" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme (dark/light) - applied before paint to avoid a flash */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />

        {/* Title */}
        <title>DataSC - USC's Data Science Club</title>
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}