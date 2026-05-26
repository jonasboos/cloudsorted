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
    default: "CloudSorted | Google Drive und OneDrive automatisch aufräumen",
    template: "%s | CloudSorted"
  },
  description: "CloudSorted hilft dir, Google Drive und OneDrive automatisch aufzuräumen, Dateien zu sortieren und Cloud-Ordner einfach zu organisieren.",
  keywords: [
    "Google Drive aufräumen",
    "OneDrive organisieren",
    "Cloud Dateien sortieren",
    "Dateien automatisch organisieren",
    "Cloud Speicher aufräumen",
    "Dateien sortieren",
    "Cloud Ordnung",
  ],
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
    title: "CloudSorted | Google Drive und OneDrive automatisch aufräumen",
    description: "Sortiere Cloud-Dateien, organisiere Ordner und räume Google Drive oder OneDrive automatisch auf.",
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
    title: "CloudSorted | Cloud Dateien automatisch sortieren",
    description: "Google Drive aufräumen, OneDrive organisieren und Dateien automatisch sortieren.",
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
    "description": "Web-App zum automatischen Aufräumen, Sortieren und Organisieren von Cloud-Dateien in Google Drive und OneDrive.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
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
