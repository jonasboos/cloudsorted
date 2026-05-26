"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  FolderTree,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Step = "connect" | "scan" | "propose" | "success";

const messyFiles = [
  { name: "IMG_20240501_final_2.png", type: "Asset", size: "2.4 MB" },
  { name: "rechnung_maerz_kopie.pdf", type: "Invoice", size: "0.8 MB" },
  { name: "neues_projekt_v1_notes.docx", type: "Doc", size: "1.2 MB" },
];

export function InteractiveCloudDemo() {
  const [step, setStep] = useState<Step>("connect");
  const [cloud, setCloud] = useState<"drive" | "onedrive" | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === "scan") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep("propose"), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  const reset = () => {
    setStep("connect");
    setCloud(null);
    setProgress(0);
  };

  return (
    <div className="relative min-w-0 overflow-hidden bg-white border-4 border-black w-full max-w-5xl mx-auto flex flex-col group/demo">
      <div className="relative z-10 border-b-4 border-black p-4 bg-white sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-bold tracking-widest uppercase text-xs">Live Experience</p>
            <h2 className="mt-1 text-2xl font-black uppercase tracking-tighter text-black sm:text-3xl">
              Perfect Your Cloud
            </h2>
          </div>
          
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:gap-2 sm:overflow-visible sm:pb-0">
            {["connect", "scan", "propose", "success"].map((s, i) => (
              <div key={s} className="flex shrink-0 items-center">
                <div className={cn(
                  "size-7 sm:size-8 flex items-center justify-center text-xs font-black uppercase transition-all border-2 border-black",
                  step === s ? "bg-black text-white" : 
                  (i < ["connect", "scan", "propose", "success"].indexOf(step) ? "bg-gray-200 text-black" : "bg-white text-gray-300 border-gray-300")
                )}>
                  {i < ["connect", "scan", "propose", "success"].indexOf(step) ? <CheckCircle2 className="size-5" /> : i + 1}
                </div>
                {i < 3 && <div className={cn("w-5 md:w-12 h-1 mx-1 md:mx-2", i < ["connect", "scan", "propose", "success"].indexOf(step) ? "bg-black" : "bg-gray-200")} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 min-h-[610px] md:h-[580px] md:min-h-0 flex flex-col p-0 overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          {step === "connect" && (
            <motion.div 
              key="connect"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col items-center justify-center p-5 text-center overflow-y-auto sm:p-8"
            >
              <div className="max-w-md space-y-6">
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">Quelle wählen</h3>
                <p className="text-gray-500 font-bold uppercase text-xs">Wähle den Speicherort, an dem dein Chaos wohnt.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className={cn("h-24 sm:h-32 flex-col gap-3 sm:gap-4 border-4 border-black rounded-none bg-white hover:bg-black hover:text-white transition-all", cloud === "drive" && "bg-black text-white")}
                    onClick={() => setCloud("drive")}
                  >
                    <svg className="size-8 group-hover:opacity-90" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M12 5.04c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.68 14.97.6 12 .6 7.7.6 3.99 3.07 2.18 6.67l3.66 2.84C6.71 6.91 9.14 5.04 12 5.04z" />
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31l3.57 2.77c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    </svg>
                    <span className="font-black uppercase tracking-widest text-xs">Google Drive</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className={cn("h-24 sm:h-32 flex-col gap-3 sm:gap-4 border-4 border-black rounded-none bg-white hover:bg-black hover:text-white transition-all", cloud === "onedrive" && "bg-black text-white")}
                    onClick={() => setCloud("onedrive")}
                  >
                    <svg className="size-8" viewBox="0 0 23 23">
                      <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
                      <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7FBA00" />
                      <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00A4EF" />
                      <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#FFB900" />
                    </svg>
                    <span className="font-black uppercase tracking-widest text-xs">OneDrive</span>
                  </Button>
                </div>
                
                <Button 
                  disabled={!cloud} 
                  className="w-full h-16 mt-6 border-4 border-black rounded-none bg-white text-black hover:bg-black hover:text-white font-black uppercase tracking-widest text-sm transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setStep("scan")}
                >
                  Scan starten <ArrowRight className="ml-4 size-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === "scan" && (
            <motion.div 
              key="scan"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex-1 flex flex-col p-5 sm:p-6 lg:p-8 overflow-y-auto min-h-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-3 py-1 border-2 border-black font-black uppercase text-xs">
                      <Loader2 className="size-4 mr-2 animate-spin" /> Deep-Scan Aktiv
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-none">Muster erkennen.</h3>
                    <p className="text-gray-500 font-bold uppercase text-xs">Der Agent ordnet das Chaos im Hintergrund.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b-4 border-black pb-2">
                      <span className="text-xs font-black uppercase tracking-widest">Fortschritt</span>
                      <span className="text-3xl font-black">{progress}%</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      <div className="p-3 sm:p-4 border-4 border-black text-center bg-white">
                        <p className="text-[10px] font-bold uppercase text-gray-500 mb-1 tracking-widest">Dateien</p>
                        <p className="text-2xl font-black">{Math.floor(progress * 1.4)}</p>
                      </div>
                      <div className="p-3 sm:p-4 border-4 border-black text-center bg-white">
                        <p className="text-[10px] font-bold uppercase text-gray-500 mb-1 tracking-widest">Cluster</p>
                        <p className="text-2xl font-black">{Math.floor(progress * 0.12)}</p>
                      </div>
                      <div className="p-3 sm:p-4 border-4 border-black text-center bg-white">
                        <p className="text-[10px] font-bold uppercase text-gray-500 mb-1 tracking-widest">Sicherheit</p>
                        <p className="text-2xl font-black">{Math.min(98, 40 + Math.floor(progress * 0.58))}%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white border-4 border-black overflow-hidden sm:rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[300px] sm:max-h-[340px] flex flex-col">
                     <div className="bg-black text-white p-4 flex items-center border-b-4 border-black font-black uppercase text-xs tracking-widest shrink-0">
                        cloud_root / messy_files
                     </div>
                     <div className="p-6 space-y-4 font-mono font-bold text-xs overflow-y-auto flex-1 bg-white">
                        {messyFiles.map((f, i) => (
                          <motion.div 
                            key={f.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="flex items-center gap-4 text-black border-2 border-transparent hover:border-black p-2 transition-colors"
                          >
                            <FileText className="size-4 shrink-0" />
                            <span className="truncate">{f.name}</span>
                            <span className="ml-auto text-gray-400 shrink-0">{f.size}</span>
                          </motion.div>
                        ))}
                        <div className="h-20 flex items-center justify-center border-t-4 border-dashed border-gray-300 mt-6">
                           <div className="flex flex-col items-center gap-2">
                              <Loader2 className="size-5 animate-spin" />
                              <span className="text-[10px] font-black uppercase tracking-widest animate-pulse">Gruppierung läuft...</span>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === "propose" && (
            <motion.div 
              key="propose"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col p-5 sm:p-6 lg:p-8 overflow-y-auto min-h-0"
            >
              <div className="flex min-w-0 flex-col lg:flex-row gap-6 lg:gap-8 flex-1">
                <div className="lg:w-1/3 space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-none">Struktur bereit.</h3>
                  <p className="text-xs font-bold text-gray-500 uppercase leading-relaxed">
                    Agent hat 14 Projekte erkannt. Hier ist deine neue Hierarchie.
                  </p>
                  
                  <div className="space-y-3 py-4 border-y-4 border-black">
                     <div className="flex items-center gap-3 font-black uppercase text-xs">
                        <ShieldCheck className="size-5 text-green-500" />
                        <span>0 Duplikate gefunden</span>
                     </div>
                     <div className="flex items-center gap-3 font-black uppercase text-xs">
                        <Zap className="size-5" />
                        <span>32 Umbenennungen vorgeschlagen</span>
                     </div>
                  </div>
                  
                  <div className="pt-2 space-y-4">
                    <Button 
                      className="w-full h-14 border-4 border-black rounded-none bg-black text-white hover:bg-white hover:text-black font-black uppercase tracking-widest text-xs transition-all"
                      onClick={() => setStep("success")}
                    >
                      Änderungen anwenden
                    </Button>
                    <Button variant="outline" className="w-full h-14 border-4 border-black rounded-none bg-white text-black hover:bg-black hover:text-white font-black uppercase tracking-widest text-xs transition-all" onClick={reset}>
                      Abbrechen
                    </Button>
                  </div>
                </div>
                
                <div className="min-w-0 flex-1 bg-white border-4 border-black p-3 sm:p-6 font-mono font-bold text-xs overflow-x-auto overflow-y-auto max-h-[300px] sm:max-h-[340px] relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <FolderTree className="size-48" />
                  </div>
                  
                  <div className="space-y-1 relative z-10">
                    {[
                      { path: "Kunden", type: "folder", root: true },
                      { path: "Katharina-Schmidt", type: "folder", indent: 1 },
                      { path: "Projekt-Relaunch", type: "folder", indent: 2 },
                      { path: "01-Briefing", type: "folder", indent: 3 },
                      { path: "briefing-notizen-2025.docx", type: "file", indent: 4, isNew: true },
                      { path: "02-Assets", type: "folder", indent: 3 },
                      { path: "haupt-logo-v2.png", type: "file", indent: 4, isNew: true },
                      { path: "Rechnungen", type: "folder", indent: 2 },
                      { path: "RE_2025_01.pdf", type: "file", indent: 3, isNew: true },
                      { path: "Archiv", type: "folder", root: true },
                      { path: "Verlauf", type: "folder", indent: 1 },
                    ].map((item, i) => (
                      <motion.div
                         key={i}
                         initial={{ opacity: 0, x: -10 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: i * 0.05 }}
                         className={cn(
                           "flex min-w-max items-center py-2 px-3 hover:bg-black hover:text-white transition-colors cursor-default",
                           item.root && "mt-4 border-b-2 border-black pb-1"
                         )}
                         style={{ paddingLeft: `${(item.indent || 0) * 1.5 + 0.5}rem` }}
                      >
                         <span className="mr-2 opacity-30 text-[10px]">
                           {item.indent ? '└' : ''}
                         </span>
                         {item.type === 'folder' ? (
                           <FolderTree className="size-4 mr-2" />
                         ) : (
                           <FileText className="size-4 mr-2 opacity-50" />
                         )}
                         <span className={cn(item.isNew && "text-green-600 truncate")}>
                           {item.path}
                         </span>
                         {item.isNew && (
                           <span className="ml-auto text-[9px] bg-black text-white px-2 py-0.5 uppercase tracking-widest">Neu</span>
                         )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center p-5 sm:p-6 lg:p-8 text-center overflow-y-auto"
            >
               <div className="size-20 sm:size-24 border-4 border-black flex items-center justify-center mb-6 sm:mb-8 relative bg-black text-white rotate-6 shrink-0">
                  <CheckCircle2 className="size-12" />
               </div>
               
               <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4">Aufgeräumt.</h3>
               <p className="text-gray-500 font-bold uppercase text-xs max-w-md mx-auto mb-8 leading-relaxed">
                 Dateien umbenannt. Ordner strukturiert. Deine Cloud ist sauber.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md shrink-0">
                  <Button className="flex-1 h-14 border-4 border-black rounded-none bg-black text-white hover:bg-white hover:text-black font-black uppercase tracking-widest text-xs transition-all" onClick={reset}>
                    Nochmal starten
                  </Button>
               </div>
               
               <div className="mt-8 pt-6 border-t-4 border-black w-full max-w-xl shrink-0">
                  <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center border-x-4 border-black p-3 bg-white">
                     <div>
                        <p className="text-2xl sm:text-3xl font-black">45</p>
                        <p className="text-[9px] font-bold uppercase text-gray-500 mt-1 tracking-widest">Verschoben</p>
                     </div>
                     <div className="border-x-4 border-black px-2">
                        <p className="text-2xl sm:text-3xl font-black">12</p>
                        <p className="text-[9px] font-bold uppercase text-gray-500 mt-1 tracking-widest">Erstellt</p>
                     </div>
                     <div>
                        <p className="text-2xl sm:text-3xl font-black">1.2s</p>
                        <p className="text-[9px] font-bold uppercase text-gray-500 mt-1 tracking-widest">Dauer</p>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t-4 border-black bg-white flex items-center justify-center gap-3 font-black text-[10px] sm:text-xs uppercase tracking-widest relative z-10 text-center">
        <ShieldCheck className="size-5" />
        Safe Sandbox • Keine echten Änderungen
      </div>
    </div>
  );
}
