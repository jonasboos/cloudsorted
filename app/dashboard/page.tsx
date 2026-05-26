import { Cloud, Zap, CheckCircle2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-16">
        <h1 className="text-[6vw] sm:text-[4vw] font-black uppercase leading-[0.85] tracking-tighter mb-6">
          Übersicht.
        </h1>
        <p className="text-xl font-bold uppercase max-w-2xl text-gray-500">
          Dein MVP-Dashboard zur automatischen Bereinigung von Google Drive und OneDrive.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border-4 border-black p-8 hover:bg-black hover:text-white transition-colors group">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Google Drive</h2>
            <Cloud className="size-8 group-hover:text-white" />
          </div>
          <div className="flex items-center gap-2 mb-6 font-bold uppercase text-sm">
            <CheckCircle2 className="size-5 text-green-500 group-hover:text-green-400" />
            <span>Verbunden (jonas@example.com)</span>
          </div>
          <Button className="w-full bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black rounded-none h-14 font-black uppercase tracking-widest text-sm group-hover:bg-white group-hover:text-black group-hover:border-black group-hover:hover:bg-black group-hover:hover:text-white group-hover:hover:border-white">
            <Zap className="mr-2 size-5" /> Bereinigung starten
          </Button>
        </div>

        <div className="border-4 border-black p-8 hover:bg-black hover:text-white transition-colors group">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter">OneDrive</h2>
            <Cloud className="size-8 group-hover:text-white" />
          </div>
          <div className="flex items-center gap-2 mb-6 font-bold uppercase text-sm">
            <ShieldAlert className="size-5 text-red-500 group-hover:text-red-400" />
            <span>Nicht verbunden</span>
          </div>
          <Button className="w-full bg-white text-black hover:bg-black hover:text-white border-4 border-black rounded-none h-14 font-black uppercase tracking-widest text-sm group-hover:bg-black group-hover:text-white group-hover:border-white group-hover:hover:bg-white group-hover:hover:text-black group-hover:hover:border-transparent">
            Verbinden
          </Button>
        </div>
      </div>

      <div className="border-4 border-black p-8">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Letzte Aktivitäten</h2>
        <div className="divide-y-4 divide-black border-t-4 border-black">
          {[
            { action: "Drive-Bereinigung abgeschlossen", time: "Heute, 10:45 Uhr", status: "Erfolgreich" },
            { action: "Metadaten-Scan gestartet", time: "Gestern, 14:20 Uhr", status: "Erfolgreich" },
            { action: "Namensregeln angewendet", time: "Gestern, 14:25 Uhr", status: "Erfolgreich" },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center py-6">
              <div>
                <p className="font-black uppercase text-lg">{item.action}</p>
                <p className="font-bold uppercase text-xs text-gray-500">{item.time}</p>
              </div>
              <span className="bg-black text-white px-4 py-2 font-bold uppercase text-xs">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
