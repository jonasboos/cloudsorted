import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Test-Nutzungsbedingungen fuer CloudSorted: Cloud Speicher aufraeumen, Dateien sortieren und OneDrive oder Google Drive organisieren.",
  keywords: [
    "CloudSorted Nutzungsbedingungen",
    "Cloud Speicher aufraeumen",
    "Dateien sortieren",
    "Google Drive organisieren",
    "OneDrive aufraeumen",
  ],
  alternates: {
    canonical: "/terms",
  },
};

const terms = [
  {
    title: "1. Demo-Nutzung",
    text: "CloudSorted ist in dieser Version ein MVP-Prototyp mit Testdaten. Die App simuliert, wie Nutzer Google Drive organisieren, OneDrive aufraeumen und Dateien automatisch sortieren koennen.",
  },
  {
    title: "2. Keine echte Cloud-Verbindung",
    text: "Alle Login-, Scan- und Bereinigungsfunktionen sind Demo-Aktionen. Es werden keine echten Dateien verschoben, geloescht, gelesen oder dauerhaft gespeichert.",
  },
  {
    title: "3. Erlaubte Testnutzung",
    text: "Du kannst die Oberflaeche testen, Regeln anlegen, Demo-Scans starten und Beispielinhalte loeschen. Diese Aktionen veraendern nur den lokalen Demo-Zustand.",
  },
  {
    title: "4. Keine Gewaehrleistung",
    text: "Die Testversion wird ohne Garantie bereitgestellt. Fuer eine echte Version muessten produktive Sicherheits-, Datenschutz- und Backup-Prozesse umgesetzt werden.",
  },
  {
    title: "5. Kontakt",
    text: "Feedback zur Demo kann an product-test@cloudsorted.example gesendet werden. Diese Adresse ist ein Platzhalter.",
  },
];

export default function TermsPage() {
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
        <p className="mb-4 text-xs font-black uppercase tracking-widest text-gray-500">Nutzungsbedingungen / Testdaten</p>
        <h1 className="mb-6 text-[clamp(2.75rem,13vw,5.5rem)] font-black uppercase leading-[0.86] tracking-tighter">
          Terms.
        </h1>
        <p className="max-w-3xl text-base font-bold uppercase leading-relaxed text-gray-500 sm:text-xl">
          Diese Bedingungen sind Platzhalter fuer die CloudSorted Demo. Sie erklaeren die Testnutzung einer App zum Cloud Speicher aufraeumen und Dateien sortieren.
        </p>
      </section>

      <section className="border-y-4 border-black px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-5xl gap-6">
          {terms.map((item) => (
            <article key={item.title} className="border-4 border-black p-5 sm:p-8">
              <h2 className="mb-4 text-xl font-black uppercase tracking-tight sm:text-2xl">{item.title}</h2>
              <p className="text-sm font-bold uppercase leading-relaxed text-gray-500">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-4 text-xs font-black uppercase tracking-widest">
          <Link href="/" className="hover:bg-black hover:text-white">Home</Link>
          <Link href="/privacy" className="hover:bg-black hover:text-white">Privacy</Link>
          <Link href="/legal" className="hover:bg-black hover:text-white">Legal</Link>
        </div>
      </footer>
    </main>
  );
}
