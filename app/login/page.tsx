"use client";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, KeyRound, Mail, ShieldCheck, Sparkles, Hexagon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-background text-foreground lg:grid-cols-[1.1fr_1fr] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Left Pane: Image Section */}
      <section className="relative hidden lg:flex flex-col items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/login_bg_simple.png" 
            alt="Minimalist Data Background" 
            fill 
            className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center space-y-6 max-w-md"
        >
          <div className="relative size-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
            <Image 
              src="/assets/logo_mark.png" 
              alt="CloudSorted Logo" 
              width={96} 
              height={96}
              className="relative z-10 animate-float drop-shadow-2xl"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white leading-tight">
            Minimalismus trifft <br />
            <span className="text-primary">Intelligenz.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dein persönlicher Agent für eine perfekt strukturierte Cloud. Simpel, schnell und sicher.
          </p>
        </motion.div>

        {/* Floating Badges */}
        <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-center gap-4">
           {["Sichere Sandbox", "Vollständige Automation", "DSGVO Konform"].map((label, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8 + i * 0.1 }}
               className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-white/70"
             >
               {label}
             </motion.div>
           ))}
        </div>
      </section>

      <section className="relative z-10 flex items-center justify-center px-6 py-12 sm:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[440px]"
        >
          <div className="mb-8 lg:hidden flex justify-center">
             <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative size-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg">
                <Image src="/assets/logo_mark.png" alt="Logo" width={40} height={40} className="object-cover" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">CloudSorted</span>
            </Link>
          </div>

          <Card className="w-full bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <CardHeader className="space-y-3 pb-8 pt-8">
              <CardDescription className="uppercase tracking-widest text-xs font-semibold text-primary">Beta Zugang</CardDescription>
              <CardTitle className="text-3xl font-bold text-white">Einloggen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button asChild variant="outline" className="h-12 justify-start px-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all group">
                  <Link href="/dashboard" className="w-full">
                    <svg className="mr-3 size-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                      />
                    </svg>
                    Mit Google fortfahren
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 justify-start px-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                  <Link href="/dashboard" className="w-full">
                    <Hexagon className="mr-3 size-4 text-sky-400" />
                    Mit Microsoft 365
                  </Link>
                </Button>
              </div>

              <div className="my-8 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#0c0c12] px-4 text-muted-foreground font-medium tracking-wider">Oder klassisch</span>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-white/80">E-Mail Adresse</Label>
                  <Input id="email" placeholder="mail@example.com" type="email" className="h-12 bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary/50 text-white transition-all" />
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-white/80">Passwort</Label>
                    <span className="text-xs text-primary hover:underline cursor-pointer">Passwort vergessen?</span>
                  </div>
                  <Input id="password" placeholder="••••••••" type="password" className="h-12 bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary/50 text-white transition-all" />
                </div>
                <Button asChild size="lg" className="h-12 mt-4 rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                  <Link href="/dashboard">
                    Einloggen
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
            
            <div className="p-6 border-t border-white/5 bg-black/40 text-center">
               <p className="text-xs text-muted-foreground">
                 Keine echten Accounts benötigt. <br />
                 <span className="text-primary/70">Nur zu Demonstrationszwecken.</span>
               </p>
            </div>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
