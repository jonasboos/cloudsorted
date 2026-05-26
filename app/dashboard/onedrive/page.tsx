"use client";

import { useState } from "react";
import { Cloud, CheckCircle, RefreshCw, Key, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OneDrivePage() {
  const [isConnected, setIsConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connectStep, setConnectStep] = useState(0);

  const startConnection = () => {
    setConnecting(true);
    setConnectStep(1);

    setTimeout(() => {
      setConnectStep(2);
      
      setTimeout(() => {
        setConnecting(false);
        setIsConnected(true);
        setConnectStep(0);
      }, 1500);
    }, 1500);
  };

  const disconnect = () => {
    setIsConnected(false);
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-16">
        <h1 className="text-[6vw] sm:text-[4vw] font-black uppercase leading-[0.85] tracking-tighter mb-6">
          OneDrive.
        </h1>
        <p className="text-xl font-bold uppercase max-w-2xl text-gray-500">
          Verbinde deinen Microsoft OneDrive Speicher, um automatische Regeln anzuwenden.
        </p>
      </div>

      {!isConnected ? (
        <div className="border-4 border-black p-8 sm:p-12 bg-white text-black">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-16 border-4 border-black flex items-center justify-center bg-black text-white">
                <Cloud className="size-8" />
              </div>
              <div>
                <span className="bg-red-100 text-red-800 border-2 border-red-800 px-3 py-1 text-xs font-black uppercase tracking-wider">
                  Nicht verbunden
                </span>
                <h2 className="text-3xl font-black uppercase tracking-tighter mt-1">Microsoft OneDrive</h2>
              </div>
            </div>

            <p className="font-bold uppercase text-lg mb-8 leading-snug">
              CloudSorted hat aktuell keinen Zugriff auf dein Microsoft OneDrive. Verbinde dein Konto, um automatische Bereinigungsprozesse zu starten.
            </p>

            <div className="border-t-4 border-black pt-8 mb-12">
              <h3 className="font-black uppercase text-xl mb-6">Funktionen & Automatisierung</h3>
              <ul className="space-y-4 font-bold uppercase text-sm">
                <li className="flex items-start gap-3">
                  <span className="size-6 bg-black text-white flex items-center justify-center font-black text-xs shrink-0">1</span>
                  <span>Scanne nach doppelten Ordnern und verwaisten Backup-Dateien</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-6 bg-black text-white flex items-center justify-center font-black text-xs shrink-0">2</span>
                  <span>Automatische Verschiebung von Rechnungen in strukturierte Ordner</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="size-6 bg-black text-white flex items-center justify-center font-black text-xs shrink-0">3</span>
                  <span>Tägliche Synchronisation deiner Aufräumregeln im Hintergrund</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={startConnection}
              className="bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black rounded-none h-16 px-10 font-black uppercase tracking-widest text-sm flex items-center gap-3"
            >
              <Key className="size-5" /> OneDrive verbinden
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          <div className="border-4 border-black p-8 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="size-16 border-4 border-black flex items-center justify-center bg-black text-white">
                <CheckCircle className="size-8" />
              </div>
              <div>
                <span className="bg-green-100 text-green-800 border-2 border-green-800 px-3 py-1 text-xs font-black uppercase tracking-wider">
                  Aktiv Verbunden
                </span>
                <h2 className="text-3xl font-black uppercase tracking-tighter mt-1">jonas.boos@outlook.com</h2>
              </div>
            </div>
            <Button
              onClick={disconnect}
              className="bg-white text-red-600 hover:bg-red-50 border-4 border-red-600 rounded-none h-14 px-8 font-black uppercase tracking-widest text-xs flex items-center gap-2"
            >
              <LogOut className="size-4" /> Verbindung trennen
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-4 border-black p-8 bg-white">
              <h3 className="font-black uppercase text-2xl mb-6">Speicherstatus</h3>
              <div className="space-y-4 font-bold uppercase text-sm">
                <div className="flex justify-between border-b-2 border-black pb-2">
                  <span className="text-gray-500">Gesamtkapazität</span>
                  <span>1.0 TB</span>
                </div>
                <div className="flex justify-between border-b-2 border-black pb-2">
                  <span className="text-gray-500">Belegter Speicher</span>
                  <span>120.4 GB</span>
                </div>
                <div className="flex justify-between border-b-2 border-black pb-2">
                  <span className="text-gray-500">Freier Speicher</span>
                  <span>879.6 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Letzter Sync</span>
                  <span>Vor 5 Minuten</span>
                </div>
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-white">
              <h3 className="font-black uppercase text-2xl mb-6">Speicherverteilung</h3>
              <div className="h-10 border-4 border-black flex overflow-hidden mb-6">
                <div className="bg-black text-white flex items-center justify-center font-bold text-xs uppercase" style={{ width: "12%" }}>
                  12% Belegt
                </div>
                <div className="bg-white text-black flex items-center justify-center font-bold text-xs uppercase animate-pulse" style={{ width: "88%" }}>
                  88% Frei
                </div>
              </div>
              <p className="font-bold uppercase text-xs text-gray-500">
                Automatische Bereinigungsregeln laufen stündlich und halten deinen Speicher sauber.
              </p>
            </div>
          </div>
        </div>
      )}

      {connecting && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md border-4 border-black p-8 bg-white relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center animate-in zoom-in-95 duration-200">
            <RefreshCw className="size-12 mx-auto mb-6 text-black animate-spin" />
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">OneDrive Verbindung</h2>
            <p className="font-black uppercase text-sm text-gray-500 mb-6">
              {connectStep === 1 ? "Öffne Microsoft Login..." : "Autorisiere CloudSorted..."}
            </p>
            <div className="bg-gray-50 border-4 border-black p-4 text-xs font-bold uppercase text-gray-400">
              Sichere SSL-Verbindung wird aufgebaut
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
