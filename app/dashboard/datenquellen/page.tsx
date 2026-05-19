import { Cloud, Database, HardDrive, Plus, RefreshCw, Settings2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PageHeader, StatusPill } from "../_components/page-section";

const sources = [
  {
    name: "Google Drive",
    account: "demo@cloudsorted.app",
    used: "842 GB",
    total: "1 TB",
    progress: 84,
    tone: "bg-blue-300",
    status: "Aktiv",
  },
  {
    name: "Microsoft OneDrive",
    account: "workspace@cloudsorted.app",
    used: "156 GB",
    total: "1 TB",
    progress: 16,
    tone: "bg-sky-300",
    status: "Aktiv",
  },
  {
    name: "Lokales Archiv",
    account: "Demo Import",
    used: "38 GB",
    total: "250 GB",
    progress: 15,
    tone: "bg-emerald-300",
    status: "Pausiert",
  },
];

export default function DatenquellenPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Quellen"
        title="Alle Cloud-Speicher in einer sauberen Ansicht."
        description="Die Karten zeigen verbundene Quellen, Speicherbelegung und Scan-Zustand als statische Frontend-Demo."
        action={
          <Button className="h-11 rounded-lg">
            <Plus className="size-4" />
            Quelle verbinden
          </Button>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {sources.map((source) => (
          <Card key={source.name} className="border-white/10 bg-white/[0.035]">
            <CardHeader>
              <div className="mb-4 flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-blue-200">
                  <Cloud className="size-5" />
                </span>
                <StatusPill tone={source.status === "Aktiv" ? "emerald" : "amber"}>
                  {source.status}
                </StatusPill>
              </div>
              <CardTitle className="text-white">{source.name}</CardTitle>
              <CardDescription>{source.account}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Speicher</span>
                  <span className="text-white">
                    {source.used} / {source.total}
                  </span>
                </div>
                <Progress
                  value={source.progress}
                  className="h-2 bg-white/[0.08]"
                  indicatorClassName={source.tone}
                />
              </div>

              <div className="grid grid-cols-2 gap-3 border-y border-white/10 py-4">
                <div>
                  <p className="text-xs text-slate-500">Letzter Scan</p>
                  <p className="mt-1 text-sm font-medium text-white">Heute</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Hinweise</p>
                  <p className="mt-1 text-sm font-medium text-white">7 offen</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="secondary" className="flex-1">
                  <RefreshCw className="size-4" />
                  Sync
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings2 className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          [Database, "1.634 Dateien", "in der Demo indexiert"],
          [HardDrive, "1.036 GB", "sichtbarer Gesamtspeicher"],
          [RefreshCw, "3 Quellen", "mit Scan-Zeitplan"],
        ].map(([Icon, value, label]) => {
          const MetricIcon = Icon as typeof Database;

          return (
            <Card key={value as string} className="border-white/10 bg-white/[0.035]">
              <CardContent className="flex items-center gap-4 p-5">
                <span className="grid size-10 place-items-center rounded-lg bg-white/[0.05] text-slate-200">
                  <MetricIcon className="size-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-white">{value as string}</p>
                  <p className="text-xs text-slate-500">{label as string}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
