"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Shield,
  Zap,
  Calendar,
  Layers,
  FolderTree,
  FileCheck
} from "lucide-react";
import { InteractiveCloudDemo } from "@/components/landing/interactive-cloud-demo";

const workflow = [
  {
    title: "1. Verbinden.",
    text: "Verbinde Google Drive oder OneDrive sicher mit einem Klick. Keine Passwörter, volle OAuth-Verschlüsselung.",
  },
  {
    title: "2. Analysieren.",
    text: "Der KI-Agent analysiert Dateinamen, Dubletten und ungenutzte Dateileichen in Sekundenschnelle.",
  },
  {
    title: "3. Strukturieren.",
    text: "Ordner werden automatisch sortiert, Dubletten bereinigt und deine Cloud bleibt dauerhaft aufgeräumt.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Echtzeit-Scans",
    text: "Erkennt neue Datei-Uploads sofort und wendet Sortierungsregeln im Hintergrund an.",
  },
  {
    icon: FolderTree,
    title: "Smarter Regel-Editor",
    text: "Erstelle flexible Regeln nach Dateityp, Erstelldatum oder Schlagwörtern im Namen.",
  },
  {
    icon: Shield,
    title: "Sicherheit Zuerst",
    text: "Wir lesen nur Metadaten. Deine echten Dateien verlassen niemals deinen Cloud-Speicher.",
  },
  {
    icon: Calendar,
    title: "Cron-Intervalle",
    text: "Lasse Aufräumläufe vollautomatisch täglich, wöchentlich oder monatlich ausführen.",
  },
  {
    icon: Layers,
    title: "Multi-Cloud",
    text: "Verwalte Google Drive und Microsoft OneDrive über eine einzige, konsistente Oberfläche.",
  },
  {
    icon: FileCheck,
    title: "Dubletten-Inhaltsabgleich",
    text: "Findet identische Dateien auch dann, wenn sie unterschiedliche Namen tragen.",
  },
];

