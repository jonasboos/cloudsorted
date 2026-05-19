import { AlertTriangle, CheckCircle2, KeyRound, LockKeyhole, Shield, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { PageHeader, StatCard, StatusPill } from "../_components/page-section";

export default function SicherheitPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Privacy"
        title="Sicherheit sichtbar machen, ohne den Workflow zu stören."
        description="Die Seite zeigt Freigaben, Schutzstatus und Audit-Hinweise als statische Frontend-Ansicht."
        action={
          <Button className="h-11 rounded-lg">
            <ShieldCheck className="size-4" />
            Audit simulieren
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Privacy Score"
          value="92"
          detail="Statischer Score für den Demo-Workspace."
          icon={Shield}
          tone="emerald"
        />
        <StatCard
          title="Offene Links"
          value="3"
          detail="Public Shares als visuelle Warnung."
          icon={AlertTriangle}
          tone="amber"
        />
        <StatCard
          title="Token Status"
          value="Aktuell"
          detail="Keine echten Tokens im Frontend verbunden."
          icon={KeyRound}
          tone="blue"
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-white/10 bg-white/[0.035]">
          <CardHeader>
            <CardTitle className="text-white">Schutzoptionen</CardTitle>
            <CardDescription>Visuelle Toggles für Sicherheits-Features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              ["Zwei-Faktor-Hinweise", "Warnen, wenn ein Account ohne 2FA wirkt", true],
              ["Public-Link Review", "Öffentliche Freigaben vorziehen", true],
              ["Sensible Dateien markieren", "Ausweise und Verträge in Review halten", true],
              ["Automatische Sperre", "Nur als UI-Demo dargestellt", false],
            ].map(([title, detail, enabled]) => (
              <div
                key={title as string}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-[#080b16] p-4"
              >
                <LockKeyhole className="size-5 shrink-0 text-slate-400" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="mt-1 text-xs text-slate-500">{detail}</p>
                </div>
                <Switch defaultChecked={enabled as boolean} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/[0.035]">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-white">Audit Log</CardTitle>
              <CardDescription>Kurze Timeline für sicherheitsrelevante Hinweise</CardDescription>
            </div>
            <StatusPill tone="amber">3 Hinweise</StatusPill>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Audit-Abdeckung</span>
                <span className="font-medium text-white">76%</span>
              </div>
              <Progress value={76} className="h-2 bg-white/[0.08]" indicatorClassName="bg-emerald-300" />
            </div>

            {[
              [CheckCircle2, "Cloud-Token aktuell", "Heute 14:02", "text-emerald-300"],
              [AlertTriangle, "Öffentlicher Link erkannt", "Heute 12:45", "text-amber-300"],
              [Shield, "Review-Regel angewendet", "Gestern", "text-blue-300"],
            ].map(([Icon, title, time, color]) => {
              const LogIcon = Icon as typeof Shield;

              return (
                <div key={title as string} className="flex gap-4 rounded-lg border border-white/10 bg-[#080b16] p-4">
                  <LogIcon className={`size-5 shrink-0 ${color as string}`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">{title as string}</p>
                    <p className="mt-1 text-xs text-slate-500">{time as string}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
