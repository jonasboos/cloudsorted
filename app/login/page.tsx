"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Hexagon } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-center items-center p-6 selection:bg-black selection:text-white">
      
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
        className="w-full max-w-md"
      >
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-12">
          Sign In.
        </h1>

        <div className="space-y-6">
          <Link href="/dashboard" className="flex items-center justify-center gap-3 w-full border-4 border-black p-4 font-bold uppercase hover:bg-black hover:text-white transition-colors group">
            <svg className="size-5 group-hover:text-white" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"/>
            </svg>
            Continue with Google
          </Link>
          
          <Link href="/dashboard" className="flex items-center justify-center gap-3 w-full border-4 border-black p-4 font-bold uppercase hover:bg-black hover:text-white transition-colors group">
            <Hexagon className="size-5 group-hover:text-white" />
            Continue with Microsoft
          </Link>
        </div>

        <div className="my-10 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-4 border-black"></div>
          </div>
          <div className="relative flex justify-center text-sm font-bold uppercase">
            <span className="bg-white px-4">OR EMAIL</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="font-bold uppercase text-sm">Email Address</label>
            <input type="email" placeholder="MAIL@EXAMPLE.COM" className="w-full border-4 border-black p-4 font-bold uppercase focus:outline-none focus:ring-0 placeholder:text-gray-300" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="font-bold uppercase text-sm">Password</label>
              <span className="font-bold uppercase text-sm text-gray-400 hover:text-black cursor-pointer">Forgot?</span>
            </div>
            <input type="password" placeholder="••••••••" className="w-full border-4 border-black p-4 font-bold focus:outline-none focus:ring-0 placeholder:text-gray-300" />
          </div>

          <Link href="/dashboard" className="flex justify-center items-center gap-2 w-full bg-black text-white p-5 font-black uppercase hover:bg-white hover:text-black border-4 border-black transition-colors group mt-8">
            ENTER
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <p className="text-center font-bold uppercase text-xs text-gray-400 mt-12">
          MVP Prototype. No actual accounts needed.
        </p>
      </motion.div>
    </main>
  );
}