const faqs = [
  {
    q: "Werden meine Dateien gelöscht?",
    a: "Nur wenn du eine explizite Löschregel definierst (wie z.B. das Löschen von Screenshots älter als 30 Tage). Standardmäßig sortiert CloudSorted deine Dateien nur in Ordner ein.",
  },
  {
    q: "Wie sicher sind meine Zugriffsrechte?",
    a: "Absolut sicher. CloudSorted nutzt die offiziellen Sicherheits-Schnittstellen (OAuth 2.0) von Google und Microsoft. Wir speichern niemals deine Passwörter.",
  },
  {
    q: "Gibt es ein Limit für Dateigrößen?",
    a: "Nein. Da der Agent nur die Metadaten analysiert und die Verschiebung über die Cloud-API anweist, spielt die eigentliche Dateigröße keine Rolle.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-black selection:bg-black selection:text-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white border-b-4 border-black">
        <nav className="mx-auto flex w-full min-w-0 items-center justify-between gap-3 px-4 h-16 sm:px-6 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-black tracking-tighter uppercase transition-transform group-hover:scale-105 sm:text-3xl">
              CloudSorted
            </span>
          </Link>
          <div className="hidden items-center gap-10 text-xs font-black uppercase tracking-widest md:flex">
            <a href="#how-it-works" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">Workflow</a>
            <a href="#features" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">Features</a>
            <a href="#demo" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">Live Demo</a>
            <a href="#pricing" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">Preise</a>
            <a href="#faq" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">FAQ</a>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <Link href="/login" className="text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-colors hidden sm:block">
              Login
            </Link>
            <Link 
              href="/login"
              className="bg-black text-white px-4 py-2.5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black border-2 border-black transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 sm:px-6 sm:py-3 sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Start
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-14 px-4 border-b-4 border-black min-h-[72vh] flex flex-col justify-center bg-white overflow-hidden sm:px-6 sm:pt-32 sm:pb-20 sm:min-h-[80vh]">
        <div className="mx-auto w-full max-w-6xl relative z-10">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="max-w-full text-[clamp(2.75rem,15vw,5rem)] sm:text-[5vw] font-black uppercase leading-[0.9] sm:leading-[0.95] tracking-tighter mb-8 sm:mb-10 hover:scale-[1.01] transition-transform origin-left cursor-default">
              Strukturiere <br />
              deine Cloud.
            </h1>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 border-t-4 border-black pt-6 sm:pt-8">
              <p className="text-base sm:text-xl font-bold uppercase max-w-xl leading-normal text-gray-500">
                Der intelligente KI-Agent für Freelancer & Kreative. <br/>
                Google Drive aufräumen, OneDrive organisieren und Cloud Dateien automatisch sortieren.
              </p>
              
              <Link 
                href="/login"
                className="group flex items-center justify-between w-full md:w-auto bg-black text-white px-5 py-4 text-sm sm:px-8 sm:py-5 sm:text-lg font-black uppercase border-4 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 shrink-0"
              >
                <span>Kostenlos testen</span>
                <ArrowRight className="ml-4 size-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="how-it-works" className="py-14 px-4 border-b-4 border-black bg-white sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-10 sm:mb-16">
            Drei Schritte zu Ordnung
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-5 sm:gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="border-4 border-black p-5 sm:p-8 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-48 sm:min-h-60">
                <div>
                  <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <span className="text-gray-300 font-black text-4xl">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-14 px-4 border-b-4 border-black bg-white sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-10 sm:mb-16">
            Intelligente Features
          </h2>
          <p className="sr-only">
            CloudSorted hilft beim Google Drive aufräumen, OneDrive organisieren, Cloud Speicher aufräumen und Dateien automatisch organisieren.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="border-4 border-black p-5 sm:p-8 bg-white hover:bg-black hover:text-white transition-colors group">
                  <div className="size-12 border-4 border-black bg-black text-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 group-hover:text-gray-300 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-14 px-4 border-b-4 border-black bg-white sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 sm:mb-16 border-b-4 border-black pb-6 sm:pb-8 gap-4">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">
              Live Demo
            </h2>
            <p className="text-sm font-bold uppercase text-gray-500">
              Teste die intelligente Bereinigung direkt in unserer Sandbox.
            </p>
          </div>
          
          <div className="bg-white">
            <InteractiveCloudDemo />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-14 px-4 border-b-4 border-black bg-white sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-10 sm:mb-16">
            Einfache Preise
          </h2>

          <div className="max-w-xl mx-auto border-4 border-black bg-white p-5 sm:p-12 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase tracking-widest inline-block mb-6">
              MVP-Launch Tier
            </span>
            <div className="flex justify-between items-baseline gap-4 mb-6 border-b-4 border-black pb-6">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Free Plan</h3>
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-black">0€</span>
                <span className="text-xs font-bold text-gray-500 uppercase block">Monatlich</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 font-bold uppercase text-xs">
              <li className="flex items-center gap-3">
                <Check className="size-4 shrink-0 text-black stroke-[3]" />
                <span>1 Google Drive Account verknüpfen</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="size-4 shrink-0 text-black stroke-[3]" />
                <span>1 OneDrive Account verknüpfen</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="size-4 shrink-0 text-black stroke-[3]" />
                <span>Bis zu 5 Automatisierungsregeln</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="size-4 shrink-0 text-black stroke-[3]" />
                <span>Inhaltlicher Dubletten-Scan</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="size-4 shrink-0 text-black stroke-[3]" />
                <span>Vollständige Datensicherheit</span>
              </li>
            </ul>

            <Link
              href="/login"
              className="w-full bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black rounded-none h-16 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2"
            >
              Kostenlos registrieren
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-14 px-4 bg-white sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-10 sm:mb-16 text-center">
            Häufige Fragen
          </h2>

          <div className="divide-y-4 divide-black border-y-4 border-black">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 sm:py-8 grid md:grid-cols-3 gap-4">
                <h3 className="font-black uppercase text-lg md:col-span-1">
                  {faq.q}
                </h3>
                <p className="font-bold text-sm text-gray-500 uppercase leading-relaxed md:col-span-2">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black px-4 py-10 bg-black text-white sm:px-6 sm:py-12">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
          <span className="text-3xl font-black uppercase tracking-tighter">
            CloudSorted
          </span>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-black uppercase tracking-widest">
              <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy</Link>
              <Link href="/legal" className="text-gray-300 hover:text-white">Legal</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white">Terms</Link>
            </nav>
            <p className="font-bold uppercase text-[10px] max-w-md text-center md:text-right text-gray-500 tracking-wider">
              MVP PROTOTYPE. NO REAL CLOUD CONNECTIONS ESTABLISHED. ALL DATA REMAINS LOCAL.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
