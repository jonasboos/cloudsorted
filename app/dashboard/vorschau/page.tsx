import { FileText, Folder, MoveRight, SearchCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader, StatusPill } from "../_components/page-section";

const tree = [
  { name: "Google Drive", type: "folder", level: 0, tone: "blue" },
  { name: "Kunden", type: "folder", level: 1, tone: "blue" },
  { name: "Mayer GmbH", type: "folder", level: 2, tone: "blue" },
  { name: "2026_Website_Relaunch", type: "folder", level: 3, tone: "blue" },
  { name: "Mayer_2026-05-18_Briefing.docx", type: "file", level: 4, tag: "Neu" },
  { name: "Mayer_2026-05-18_Angebot.pdf", type: "file", level: 4, tag: "Neu" },
  { name: "Review", type: "folder", level: 1, tone: "amber" },
  { name: "final_final_rechnung.pdf", type: "file", level: 2, tag: "Prüfen" },
];

export default function VorschauPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Änderungsvorschau"
        title="Vorher sehen, was die Ordnung verändern würde."
        description="Diese Ansicht visualisiert eine geplante Zielstruktur. Es wird nichts verschoben, gelöscht oder synchronisiert."
        action={
          <Button className="h-11 rounded-lg">
            <SearchCheck className="size-4" />
            Vorschau prüfen
          </Button>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="border-white/10 bg-white/[0.035]">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-white">Zielstruktur</CardTitle>
              <CardDescription>Statische Baumansicht für geplante Dateiordnung</CardDescription>
            </div>
            <StatusPill tone="emerald">Bereit</StatusPill>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-white/10 bg-[#080b16] p-3 font-mono text-sm">
              {tree.map((item) => {
                const Icon = item.type === "folder" ? Folder : FileText;

                return (
                  <div
                    key={`${item.name}-${item.level}`}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-slate-300 hover:bg-white/[0.04]"
                    style={{ paddingLeft: `${item.level * 1.4 + 0.75}rem` }}
                  >
                    <Icon
                      className={
                        item.type === "folder"
                          ? item.tone === "amber"
                            ? "size-4 text-amber-300"
                            : "size-4 text-blue-300"
                          : "size-4 text-slate-500"
                      }
                    />
                    <span className="min-w-0 flex-1 truncate">{item.name}</span>
                    {item.tag ? (
                      <StatusPill tone={item.tag === "Neu" ? "emerald" : "amber"}>
                        {item.tag}
                      </StatusPill>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {[
            ["42", "Dateien würden sauber gruppiert"],
            ["7", "Elemente bleiben im Review"],
            ["0", "Änderungen ohne Freigabe"],
          ].map(([value, label]) => (
            <Card key={label} className="border-white/10 bg-white/[0.035]">
              <CardContent className="flex items-center gap-4 p-5">
                <span className="text-3xl font-semibold text-white">{value}</span>
                <MoveRight className="size-4 text-slate-500" />
                <p className="text-sm text-slate-400">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
