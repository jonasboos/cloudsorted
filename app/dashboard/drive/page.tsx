"use client";

import { useState } from "react";
import { Cloud, Trash2, CheckCircle, RefreshCw, AlertTriangle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlaggedFile {
  id: number;
  name: string;
  size: string;
  reason: string;
  type: string;
}

export default function DrivePage() {
  const [files, setFiles] = useState<FlaggedFile[]>([
    { id: 1, name: "Rechnung-2025-Q1-kopie.pdf", size: "2.4 MB", reason: "Exaktes Duplikat", type: "Dokument" },
    { id: 2, name: "IMG_9823_backup.png", size: "4.8 MB", reason: "Ähnlicher Inhalt", type: "Bild" },
    { id: 3, name: "Praesentation_v2_final_final.pptx", size: "12.1 MB", reason: "Veraltete Version", type: "Dokument" },
    { id: 4, name: "archiv_alt_backup.zip", size: "240 MB", reason: "Seit 2 Jahren ungenutzt", type: "Archiv" },
  ]);

  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [totalFiles, setTotalFiles] = useState(1240);
  const [scanMessage, setScanMessage] = useState("");

  const deleteFile = (id: number) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
    setTotalFiles((prev) => prev - 1);
  };

  const startScan = () => {
    setScanning(true);
    setScanStep(1);
    setScanMessage("Ordnerstruktur analysieren...");
    
    setTimeout(() => {
      setScanStep(2);
      setScanMessage("Metadaten abgleichen...");
      
      setTimeout(() => {
        setScanStep(3);
        setScanMessage("Regel-Vorschläge generieren...");
        
        setTimeout(() => {
          setScanning(false);
          setScanStep(4);
          setScanMessage("Scan abgeschlossen! 320 MB temporäre Dateien bereinigt.");
          setFiles((prev) => [
            ...prev,
            { id: Date.now(), name: "temp_cache_aelter_als_30d.log", size: "320 MB", reason: "Cache-Dateien", type: "Archiv" }
          ]);
        }, 1500);
      }, 1500);
    }, 1500);
  };

  const totalFlaggedSize = files.length > 0 ? `${(files.length * 6.5).toFixed(1)} MB` : "0 MB";

  return (
    <div className="max-w-5xl">
      <div className="mb-16">
        <h1 className="text-[6vw] sm:text-[4vw] font-black uppercase leading-[0.85] tracking-tighter mb-6">
          Google Drive.
        </h1>
        <p className="text-xl font-bold uppercase max-w-2xl text-gray-500">
          Analysiere und bereinige deinen Google Drive Cloud-Speicher in Echtzeit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="border-4 border-black p-8 bg-white text-black">
          <p className="font-bold uppercase text-xs text-gray-500 mb-2">Speicherbelegung</p>
          <p className="text-4xl font-black uppercase tracking-tight">24.5 GB</p>
          <p className="text-xs font-bold uppercase text-gray-400 mt-1">von 15 GB Gratis-Speicherplatz</p>
        </div>

        <div className="border-4 border-black p-8 bg-white text-black">
          <p className="font-bold uppercase text-xs text-gray-500 mb-2">Gescannt</p>
          <p className="text-4xl font-black uppercase tracking-tight">{totalFiles}</p>
          <p className="text-xs font-bold uppercase text-gray-400 mt-1">Dateien erfolgreich gescannt</p>
        </div>

        <div className="border-4 border-black p-8 bg-white text-black">
          <p className="font-bold uppercase text-xs text-gray-500 mb-2">Geflaggt</p>
          <p className="text-4xl font-black uppercase tracking-tight">{totalFlaggedSize}</p>
          <p className="text-xs font-bold uppercase text-red-500 mt-1">{files.length} Dateien benötigen Aufmerksamkeit</p>
        </div>
      </div>

      <div className="border-4 border-black p-8 mb-16 bg-white">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Speicheraufteilung</h2>
        
        <div className="h-16 border-4 border-black flex mb-6 overflow-hidden">
          <div className="bg-black text-white flex items-center justify-center font-bold text-xs uppercase" style={{ width: "65%" }}>
            Dokumente (65%)
          </div>
          <div className="bg-gray-400 text-black flex items-center justify-center font-bold text-xs uppercase" style={{ width: "20%" }}>
            Bilder (20%)
          </div>
          <div className="bg-gray-200 text-black flex items-center justify-center font-bold text-xs uppercase" style={{ width: "10%" }}>
            Duplikate (10%)
          </div>
          <div className="bg-white text-black flex items-center justify-center font-bold text-xs uppercase" style={{ width: "5%" }}>
            5%
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-sm font-bold uppercase">
          <div className="flex items-center gap-2">
            <span className="size-4 bg-black border border-black inline-block"></span>
            <span>Dokumente (15.9 GB)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-4 bg-gray-400 border border-black inline-block"></span>
            <span>Bilder (4.9 GB)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-4 bg-gray-200 border border-black inline-block"></span>
            <span>Duplikate (2.4.GB)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-4 bg-white border border-black inline-block"></span>
            <span>Frei (1.3 GB)</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2 border-4 border-black p-8 bg-white">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Geflaggte Dateien</h2>

          {files.length === 0 ? (
            <div className="border-4 border-dashed border-black p-12 text-center">
              <ShieldCheck className="size-16 mx-auto mb-6 text-black" />
              <p className="font-black uppercase text-xl mb-2">Alles sauber!</p>
              <p className="font-bold text-sm uppercase text-gray-500">Keine Duplikate oder veraltete Dateien in Google Drive gefunden.</p>
            </div>
          ) : (
            <div className="divide-y-4 divide-black border-t-4 border-black">
              {files.map((file) => (
                <div key={file.id} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="bg-black text-white px-2 py-1 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                      {file.type}
                    </span>
                    <h3 className="font-black text-lg uppercase tracking-tight break-all">{file.name}</h3>
                    <div className="flex items-center gap-4 mt-2 font-bold uppercase text-xs text-gray-500">
                      <span>Größe: {file.size}</span>
                      <span className="text-red-500 flex items-center gap-1">
                        <AlertTriangle className="size-3" /> {file.reason}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => deleteFile(file.id)}
                    className="bg-white text-black hover:bg-black hover:text-white border-4 border-black rounded-none h-12 px-6 font-black uppercase tracking-widest text-xs flex items-center gap-2"
                  >
                    <Trash2 className="size-4" /> Löschen
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-4 border-black p-8 bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Drive-Scan</h2>
            <p className="font-bold uppercase text-sm text-gray-500 mb-8">
              Lass den intelligenten CloudSorted Agenten nach versteckten Duplikaten und ungenutzten Dateien suchen.
            </p>

            {scanning ? (
              <div className="border-4 border-black p-6 mb-8 text-center animate-pulse">
                <RefreshCw className="size-12 mx-auto mb-4 text-black animate-spin" />
                <p className="font-black uppercase text-lg mb-1">Scanne...</p>
                <p className="font-bold uppercase text-xs text-gray-500">{scanMessage}</p>
                <div className="w-full bg-gray-200 h-4 border-2 border-black mt-4 overflow-hidden">
                  <div
                    className="bg-black h-full transition-all duration-500"
                    style={{ width: `${(scanStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            ) : scanStep === 4 ? (
              <div className="border-4 border-black p-6 mb-8 bg-green-50 text-green-800 border-green-800">
                <CheckCircle className="size-12 mb-4 text-green-800" />
                <p className="font-black uppercase text-lg mb-1">Scan abgeschlossen</p>
                <p className="font-bold uppercase text-xs">{scanMessage}</p>
              </div>
            ) : null}
          </div>

          <Button
            onClick={startScan}
            disabled={scanning}
            className="w-full bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black rounded-none h-16 font-black uppercase tracking-widest text-sm"
          >
            {scanning ? "Scan läuft..." : "Scan starten"}
          </Button>
        </div>
      </div>
    </div>
  );
}
