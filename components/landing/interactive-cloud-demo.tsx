"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Cloud,
  FileText,
  FolderTree,
  Loader2,
  Sparkles,
  Wand2,
  Image as ImageIcon,
  FileType2,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
    <Card className="relative overflow-hidden bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl w-full max-w-5xl mx-auto min-h-[500px] flex flex-col">
      {/* Glow Effects */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-70" />

      <CardHeader className="relative z-10 border-b border-white/5 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardDescription className="text-primary font-medium tracking-wide uppercase text-xs">Live Erfahrung</CardDescription>
            <CardTitle className="mt-1 text-2xl text-white">
              Dein Weg zur perfekten Cloud
            </CardTitle>
          </div>
          
          <div className="flex items-center gap-2">
            {["connect", "scan", "propose", "success"].map((s, i) => (
              <div key={s} className="flex items-center">
                <div className={cn(
                  "size-8 rounded-full flex items-center justify-center text-xs font-bold transition-all border",
                  step === s ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" : 
                  (i < ["connect", "scan", "propose", "success"].indexOf(step) ? "bg-primary/20 border-primary/40 text-primary" : "bg-white/5 border-white/10 text-white/30")
                )}>
                  {i < ["connect", "scan", "propose", "success"].indexOf(step) ? <CheckCircle2 className="size-4" /> : i + 1}
                </div>
                {i < 3 && <div className={cn("w-6 md:w-12 h-px mx-1 md:mx-2", i < ["connect", "scan", "propose", "success"].indexOf(step) ? "bg-primary/40" : "bg-white/10")} />}
              </div>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 flex-1 flex flex-col p-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {step === "connect" && (
            <motion.div 
              key="connect"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="max-w-md space-y-6">
                <div className="size-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Cloud className="size-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Verbinde deine Cloud</h3>
                <p className="text-muted-foreground">Wähle deinen Speicherort aus, um den Agenten mit der Analyse deiner Dateistruktur zu beauftragen.</p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className={cn("h-24 flex-col gap-2 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all", cloud === "drive" && "border-primary bg-primary/10")}
                    onClick={() => setCloud("drive")}
                  >
                    <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Cloud className="size-6" />
                    </div>
                    Google Drive
                  </Button>
                  <Button 
                    variant="outline" 
                    className={cn("h-24 flex-col gap-2 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all", cloud === "onedrive" && "border-primary bg-primary/10")}
                    onClick={() => setCloud("onedrive")}
                  >
                    <div className="size-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
                      <ChevronRight className="size-6" />
                    </div>
                    OneDrive
                  </Button>
                </div>
                
                <Button 
                  disabled={!cloud} 
                  className="w-full h-12 mt-6 rounded-xl shadow-lg shadow-primary/20"
                  onClick={() => setStep("scan")}
                >
                  Analyse starten <ArrowRight className="ml-2 size-4" />
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
              className="flex-1 flex flex-col p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/20 border-none mb-2">
                      <Loader2 className="size-3 mr-1.5 animate-spin" /> Deep Scan aktiv
                    </Badge>
                    <h3 className="text-3xl font-bold text-white leading-tight">Agent analysiert<br />deine Metadaten</h3>
                    <p className="text-muted-foreground">Der KI-Agent erkennt Muster, Dateitypen und Zusammenhänge zwischen deinen Dokumenten.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-medium text-white">Progress</span>
                      <span className="text-primary font-mono text-xl font-bold">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-3 bg-white/5" indicatorClassName="bg-gradient-to-r from-primary to-accent" />
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-tighter">Files</p>
                        <p className="text-lg font-bold text-white">{Math.floor(progress * 1.4)}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-tighter">Clusters</p>
                        <p className="text-lg font-bold text-white">{Math.floor(progress * 0.12)}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-tighter">Confidence</p>
                        <p className="text-lg font-bold text-white">{Math.min(98, 40 + Math.floor(progress * 0.58))}%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full animate-pulse"></div>
                  <Card className="relative bg-black/40 border-white/10 overflow-hidden shadow-2xl rotate-2">
                     <div className="bg-white/5 p-3 flex items-center gap-2 border-b border-white/5">
                        <div className="size-2 rounded-full bg-red-500/50"></div>
                        <div className="size-2 rounded-full bg-amber-500/50"></div>
                        <div className="size-2 rounded-full bg-green-500/50"></div>
                        <span className="text-[10px] text-muted-foreground ml-2 font-mono">cloud_root / messy_files</span>
                     </div>
                     <div className="p-4 space-y-3 font-mono text-[11px]">
                        {messyFiles.map((f, i) => (
                          <motion.div 
                            key={f.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="flex items-center gap-3 text-white/40"
                          >
                            <FileText className="size-3" />
                            <span>{f.name}</span>
                            <span className="ml-auto opacity-50">{f.size}</span>
                          </motion.div>
                        ))}
                        <div className="h-20 flex items-center justify-center border-t border-white/5 mt-4 pt-4">
                           <div className="flex flex-col items-center gap-2">
                              <Loader2 className="size-6 text-primary animate-spin" />
                              <span className="text-[10px] text-primary/80 animate-pulse">Clustering data...</span>
                           </div>
                        </div>
                     </div>
                  </Card>
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
              className="flex-1 flex flex-col p-8"
            >
              <div className="flex flex-col lg:flex-row gap-8 flex-1">
                <div className="lg:w-1/3 space-y-6">
                  <div className="size-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <Sparkles className="size-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">Vorschlag zur<br />Strukturierung</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Der Agent hat 14 Projekte erkannt. Hier ist der Vorschlag für deine neue, saubere Cloud-Hierarchie.
                  </p>
                  
                  <div className="space-y-3 pt-4">
                     <div className="flex items-center gap-3 text-sm text-green-400">
                        <ShieldCheck className="size-4" />
                        <span>Keine Duplikate gefunden</span>
                     </div>
                     <div className="flex items-center gap-3 text-sm text-white/70">
                        <Zap className="size-4 text-primary" />
                        <span>32 Umbenennungen geplant</span>
                     </div>
                  </div>
                  
                  <div className="pt-8 space-y-3">
                    <Button 
                      className="w-full h-12 rounded-xl shadow-lg shadow-primary/20"
                      onClick={() => setStep("success")}
                    >
                      Änderungen anwenden
                    </Button>
                    <Button variant="ghost" className="w-full text-muted-foreground" onClick={reset}>
                      Abbrechen
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 bg-black/40 border border-white/10 rounded-2xl p-6 font-mono text-sm overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <FolderTree className="size-48 text-primary" />
                  </div>
                  
                  <div className="space-y-1 relative z-10">
                    {[
                      { path: "Kunden", type: "folder", root: true },
                      { path: "Katherine-Smith", type: "folder", indent: 1 },
                      { path: "Project-Relaunch", type: "folder", indent: 2 },
                      { path: "01-Briefing", type: "folder", indent: 3 },
                      { path: "briefing-notes-2024.docx", type: "file", indent: 4, isNew: true },
                      { path: "02-Assets", type: "folder", indent: 3 },
                      { path: "main-logo-v2.png", type: "file", indent: 4, isNew: true },
                      { path: "Rechnungen", type: "folder", indent: 2 },
                      { path: "RE_2024_01.pdf", type: "file", indent: 3, isNew: true },
                      { path: "Archiv", type: "folder", root: true },
                      { path: "Alte-Projekte", type: "folder", indent: 1 },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={cn(
                          "flex items-center py-1.5 px-3 rounded-md hover:bg-white/5 transition-colors cursor-default",
                          item.root && "mt-4 font-bold text-white"
                        )}
                        style={{ paddingLeft: `${(item.indent || 0) * 1.5 + 0.75}rem` }}
                      >
                        <span className="mr-2 opacity-30 text-muted-foreground">
                          {item.indent ? '└' : ''}
                        </span>
                        {item.type === 'folder' ? (
                          <FolderTree className="size-4 mr-2 text-blue-400" />
                        ) : (
                          <FileText className="size-4 mr-2 text-muted-foreground" />
                        )}
                        <span className={cn(item.root ? "text-white" : "text-white/70", item.isNew && "text-green-400")}>
                          {item.path}
                        </span>
                        {item.isNew && (
                          <span className="ml-2 text-[8px] bg-green-500/20 text-green-400 px-1 rounded uppercase">Vorschlag</span>
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
              className="flex-1 flex flex-col items-center justify-center p-8 text-center"
            >
               <div className="size-24 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-8 relative">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute inset-0 rounded-full border border-green-500/40"
                  />
                  <CheckCircle2 className="size-12 text-green-400" />
               </div>
               
               <h3 className="text-3xl font-bold text-white mb-4">Cloud erfolgreich sortiert</h3>
               <p className="text-muted-foreground max-w-md mx-auto mb-10">
                 Alle Dateien wurden umbenannt und in die neue Struktur verschoben. Deine Cloud ist jetzt 100% ordentlich.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-xl px-8" onClick={reset}>
                    Nochmal versuchen
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-xl px-8 border-white/10 hover:bg-white/5" asChild>
                    <a href="/dashboard">Zum Dashboard</a>
                  </Button>
               </div>
               
               <div className="mt-12 pt-12 border-t border-white/5 w-full max-w-lg">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Statistik dieser Demo</p>
                  <div className="grid grid-cols-3 gap-8">
                     <div>
                        <p className="text-xl font-bold text-white">45</p>
                        <p className="text-[10px] text-muted-foreground">Files verschoben</p>
                     </div>
                     <div>
                        <p className="text-xl font-bold text-white">12</p>
                        <p className="text-[10px] text-muted-foreground">Ordner erstellt</p>
                     </div>
                     <div>
                        <p className="text-xl font-bold text-white">1.2s</p>
                        <p className="text-[10px] text-muted-foreground">Rechenzeit</p>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>

      <div className="p-4 border-t border-white/5 bg-black/40 flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest relative z-10">
        <ShieldCheck className="size-3" />
        Sicherheits-Garantie: Keine echten Datenänderungen in dieser Demo
      </div>
    </Card>
  );
}

// Helper components
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-white/10", className)}>
      {children}
    </span>
  );
}
