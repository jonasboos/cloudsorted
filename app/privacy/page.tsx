import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Test-Datenschutzerklaerung fuer CloudSorted: Google Drive aufraeumen, OneDrive organisieren und Cloud Dateien automatisch sortieren.",
  keywords: [
    "CloudSorted Datenschutz",
    "Google Drive aufraeumen Datenschutz",
    "OneDrive organisieren Datenschutz",
    "Cloud Dateien sortieren Datenschutz",
  ],
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "1. Verantwortliche Stelle",
    text: "CloudSorted Demo GmbH, Musterstrasse 12, 8000 Zuerich, Schweiz. E-Mail: privacy-test@cloudsorted.example. Diese Angaben sind Testdaten fuer den MVP-Prototyp.",
  },
  {
    title: "2. Welche Daten wir testen",
    text: "In dieser Demo verwenden wir Beispiel-E-Mail-Adressen, fiktive Dateinamen, Demo-Regeln und lokale UI-Zustaende. Es werden keine echten Google Drive oder OneDrive Dateien verarbeitet.",
  },
  {
    title: "3. Zweck der Verarbeitung",
    text: "CloudSorted zeigt, wie man Google Drive aufraeumen, OneDrive organisieren, Cloud Dateien sortieren und Dateien automatisch organisieren koennte. Der Prototyp ist nicht mit echten Cloud-Konten verbunden.",
  },
  {
    title: "4. Cloud-Zugriff",
    text: "Die Login- und Verbindungsschritte sind Platzhalter. In dieser Testversion werden keine OAuth-Tokens gespeichert und keine echten Cloud-Speicher gelesen, verschoben oder geloescht.",
  },
  {
    title: "5. Speicherdauer",
    text: "Demo-Daten bleiben nur im Browser-Zustand der Sitzung sichtbar. Fuer echte Produktivdaten muessten separate Speicherfristen, Loeschkonzepte und Auftragsverarbeitungsvertraege definiert werden.",
  },
  {
    title: "6. Kontakt",
    text: "Fragen zur Demo-Datenschutzseite koennen an privacy-test@cloudsorted.example gesendet werden. Diese Adresse ist eine Testadresse und nicht fuer reale Datenschutzanfragen gedacht.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <header className="border-b-4 border-black px-4 py-5 sm:px-6">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-black uppercase tracking-tighter sm:text-3xl">
            CloudSorted
          </Link>
          <Link href="/legal" className="border-2 border-black px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white">
            Legal
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="mb-4 text-xs font-black uppercase tracking-widest text-gray-500">Testdaten / MVP-Prototyp</p>
        <h1 className="mb-6 text-[clamp(2.75rem,13vw,5.5rem)] font-black uppercase leading-[0.86] tracking-tighter">
          Privacy.
        </h1>
        <p className="max-w-3xl text-base font-bold uppercase leading-relaxed text-gray-500 sm:text-xl">
          Diese Datenschutzerklaerung ist ein Testtext fuer CloudSorted. Sie beschreibt beispielhaft, wie Datenschutz fuer eine App zum Google Drive aufraeumen, OneDrive organisieren und Cloud Dateien sortieren aussehen kann.
        </p>
      </section>

      <section className="border-y-4 border-black px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-5xl gap-6">
          {sections.map((section) => (
            <article key={section.title} className="border-4 border-black p-5 sm:p-8">
              <h2 className="mb-4 text-xl font-black uppercase tracking-tight sm:text-2xl">{section.title}</h2>
              <p className="text-sm font-bold uppercase leading-relaxed text-gray-500">{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-4 text-xs font-black uppercase tracking-widest">
          <Link href="/" className="hover:bg-black hover:text-white">Home</Link>
          <Link href="/legal" className="hover:bg-black hover:text-white">Legal</Link>
          <Link href="/terms" className="hover:bg-black hover:text-white">Terms</Link>
        </div>
      </footer>
    </main>
  );
}
