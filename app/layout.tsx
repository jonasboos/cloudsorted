import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cloudsorted.vercel.app"),
  title: {
    default: "CloudSorted | Der KI-Agent für dein Google Drive & OneDrive",
    template: "%s | CloudSorted"
  },
  description: "Bändige das Cloud-Chaos. CloudSorted ist der intelligente KI-Assistent für Freelancer, der Google Drive und OneDrive automatisch sortiert, benennt und strukturiert.",
  keywords: ["Cloud Management", "KI Agent", "Google Drive aufräumen", "OneDrive organisieren", "SaaS Freelancer", "Dateimanagement Automation", "Cloud Struktur", "KI Assistent"],
  authors: [{ name: "CloudSorted Team" }],
  creator: "CloudSorted",
  publisher: "CloudSorted",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CloudSorted | KI-gestützte Cloud-Organisation",
    description: "Bringe Ordnung in deinen Cloud-Speicher mit künstlicher Intelligenz. Automatisch, sicher und intelligent.",
    url: "https://cloudsorted.vercel.app",
    siteName: "CloudSorted",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/assets/cloud_header.png",
        width: 1200,
        height: 630,
        alt: "CloudSorted KI-Cloud-Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudSorted | KI-Cloud-Agent",
    description: "Automatische Struktur für Google Drive & OneDrive. Spare Stunden beim Sortieren.",
    images: ["/assets/cloud_header.png"],
    creator: "@cloudsorted",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CloudSorted",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "description": "Intelligenter KI-Assistent für Cloud-Speicher wie Google Drive und OneDrive.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster position="top-center" richColors theme="dark" />
      </body>
    </html>
  );
}
