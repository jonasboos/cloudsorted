import { FileCog, GitBranch, Plus, ShieldCheck, Tags } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { PageHeader, StatusPill } from "../_components/page-section";

const rules = [
  {
    title: "Einheitliche Dateinamen",
    detail: "{Kunde}_{Datum}_{Dokumenttyp}",
    tone: "blue" as const,
    enabled: true,
  },
  {
    title: "Kundenordner clustern",
    detail: "Kontakt, Angebot und Projekt in einer Struktur",
    tone: "violet" as const,
    enabled: true,
  },
  {
    title: "Entwürfe markieren",
    detail: "draft, copy und final_final in Review verschieben",
    tone: "amber" as const,
    enabled: true,
  },
  {
    title: "Private Dateien schützen",
    detail: "Ausweise, Verträge und Rechnungen nie automatisch teilen",
    tone: "emerald" as const,
    enabled: false,
  },
];

export default function RegelnPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Sortierlogik"
        title="Regeln, die sich wie ein echtes Ordnungssystem anfühlen."
        description="Diese Seite zeigt Frontend-only Regeln für Benennung, Zuordnung und Review-Workflows."
        action={
          <Button className="h-11 rounded-lg">
            <Plus className="size-4" />
            Neue Regel
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {rules.map((rule) => (
          <Card key={rule.title} className="border-white/10 bg-white/[0.035]">
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <StatusPill tone={rule.tone}>Regel</StatusPill>
                <CardTitle className="mt-4 text-white">{rule.title}</CardTitle>
                <CardDescription className="mt-2">{rule.detail}</CardDescription>
              </div>
              <Switch defaultChecked={rule.enabled} />
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-white/10 bg-white/[0.035]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <GitBranch className="size-5 text-violet-200" />
              Entscheidungsbaum
            </CardTitle>
            <CardDescription>Frontend-Darstellung der Regel-Prioritäten</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {[
              ["1", "Sensible Inhalte blockieren", "Immer zuerst prüfen"],
              ["2", "Kunden- und Projektmuster erkennen", "Ordnerziel vorschlagen"],
              ["3", "Naming normalisieren", "Dateinamen lesbar machen"],
              ["4", "Unsichere Treffer in Review legen", "Keine automatische Änderung"],
            ].map(([step, title, detail]) => (
              <div key={step} className="flex gap-4 rounded-lg border border-white/10 bg-[#080b16] p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-md bg-white/[0.05] text-sm font-semibold text-white">
                  {step}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="mt-1 text-xs text-slate-500">{detail}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/[0.035]">
          <CardHeader>
            <CardTitle className="text-white">Regel-Bibliothek</CardTitle>
            <CardDescription>Schnelle Templates für die Demo</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {[
              [Tags, "Tags aus Dateinamen lesen", "Kunde, Jahr, Status"],
              [ShieldCheck, "Freigaben begrenzen", "Public Links markieren"],
              [FileCog, "PDFs normalisieren", "OCR und Metadaten anzeigen"],
            ].map(([Icon, title, detail]) => {
              const RuleIcon = Icon as typeof Tags;

              return (
                <div key={title as string} className="rounded-lg border border-white/10 bg-[#080b16] p-4">
                  <RuleIcon className="mb-3 size-5 text-blue-200" />
                  <p className="text-sm font-medium text-white">{title as string}</p>
                  <p className="mt-1 text-xs text-slate-500">{detail as string}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
