import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Test-Impressum fuer CloudSorted, eine Demo-App zum Google Drive aufraeumen, OneDrive organisieren und Dateien automatisch organisieren.",
  keywords: [
    "CloudSorted Impressum",
    "CloudSorted Legal",
    "Cloud Dateien sortieren Legal",
    "Dateien automatisch organisieren",
  ],
  alternates: {
    canonical: "/legal",
  },
};

const rows = [
  ["Anbieter", "CloudSorted Demo GmbH"],
  ["Adresse", "Musterstrasse 12, 8000 Zuerich, Schweiz"],
  ["Vertreten durch", "Max Muster, Demo Geschaeftsfuehrer"],
  ["E-Mail", "legal-test@cloudsorted.example"],
  ["Telefon", "+41 00 000 00 00"],
  ["Handelsregister", "CHE-000.000.000 TEST"],
  ["Mehrwertsteuer", "CHE-000.000.000 MWST TEST"],
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <header className="border-b-4 border-black px-4 py-5 sm:px-6">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-black uppercase tracking-tighter sm:text-3xl">
            CloudSorted
          </Link>
          <Link href="/privacy" className="border-2 border-black px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white">
            Privacy
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="mb-4 text-xs font-black uppercase tracking-widest text-gray-500">Impressum / Testdaten</p>
        <h1 className="mb-6 text-[clamp(2.75rem,13vw,5.5rem)] font-black uppercase leading-[0.86] tracking-tighter">
          Legal.
        </h1>
        <p className="max-w-3xl text-base font-bold uppercase leading-relaxed text-gray-500 sm:text-xl">
          Dieses Impressum nutzt ausschliesslich Testdaten. CloudSorted ist hier als Demo-App beschrieben, die Cloud Dateien sortieren, Google Drive aufraeumen und OneDrive organisieren kann.
        </p>
      </section>

      <section className="border-y-4 border-black px-4 py-10 sm:px-6 sm:py-14">
        <dl className="mx-auto max-w-5xl border-4 border-black">
          {rows.map(([label, value]) => (
            <div key={label} className="grid gap-2 border-b-4 border-black p-5 last:border-b-0 sm:grid-cols-3 sm:p-6">
              <dt className="text-xs font-black uppercase tracking-widest text-gray-500">{label}</dt>
              <dd className="break-words text-sm font-black uppercase sm:col-span-2">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <h2 className="mb-4 text-2xl font-black uppercase tracking-tight">Haftungshinweis</h2>
        <p className="max-w-3xl text-sm font-bold uppercase leading-relaxed text-gray-500">
          Alle Inhalte sind Platzhalter fuer einen MVP-Prototyp. Es werden keine echten Cloud-Verbindungen hergestellt, keine echten Dateien verarbeitet und keine produktiven Rechtsinformationen bereitgestellt.
        </p>
      </section>

      <footer className="border-t-4 border-black px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-4 text-xs font-black uppercase tracking-widest">
          <Link href="/" className="hover:bg-black hover:text-white">Home</Link>
          <Link href="/privacy" className="hover:bg-black hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:bg-black hover:text-white">Terms</Link>
        </div>
      </footer>
    </main>
  );
}
