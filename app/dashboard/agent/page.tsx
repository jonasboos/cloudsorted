import { Bot, BrainCircuit, Clock3, Play, SlidersHorizontal, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { PageHeader, StatCard, StatusPill } from "../_components/page-section";

export default function AgentPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Agent Steuerung"
        title="Ein klarer Kontrollraum für automatische Ordnung."
        description="Konfiguriere, wie mutig der Agent in der Demo sortieren würde. Die Controls sind rein visuell und führen keine Aktionen aus."
        action={
          <Button className="h-11 rounded-lg">
            <Play className="size-4" />
            Agent simulieren
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Modus"
          value="Review first"
          detail="Vorschläge werden vor Änderungen gesammelt."
          icon={Bot}
          tone="blue"
        />
        <StatCard
          title="Nächster Lauf"
          value="09:30"
          detail="Zeitplan als statische Dashboard-Anzeige."
          icon={Clock3}
          tone="emerald"
        />
        <StatCard
          title="Confidence"
          value="91%"
          detail="Mock-Wert aus Datei-, Kunden- und Projektmustern."
          icon={BrainCircuit}
          tone="violet"
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className="border-white/10 bg-white/[0.035]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <SlidersHorizontal className="size-5 text-blue-200" />
              Verhalten
            </CardTitle>
            <CardDescription>Demo-Parameter für die Agentenlogik</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              ["Automatisierungsgrad", "Vorsichtig", 42],
              ["Projekt-Erkennung", "Präzise", 78],
              ["Archiv-Aggressivität", "Niedrig", 28],
            ].map(([label, detail, value]) => (
              <div key={label as string} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">{label}</p>
                    <p className="text-xs text-slate-500">{detail}</p>
                  </div>
                  <span className="text-sm text-slate-400">{value}%</span>
                </div>
                <Slider defaultValue={[value as number]} max={100} step={1} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/[0.035]">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-white">Lauf-Vorschau</CardTitle>
              <CardDescription>Was der Agent im nächsten Demo-Lauf prüft</CardDescription>
            </div>
            <StatusPill tone="emerald">Bereit</StatusPill>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              ["Neue Kundenordner erkennen", "Kunde, Projekt und Datum extrahieren", true],
              ["Unsichere Treffer parken", "Alles unter 80% Confidence bleibt in Review", true],
              ["Alte Entwürfe archivieren", "Dateien älter als 180 Tage markieren", false],
            ].map(([title, text, active]) => (
              <div
                key={title as string}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-[#080b16] p-4"
              >
                <Switch defaultChecked={active as boolean} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="mt-1 text-xs text-slate-500">{text}</p>
                </div>
                <Badge className="border-white/10 bg-white/[0.04] text-slate-300">
                  Demo
                </Badge>
              </div>
            ))}

            <div className="rounded-lg border border-blue-400/20 bg-blue-400/10 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-blue-100">Simulierter Fortschritt</p>
                <Zap className="size-4 text-blue-200" />
              </div>
              <Progress value={64} className="h-2 bg-black/30" indicatorClassName="bg-blue-300" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
