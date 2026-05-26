"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSent(true);
    setTimeout(() => {
      setShowForgotModal(false);
      setForgotSent(false);
      setForgotEmail("");
    }, 2500);
  };

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md mt-16"
      >
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">
          Einloggen.
        </h1>

        <div className="space-y-4">
          <Link href="/dashboard" className="flex items-center justify-center gap-3 w-full border-4 border-black p-4 font-bold uppercase hover:bg-black hover:text-white transition-colors group text-sm">
            <svg className="size-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.68 14.97.6 12 .6 7.7.6 3.99 3.07 2.18 6.67l3.66 2.84C6.71 6.91 9.14 5.04 12 5.04z" />
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31l3.57 2.77c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            </svg>
            Mit Google fortfahren
          </Link>
          
          <Link href="/dashboard" className="flex items-center justify-center gap-3 w-full border-4 border-black p-4 font-bold uppercase hover:bg-black hover:text-white transition-colors group text-sm">
            <svg className="size-5 shrink-0" viewBox="0 0 23 23">
              <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
              <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7FBA00" />
              <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00A4EF" />
              <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#FFB900" />
            </svg>
            Mit Microsoft fortfahren
          </Link>
        </div>

        <div className="my-10 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-4 border-black"></div>
          </div>
          <div className="relative flex justify-center text-xs font-bold uppercase">
            <span className="bg-white px-4">Oder per E-Mail</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="font-bold uppercase text-xs">E-Mail-Adresse</label>
            <Input 
              type="email" 
              placeholder="NAME@BEISPIEL.DE" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-4 border-black p-4 font-bold uppercase focus:outline-none focus:ring-0 placeholder:text-gray-300 rounded-none h-14" 
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-bold uppercase text-xs">Passwort</label>
              <button 
                type="button"
                onClick={() => setShowForgotModal(true)}
                className="font-bold uppercase text-xs text-gray-400 hover:text-black cursor-pointer transition-colors"
              >
                Vergessen?
              </button>
            </div>
            <Input 
              type="password" 
              placeholder="••••••••" 
              className="w-full border-4 border-black p-4 font-bold focus:outline-none focus:ring-0 placeholder:text-gray-300 rounded-none h-14" 
            />
          </div>

          <Link href="/dashboard" className="flex justify-center items-center gap-2 w-full bg-black text-white p-5 font-black uppercase hover:bg-white hover:text-black border-4 border-black transition-colors group mt-8">
            Einloggen
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <p className="text-center font-bold uppercase text-[10px] text-gray-400 mt-12">
          MVP-Prototyp. Keine echten Anmeldedaten erforderlich.
        </p>
      </motion.div>

      {/* Forgot Password Popup Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md border-4 border-black p-8 bg-white relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setShowForgotModal(false);
                setForgotSent(false);
                setForgotEmail("");
              }}
              className="absolute top-6 right-6 text-gray-500 hover:text-black transition-colors"
            >
              <X className="size-6" />
            </button>
            
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
              <Mail className="size-6" /> Passwort vergessen?
            </h2>

            {forgotSent ? (
              <div className="bg-green-50 border-4 border-green-800 p-6 text-green-800 font-bold uppercase text-xs space-y-2 animate-pulse">
                <p className="font-black text-sm">Link gesendet!</p>
                <p>Wir haben eine E-Mail an <strong>{forgotEmail}</strong> gesendet.</p>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-6">
                <p className="font-bold uppercase text-xs text-gray-500 leading-normal">
                  Gib deine E-Mail-Adresse ein und wir senden dir einen Link, um dein Passwort zurückzusetzen.
                </p>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase">Deine E-Mail-Adresse</label>
                  <Input
                    type="email"
                    required
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="NAME@BEISPIEL.DE"
                    className="border-4 border-black rounded-none h-12 px-4 font-bold placeholder:text-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black rounded-none h-12 font-black uppercase tracking-widest text-xs"
                >
                  Link anfordern
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
