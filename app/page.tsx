"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";
import { InteractiveCloudDemo } from "@/components/landing/interactive-cloud-demo";

const workflow = [
  {
    title: "CONNECT.",
    text: "Google Drive oder OneDrive mit einem Klick anbinden. Volle Sicherheit, keine echten Änderungen im Demo-Modus.",
  },
  {
    title: "ANALYZE.",
    text: "Unser Agent scannt Metadaten, Dateitypen und Namen, um Projektkontexte und Kundenbeziehungen zu verstehen.",
  },
  {
    title: "CLEAN.",
    text: "Erhalte einen perfekten Strukturvorschlag. Intelligente Ordner, einheitliche Namen und aufgeräumte Projekte.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Brutalist Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white border-b-4 border-black">
        <nav className="mx-auto flex w-full items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-black tracking-tighter uppercase transition-transform group-hover:scale-105">
              CloudSorted
            </span>
          </Link>
          <div className="hidden items-center gap-12 text-sm font-bold uppercase tracking-widest md:flex">
            <a href="#demo" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">Demo</a>
            <a href="#how-it-works" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">Workflow</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white px-3 py-1 transition-colors hidden sm:block">
              Login
            </Link>
            <Link 
              href="/login"
              className="bg-black text-white px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              Start
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-6 border-b-4 border-black min-h-[85vh] flex flex-col justify-center bg-white overflow-hidden">
        <div className="mx-auto w-full max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[10vw] sm:text-[8vw] font-black uppercase leading-[0.9] tracking-tighter mb-12 hover:scale-[1.02] transition-transform origin-left cursor-default">
              Clean Your <br />
              Cloud.
            </h1>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t-4 border-black pt-8">
              <p className="text-xl sm:text-2xl font-bold uppercase max-w-2xl leading-tight">
                Der intelligente KI-Agent für Freelancer. <br/> Räumt Google Drive & OneDrive automatisch auf.
              </p>
              
              <Link 
                href="/login"
                className="group flex items-center justify-between w-full md:w-auto bg-black text-white px-8 py-6 text-xl font-black uppercase border-4 border-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2"
              >
                <span>Jetzt aufräumen</span>
                <ArrowRight className="ml-6 size-8 group-hover:translate-x-4 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimalist Workflow Section */}
      <section id="how-it-works" className="py-24 px-6 border-b-4 border-black bg-white">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-[5vw] font-black uppercase leading-none tracking-tighter mb-16">
            How It Works
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-0 border-4 border-black divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-3 hover:translate-y-3 transition-all duration-300">
            {workflow.map((item, index) => (
              <div key={index} className="p-10 hover:bg-black hover:text-white transition-colors duration-300 group">
                <div className="text-5xl font-black mb-6 group-hover:text-white text-gray-200 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base font-bold text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-24 px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 border-b-4 border-black pb-8">
            <h2 className="text-[5vw] font-black uppercase leading-none tracking-tighter">
              Live Demo
            </h2>
            <p className="text-lg font-bold uppercase max-w-md text-right text-gray-500">
              Erlebe die Magie direkt im Browser.
            </p>
          </div>
          
          <div className="p-4 lg:p-12 bg-white">
            <InteractiveCloudDemo />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black px-6 py-12 bg-black text-white">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl">
          <span className="text-3xl font-black uppercase tracking-tighter">
            CloudSorted
          </span>
          <p className="font-bold uppercase text-xs max-w-md text-center md:text-right text-gray-400">
            MVP PROTOTYPE. NO ACTUAL CLOUD CONNECTIONS ESTABLISHED. ALL DATA REMAINS LOCAL.
          </p>
        </div>
      </footer>
    </main>
  );
}
