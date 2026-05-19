import {
  Activity,
  BrainCircuit,
  Cloud,
  FileCog,
  FolderTree,
  Sparkles,
  Zap,
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
import { PageHeader, StatCard, StatusPill } from "./_components/page-section";

const activities = [
  {
    title: "Projekt-Cluster vorbereitet",
    detail: "Kunde Mayer / Website Relaunch / 42 Dateien",
    time: "vor 12 Min",
    icon: FolderTree,
  },
  {
    title: "Naming-Regel simuliert",
    detail: "Rechnungen erhalten ein einheitliches Datumsformat",
    time: "vor 1 Std",
    icon: FileCog,
  },
  {
    title: "Drive Scan abgeschlossen",
    detail: "1.284 Dateien analysiert, 19 Hinweise gefunden",
    time: "heute",
    icon: Cloud,
  },
];

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Workspace Uebersicht"
        title="Ein ruhiges Cockpit fuer deine Cloud-Ordnung."
        description="Der Prototyp zeigt, wie CloudSorted Dateien analysiert, Vorschlaege vorbereitet und Risiken sichtbar macht. Alles hier ist reines Frontend."
        action={
          <Button className="h-11 rounded-lg">
            <Zap className="size-4" />
            Demo-Scan starten
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Verbundene Clouds"
          value="2"
          detail="Google Drive und OneDrive sind als Demo-Quellen sichtbar."
          icon={Cloud}
          tone="blue"
        />
        <StatCard
          title="Agent Status"
          value="Bereit"
          detail="Keine echte Aktion aktiv. Der Agent wartet im Demo-Modus."
          icon={Activity}
          tone="emerald"
        />
        <StatCard
          title="Erkannte Cluster"
          value="14"
          detail="Kunden, Projekte und Archive als visuelle Vorschau."
          icon={BrainCircuit}
          tone="violet"
        />
        <StatCard
          title="Ordnungs-Score"
          value="86%"
          detail="Statischer Score fuer die Dashboard-Darstellung."
          icon={Sparkles}
          tone="amber"
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <Card className="border-white/10 bg-white/[0.035]">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-white">Aktivitaet</CardTitle>
              <CardDescription>Die wichtigsten Demo-Ereignisse</CardDescription>
            </div>
            <StatusPill tone="slate">Heute</StatusPill>
          </CardHeader>
          <CardContent className="grid gap-3">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.title}
                  className="flex items-center gap-4 rounded-lg border border-white/[0.08] bg-[#080b16] p-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-blue-200">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white">
                      {activity.title}
                    </p>
                    <p className="mt-1 truncate text-xs text-slate-500">
                      {activity.detail}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/[0.035]">
          <CardHeader>
            <CardTitle className="text-white">Heute optimiert</CardTitle>
            <CardDescription>Mock-Metriken fuer die Startseite</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {[
              ["Dubletten erkannt", 72, "bg-emerald-300"],
              ["Regeln angewendet", 58, "bg-blue-300"],
              ["Freigaben geprueft", 41, "bg-amber-300"],
            ].map(([label, value, color]) => (
              <div key={label as string} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">{label}</span>
                  <span className="font-medium text-white">{value}%</span>
                </div>
                <Progress
                  value={value as number}
                  className="h-2 bg-white/[0.08]"
                  indicatorClassName={color as string}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
