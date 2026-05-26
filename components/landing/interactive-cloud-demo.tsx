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
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="relative overflow-hidden bg-white border-4 border-black w-full max-w-5xl mx-auto min-h-[500px] flex flex-col group/demo">
      <div className="relative z-10 border-b-4 border-black p-6 bg-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-bold tracking-widest uppercase text-xs">Live Experience</p>
            <h2 className="mt-1 text-3xl font-black uppercase tracking-tighter text-black">
              Perfect Your Cloud
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            {["connect", "scan", "propose", "success"].map((s, i) => (
              <div key={s} className="flex items-center">
                <div className={cn(
                  "size-8 flex items-center justify-center text-xs font-black uppercase transition-all border-2 border-black",
                  step === s ? "bg-black text-white" : 
                  (i < ["connect", "scan", "propose", "success"].indexOf(step) ? "bg-gray-200 text-black" : "bg-white text-gray-300 border-gray-300")
                )}>
                  {i < ["connect", "scan", "propose", "success"].indexOf(step) ? <CheckCircle2 className="size-5" /> : i + 1}
                </div>
                {i < 3 && <div className={cn("w-6 md:w-12 h-1 mx-1 md:mx-2", i < ["connect", "scan", "propose", "success"].indexOf(step) ? "bg-black" : "bg-gray-200")} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col p-0 overflow-hidden bg-white">
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
                <h3 className="text-4xl font-black uppercase tracking-tighter">Select Source</h3>
                <p className="text-gray-500 font-bold uppercase text-sm">Choose where your chaos lives right now.</p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className={cn("h-32 flex-col gap-4 border-4 border-black rounded-none bg-white hover:bg-black hover:text-white transition-all", cloud === "drive" && "bg-black text-white")}
                    onClick={() => setCloud("drive")}
                  >
                    <Cloud className="size-8" />
                    <span className="font-black uppercase tracking-widest text-xs">Google Drive</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className={cn("h-32 flex-col gap-4 border-4 border-black rounded-none bg-white hover:bg-black hover:text-white transition-all", cloud === "onedrive" && "bg-black text-white")}
                    onClick={() => setCloud("onedrive")}
                  >
                    <ChevronRight className="size-8" />
                    <span className="font-black uppercase tracking-widest text-xs">OneDrive</span>
                  </Button>
                </div>
                
                <Button 
                  disabled={!cloud} 
                  className="w-full h-16 mt-6 border-4 border-black rounded-none bg-white text-black hover:bg-black hover:text-white font-black uppercase tracking-widest text-sm transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setStep("scan")}
                >
                  Start Analysis <ArrowRight className="ml-4 size-5 group-hover:translate-x-2 transition-transform" />
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
              className="flex-1 flex flex-col p-8 lg:p-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-3 py-1 border-2 border-black font-black uppercase text-xs">
                      <Loader2 className="size-4 mr-2 animate-spin" /> Deep Scan Active
                    </div>
                    <h3 className="text-5xl font-black uppercase tracking-tighter leading-none">Analyzing<br />Metadata.</h3>
                    <p className="text-gray-500 font-bold uppercase text-sm">Finding patterns in the chaos.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b-4 border-black pb-2">
                      <span className="text-sm font-black uppercase tracking-widest">Progress</span>
                      <span className="text-3xl font-black">{progress}%</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 border-4 border-black text-center">
                        <p className="text-xs font-bold uppercase text-gray-500 mb-1 tracking-widest">Files</p>
                        <p className="text-3xl font-black">{Math.floor(progress * 1.4)}</p>
                      </div>
                      <div className="p-4 border-4 border-black text-center">
                        <p className="text-xs font-bold uppercase text-gray-500 mb-1 tracking-widest">Clusters</p>
                        <p className="text-3xl font-black">{Math.floor(progress * 0.12)}</p>
                      </div>
                      <div className="p-4 border-4 border-black text-center">
                        <p className="text-xs font-bold uppercase text-gray-500 mb-1 tracking-widest">Confidence</p>
                        <p className="text-3xl font-black">{Math.min(98, 40 + Math.floor(progress * 0.58))}%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white border-4 border-black overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500">
                     <div className="bg-black text-white p-4 flex items-center border-b-4 border-black font-black uppercase text-xs tracking-widest">
                        cloud_root / messy_files
                     </div>
                     <div className="p-6 space-y-4 font-mono font-bold text-sm">
                        {messyFiles.map((f, i) => (
                          <motion.div 
                            key={f.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="flex items-center gap-4 text-black border-2 border-transparent hover:border-black p-2 transition-colors"
                          >
                            <FileText className="size-5" />
                            <span>{f.name}</span>
                            <span className="ml-auto text-gray-400">{f.size}</span>
                          </motion.div>
                        ))}
                        <div className="h-32 flex items-center justify-center border-t-4 border-dashed border-gray-300 mt-6">
                           <div className="flex flex-col items-center gap-4">
                              <Loader2 className="size-8 animate-spin" />
                              <span className="text-xs font-black uppercase tracking-widest animate-pulse">Clustering...</span>
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
              className="flex-1 flex flex-col p-8 lg:p-16"
            >
              <div className="flex flex-col lg:flex-row gap-12 flex-1">
                <div className="lg:w-1/3 space-y-8">
                  <h3 className="text-5xl font-black uppercase tracking-tighter leading-none">Structure<br />Proposed.</h3>
                  <p className="text-sm font-bold text-gray-500 uppercase leading-relaxed">
                    Agent found 14 projects. Here is your new hierarchy.
                  </p>
                  
                  <div className="space-y-4 py-6 border-y-4 border-black">
                     <div className="flex items-center gap-3 font-black uppercase text-sm">
                        <ShieldCheck className="size-6 text-green-500" />
                        <span>0 Duplicates</span>
                     </div>
                     <div className="flex items-center gap-3 font-black uppercase text-sm">
                        <Zap className="size-6" />
                        <span>32 Renames</span>
                     </div>
                  </div>
                  
                  <div className="pt-4 space-y-4">
                    <Button 
                      className="w-full h-16 border-4 border-black rounded-none bg-black text-white hover:bg-white hover:text-black font-black uppercase tracking-widest text-sm transition-all"
                      onClick={() => setStep("success")}
                    >
                      Apply Changes
                    </Button>
                    <Button variant="outline" className="w-full h-16 border-4 border-black rounded-none bg-white text-black hover:bg-black hover:text-white font-black uppercase tracking-widest text-sm transition-all" onClick={reset}>
                      Cancel
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 bg-white border-4 border-black p-8 font-mono font-bold text-sm overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <FolderTree className="size-64" />
                  </div>
                  
                  <div className="space-y-2 relative z-10">
                    {[
                      { path: "Clients", type: "folder", root: true },
                      { path: "Katherine-Smith", type: "folder", indent: 1 },
                      { path: "Project-Relaunch", type: "folder", indent: 2 },
                      { path: "01-Briefing", type: "folder", indent: 3 },
                      { path: "briefing-notes-2024.docx", type: "file", indent: 4, isNew: true },
                      { path: "02-Assets", type: "folder", indent: 3 },
                      { path: "main-logo-v2.png", type: "file", indent: 4, isNew: true },
                      { path: "Invoices", type: "folder", indent: 2 },
                      { path: "INV_2024_01.pdf", type: "file", indent: 3, isNew: true },
                      { path: "Archive", type: "folder", root: true },
                      { path: "Legacy", type: "folder", indent: 1 },
                    ].map((item, i) => (
                      <motion.div
                         key={i}
                         initial={{ opacity: 0, x: -10 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: i * 0.05 }}
                         className={cn(
                           "flex items-center py-2 px-3 hover:bg-black hover:text-white transition-colors cursor-default",
                           item.root && "mt-6 border-b-2 border-black pb-1"
                         )}
                         style={{ paddingLeft: `${(item.indent || 0) * 2 + 1}rem` }}
                      >
                         <span className="mr-3 opacity-30">
                           {item.indent ? '└' : ''}
                         </span>
                         {item.type === 'folder' ? (
                           <FolderTree className="size-5 mr-3" />
                         ) : (
                           <FileText className="size-5 mr-3 opacity-50" />
                         )}
                         <span className={cn(item.isNew && "text-green-500")}>
                           {item.path}
                         </span>
                         {item.isNew && (
                           <span className="ml-auto text-[10px] bg-black text-white px-2 py-1 uppercase tracking-widest group-hover:bg-white group-hover:text-black">Proposed</span>
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
              className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16 text-center"
            >
               <div className="size-32 border-4 border-black flex items-center justify-center mb-12 relative bg-black text-white rotate-6">
                  <CheckCircle2 className="size-16" />
               </div>
               
               <h3 className="text-6xl font-black uppercase tracking-tighter mb-6">Sorted.</h3>
               <p className="text-gray-500 font-bold uppercase text-sm max-w-md mx-auto mb-12 leading-relaxed">
                 Files renamed. Folders structured. 100% clean cloud.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                  <Button className="flex-1 h-16 border-4 border-black rounded-none bg-black text-white hover:bg-white hover:text-black font-black uppercase tracking-widest text-sm transition-all" onClick={reset}>
                    Run Again
                  </Button>
               </div>
               
               <div className="mt-16 pt-12 border-t-4 border-black w-full max-w-2xl">
                  <div className="grid grid-cols-3 gap-8 text-center border-x-4 border-black p-4">
                     <div>
                        <p className="text-4xl font-black">45</p>
                        <p className="text-[10px] font-bold uppercase text-gray-500 mt-2 tracking-widest">Moved</p>
                     </div>
                     <div className="border-x-4 border-black px-4">
                        <p className="text-4xl font-black">12</p>
                        <p className="text-[10px] font-bold uppercase text-gray-500 mt-2 tracking-widest">Created</p>
                     </div>
                     <div>
                        <p className="text-4xl font-black">1.2s</p>
                        <p className="text-[10px] font-bold uppercase text-gray-500 mt-2 tracking-widest">Time</p>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t-4 border-black bg-white flex items-center justify-center gap-4 font-black text-xs uppercase tracking-widest relative z-10">
        <ShieldCheck className="size-5" />
        Safe Sandbox • No Real Modifications
      </div>
    </div>
  );
}
