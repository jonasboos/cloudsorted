"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, LayoutDashboard, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-center items-center p-6 selection:bg-black selection:text-white relative">
      
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl font-black tracking-tighter uppercase">
            CloudSorted
          </span>
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-xl text-center space-y-12"
      >
        <div className="size-28 border-4 border-black flex items-center justify-center bg-black text-white mx-auto rotate-3">
          <ShieldAlert className="size-14" />
        </div>

        <div>
          <h1 className="text-[12vw] sm:text-[8vw] font-black leading-none tracking-tighter uppercase">
            404.
          </h1>
          <p className="text-2xl font-black uppercase tracking-tight mt-4">
            Seite nicht gefunden
          </p>
          <p className="text-sm font-bold uppercase text-gray-500 mt-4 leading-relaxed max-w-md mx-auto">
            Der von dir gesuchte Pfad existiert nicht oder wurde aufgeräumt.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Link href="/" className="w-full">
            <Button className="w-full h-14 bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black rounded-none font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              <ArrowLeft className="size-4" /> Zur Startseite
            </Button>
          </Link>

          <Link href="/dashboard" className="w-full">
            <Button className="w-full h-14 bg-white text-black hover:bg-black hover:text-white border-4 border-black rounded-none font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              <LayoutDashboard className="size-4" /> Zum Dashboard
            </Button>
          </Link>
        </div>
      </motion.div>

      <div className="absolute bottom-6 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
        CloudSorted • Fehlercode 404
      </div>
    </main>
  );
}
