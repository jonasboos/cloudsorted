"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Cloud,
  FileText,
  FolderTree,
  Loader2,
  Sparkles,
  Wand2,
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
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const files = [
  {
    name: "final_logo_neu_3.png",
    type: "Asset",
    target: "/Kunden/Katherine-Smith/Relaunch/02-Assets",
  },
  {
    name: "rechnung-maerz.pdf",
    type: "Rechnung",
    target: "/Kunden/Katherine-Smith/Rechnungen/2026",
  },
  {
    name: "briefing_kunde_notes.docx",
    type: "Briefing",
    target: "/Kunden/Katherine-Smith/Relaunch/01-Briefing",
  },
];

export function InteractiveCloudDemo() {
  const [cloud, setCloud] = useState<"drive" | "onedrive">("drive");
  const [selected, setSelected] = useState(0);
  const [autoRename, setAutoRename] = useState(true);
  const [confidence, setConfidence] = useState([72]);
  const [isScanning, setIsScanning] = useState(false);

  const activeFile = files[selected];
  const progress = useMemo(() => {
    const base = cloud === "drive" ? 58 : 64;
    return Math.min(96, base + selected * 8 + Math.round(confidence[0] / 10));
  }, [cloud, selected, confidence]);

  function runScan() {
    setIsScanning(true);
    window.setTimeout(() => {
      setSelected((current) => (current + 1) % files.length);
      setIsScanning(false);
    }, 850);
  }

  return (
    <Card className="animate-rise relative overflow-hidden bg-card/85 shadow-2xl shadow-primary/10">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(79,140,255,0.08),transparent)] opacity-70" />
      {isScanning ? <div className="scan-line" /> : null}

      <CardHeader className="relative">
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardDescription>Interaktive Demo</CardDescription>
            <CardTitle className="mt-2 text-2xl">
              Teste den Sortier-Agenten
            </CardTitle>
          </div>
          <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
            {isScanning ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              <Sparkles className="size-5" />
            )}
          </span>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-5">
        <div className="grid grid-cols-2 gap-2">
          {[
            ["drive", "Google Drive"],
            ["onedrive", "OneDrive"],
          ].map(([value, label]) => (
            <button
              key={value}
              className={cn(
                "h-11 rounded-lg border px-3 text-sm font-medium transition-all hover:border-primary/60 hover:bg-primary/10",
                cloud === value
                  ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                  : "border-border bg-background/50 text-muted-foreground",
              )}
              onClick={() => setCloud(value as "drive" | "onedrive")}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-background/60 p-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Agent Confidence</span>
            <span className="font-medium text-primary">{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>

        <div className="grid gap-2">
          {files.map((file, index) => (
            <button
              key={file.name}
              className={cn(
                "group flex items-center gap-3 rounded-xl border p-3 text-left transition-all hover:-translate-y-0.5 hover:border-primary/60",
                selected === index
                  ? "border-primary/70 bg-primary/10"
                  : "border-border bg-muted/30",
              )}
              onClick={() => setSelected(index)}
              type="button"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-background text-primary">
                <FileText className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">
                  {file.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {file.type}
                </span>
              </span>
              {selected === index ? (
                <CheckCircle2 className="size-4 text-primary" />
              ) : null}
            </button>
          ))}
        </div>

        <div className="grid gap-4 rounded-xl border border-border bg-muted/25 p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">Dateien umbenennen</p>
              <p className="text-xs text-muted-foreground">
                Nur als Vorschau im Prototyp
              </p>
            </div>
            <Switch checked={autoRename} onCheckedChange={setAutoRename} />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Strenge der Regeln</span>
              <span>{confidence[0]}%</span>
            </div>
            <Slider
              max={100}
              min={20}
              onValueChange={setConfidence}
              step={1}
              value={confidence}
            />
          </div>
        </div>

        <div className="rounded-xl border border-primary/25 bg-primary/10 p-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid size-8 place-items-center rounded-lg bg-primary/15 text-primary">
              <FolderTree className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-primary">
                Sortiervorschlag
              </p>
              <p className="mt-1 break-words text-sm text-foreground">
                {activeFile.target}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {autoRename
                  ? `Neuer Name: katherine-smith-${activeFile.type.toLowerCase()}-2026`
                  : "Originalname bleibt unveraendert"}
              </p>
            </div>
          </div>
        </div>

        <Button className="w-full" onClick={runScan} disabled={isScanning}>
          {isScanning ? <Loader2 className="animate-spin" /> : <Wand2 />}
          {isScanning ? "Agent scannt..." : "Demo-Scan starten"}
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Cloud className="size-3.5" />
          Keine echten Cloud-Zugriffe, nur Frontend
        </div>
      </CardContent>
    </Card>
  );
}
