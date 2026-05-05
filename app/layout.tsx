import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "CloudSorted | Der KI-Agent für dein Google Drive & OneDrive",
  description: "Bändige das Cloud-Chaos. CloudSorted ist der intelligente KI-Assistent für Freelancer, der Google Drive und OneDrive automatisch sortiert, benennt und strukturiert.",
  keywords: ["Cloud Management", "KI Agent", "Google Drive aufräumen", "OneDrive organisieren", "SaaS Freelancer", "Dateimanagement Automation"],
  authors: [{ name: "CloudSorted Team" }],
  openGraph: {
    title: "CloudSorted | KI-gestützte Cloud-Organisation",
    description: "Bringe Ordnung in deinen Cloud-Speicher mit künstlicher Intelligenz.",
    url: "https://cloudsorted.vercel.app",
    siteName: "CloudSorted",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudSorted | KI-Cloud-Agent",
    description: "Automatische Struktur für Google Drive & OneDrive.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster position="top-center" richColors theme="dark" />
      </body>
    </html>
  );
}
