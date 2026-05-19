"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  DatabaseZap,
  FolderTree,
  LockKeyhole,
  Sparkles,
  ChevronRight,
  Layers,
  Zap
} from "lucide-react";

import { InteractiveCloudDemo } from "@/components/landing/interactive-cloud-demo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const workflow = [
  {
    title: "1. Cloud verbinden",
    text: "Google Drive oder OneDrive mit einem Klick anbinden. Volle Sicherheit, keine echten Änderungen im Demo-Modus.",
    icon: null,
  },
  {
    title: "2. KI-Analyse",
    text: "Unser Agent scannt Metadaten, Dateitypen und Namen, um Projektkontexte und Kundenbeziehungen zu verstehen.",
    icon: BrainCircuit,
  },
  {
    title: "3. Magische Ordnung",
    text: "Erhalte einen perfekten Strukturvorschlag. Intelligente Ordner, einheitliche Namen und aufgeräumte Projekte.",
    icon: Sparkles,
  },
];

import { BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary/30">
      {/* Dynamic Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] opacity-40 mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>

      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative size-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg transition-all duration-300 group-hover:shadow-primary/20 group-hover:border-primary/40 p-1">
              <Image src="/assets/logo_mark.png" alt="CloudSorted Logo - KI-Cloud-Agent" width={40} height={40} className="object-contain transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              CloudSorted
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">So geht's</a>
            <a href="#story" className="hover:text-white transition-colors">Story</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors hidden sm:block">
              Anmelden
            </Link>
            <Button asChild className="rounded-full shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:scale-105">
              <Link href="/login">
                Beta testen <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn}>
                <Badge variant="outline" className="px-3 py-1.5 mb-6 border-primary/30 bg-primary/10 text-primary backdrop-blur-md">
                  <Sparkles className="size-3.5 mr-2" /> KI-Agent für Freelancer
                </Badge>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Deine Cloud.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Automatisch sortiert.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                CloudSorted räumt dein Google Drive auf, strukturiert Kundenprojekte und benennt Dateien intelligent um. Alles vollautomatisch.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base shadow-xl shadow-primary/20 transition-all hover:shadow-primary/40 hover:scale-105">
                  <Link href="/login">
                    Kostenlos starten <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md">
                  <a href="#demo">Demo ansehen</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> Drive & OneDrive
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> 100% Sicher
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2.5rem] blur-3xl opacity-50"></div>
              <div className="relative w-full max-w-lg aspect-square rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image 
                  src="/assets/cloud_header.png" 
                  alt="CloudSorted Abstraktes Cloud-Interface" 
                  fill
                  className="object-cover opacity-80 mix-blend-screen p-8 animate-float"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-green-500/20 text-green-400">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Projekt erkannt</p>
                    <p className="text-xs text-muted-foreground">Design Relaunch</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-1/3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-primary/20 text-primary">
                    <FolderTree className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Struktur erstellt</p>
                    <p className="text-xs text-muted-foreground">+12 Dateien sortiert</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Erlebe die Magie live.</h2>
            <p className="text-lg text-muted-foreground">Probiere unseren interaktiven Prototypen aus und sieh selbst, wie der Agent das Chaos bändigt.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <InteractiveCloudDemo />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 px-6 bg-black/40 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 border-accent/30 bg-accent/10 text-accent">Workflow</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl leading-[1.1]">
              Ein Agent, der Ordnung entwirft, bevor etwas passiert.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {workflow.map((item, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 group-hover:scale-110 transition-transform duration-300 overflow-hidden p-3">
                    {(() => {
                      const Icon = item.icon as any;
                      return Icon ? (
                        <Icon className="size-7 text-primary" />
                      ) : (
                        <Image src="/assets/logo_mark.png" alt="CloudSorted Logo" width={32} height={32} className="object-cover" />
                      );
                    })()}
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-primary/20 rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image 
                src="/assets/cloud_folder.png" 
                alt="Cloud Folder Icon - Intelligente Datei-Organisation" 
                width={500} 
                height={500}
                className="w-full max-w-md mx-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-float"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Dein intelligenter Assistent.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Passe den Agenten an deine Bedürfnisse an. Bestimme wie streng Regeln angewendet werden, oder lass dir jeden Schritt vor der Ausführung bestätigen.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Automatische Ordnerstruktur nach Kunden",
                  "Intelligente Umbenennung von kryptischen Dateien",
                  "Erkennung von Rechnungen und sensiblen Daten",
                  "Vollständige Vorschau vor jeder Änderung"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="grid size-6 place-items-center rounded-full bg-primary/20 text-primary shrink-0">
                      <CheckCircle2 className="size-3.5" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button asChild className="mt-10 rounded-full group">
                <Link href="/dashboard">
                  Dashboard Preview ansehen
                  <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg px-6 py-12 text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg overflow-hidden border border-white/10">
              <Image src="/assets/logo_mark.png" alt="CloudSorted Logo Mark" width={32} height={32} className="object-cover" />
            </div>
            <span className="text-lg font-bold text-white">CloudSorted</span>
          </div>
          <p className="max-w-2xl leading-relaxed text-center lg:text-left">
            Dieses Projekt ist ein konzeptioneller Prototyp. Es werden keine tatsächlichen Cloud-Verbindungen hergestellt oder Dateien verändert. Alle Daten bleiben lokal in deinem Browser.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <LockKeyhole className="size-4 text-primary" />
            <span>Sicherer Demo-Modus</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
