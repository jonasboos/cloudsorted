import Link from "next/link";
import {
  Activity,
  Bell,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  FileCog,
  FolderTree,
  LayoutDashboard,
  LogOut,
  Settings2,
  Shield,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const nav = [
  ["Overview", LayoutDashboard],
  ["Agent", Bot],
  ["Regeln", FileCog],
  ["Sicherheit", Shield],
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-border bg-card/40 p-5 lg:block">
          <Link href="/" className="mb-8 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl border border-primary/30 bg-primary/15 text-primary">
              <Sparkles className="size-5" />
            </span>
            <span className="font-semibold">CloudSorted</span>
          </Link>
          <nav className="grid gap-1">
            {nav.map(([label, Icon]) => (
              <a
                key={label as string}
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-4" />
                {label as string}
              </a>
            ))}
          </nav>
          <div className="mt-8 rounded-xl border border-border bg-background/60 p-4">
            <p className="text-sm font-medium">Demo-Modus</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Alle Schalter und Werte sind nur visuelle Einstellungen.
            </p>
          </div>
        </aside>

        <section>
          <header className="flex items-center justify-between border-b border-border bg-background/80 px-5 py-4 backdrop-blur sm:px-8">
            <div>
              <p className="text-sm text-muted-foreground">Dashboard</p>
              <h1 className="text-2xl font-semibold tracking-normal">
                KI-Agent verwalten
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" aria-label="Benachrichtigungen">
                <Bell />
              </Button>
              <Button asChild variant="outline">
                <Link href="/login">
                  <LogOut />
                  Logout
                </Link>
              </Button>
            </div>
          </header>

          <div className="grid gap-6 px-5 py-6 sm:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Verbunden", "Google Drive, OneDrive", Cloud],
                ["Agent Status", "Bereit für Vorschau", Activity],
                ["Sortierqualität", "Demo Score 86%", BrainCircuit],
              ].map(([title, value, Icon]) => (
                <Card key={title as string}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div>
                      <CardDescription>{title as string}</CardDescription>
                      <CardTitle className="mt-2 text-xl">
                        {value as string}
                      </CardTitle>
                    </div>
                    <span className="grid size-10 place-items-center rounded-lg bg-primary/15 text-primary">
                      <Icon className="size-5" />
                    </span>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="agent" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:w-[520px]">
                <TabsTrigger value="agent">Agent</TabsTrigger>
                <TabsTrigger value="rules">Regeln</TabsTrigger>
                <TabsTrigger value="preview">Vorschau</TabsTrigger>
              </TabsList>

              <TabsContent value="agent">
                <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
                  <Card>
                    <CardHeader>
                      <CardDescription>Agent Profil</CardDescription>
                      <CardTitle>CloudSorted Assistant</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-5">
                      <div className="grid gap-2">
                        <Label htmlFor="agent-name">Name</Label>
                        <Input
                          id="agent-name"
                          defaultValue="Kundenordner Agent"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Arbeitsstil</Label>
                        <Select defaultValue="balanced">
                          <SelectTrigger>
                          <SelectValue placeholder="Arbeitsstil wählen" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="careful">Vorsichtig</SelectItem>
                            <SelectItem value="balanced">Ausgewogen</SelectItem>
                            <SelectItem value="fast">Schnell</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <div className="flex items-center justify-between">
                          <Label>Automationsgrad</Label>
                          <span className="text-sm text-muted-foreground">62%</span>
                        </div>
                        <Slider defaultValue={[62]} max={100} step={1} />
                      </div>
                      <div className="grid gap-3">
                        {[
                          "Vorschau vor jeder Änderung",
                          "Kundennamen bevorzugen",
                          "Rechnungen separat markieren",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-lg border border-border bg-muted/35 p-3"
                          >
                            <span className="text-sm">{item}</span>
                            <Switch defaultChecked />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardDescription>Live Simulation</CardDescription>
                      <CardTitle>Nächster Scan</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-muted-foreground">Index</span>
                          <span>43%</span>
                        </div>
                        <Progress value={43} />
                      </div>
                      {[
                        "17 Dateien erkannt",
                        "4 Kundenordner vorgeschlagen",
                        "3 unsichere Namen markiert",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="size-4 text-primary" />
                          {item}
                        </div>
                      ))}
                      <Button className="w-full">
                        <Settings2 />
                        Demo-Einstellungen speichern
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="rules">
                <Card>
                  <CardHeader>
                    <CardDescription>Sortierregeln</CardDescription>
                    <CardTitle>Frontend für Agent-Anpassung</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-2">
                    {[
                      ["Dateinamen", "Kunde + Projekt + Dokumenttyp"],
                      ["Ordnerlogik", "Kunde / Projekt / Phase"],
                      ["Sensible Dateien", "Immer manuell bestätigen"],
                      ["Duplikate", "Nur markieren, nicht löschen"],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-xl border border-border bg-muted/35 p-4">
                        <p className="font-medium">{title}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preview">
                <Card>
                  <CardHeader>
                    <CardDescription>Cloud Vorschau</CardDescription>
                    <CardTitle>Geplante Struktur</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {[
                        "/Kunden/Katherine-Smith/Website-Relaunch/01-Briefing",
                        "/Kunden/Katherine-Smith/Website-Relaunch/02-Assets",
                        "/Kunden/Miller-Studio/Rechnungen/2026",
                        "/Archiv/Unsicher/Bitte-prüfen",
                      ].map((path) => (
                        <div
                          key={path}
                          className="flex items-center gap-3 rounded-lg border border-border bg-background/50 p-3 text-sm"
                        >
                          <FolderTree className="size-4 text-primary" />
                          {path}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </main>
  );
}
