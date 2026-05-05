"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
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
  Search,
  Menu,
  ChevronRight,
  Database,
  History,
  Zap,
  LockKeyhole,
  ArrowRight,
  Loader2
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
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const nav = [
  ["Overview", LayoutDashboard, true],
  ["Agent", Bot, false],
  ["Regeln", FileCog, false],
  ["Datenquellen", Database, false],
  ["Sicherheit", Shield, false],
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="min-h-screen bg-[#03040b] text-foreground flex overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
      </div>

      <aside className="relative z-10 hidden w-[280px] flex-col border-r border-white/5 bg-black/40 backdrop-blur-3xl lg:flex">
        <div className="p-6">
           <Link href="/" className="flex items-center gap-3 group">
            <div className="relative size-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg transition-all duration-300 group-hover:shadow-primary/20 group-hover:border-primary/40">
              <Image src="/assets/logo_mark.png" alt="Logo" width={40} height={40} className="object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">CloudSorted</span>
          </Link>
        </div>

        <ScrollArea className="flex-1 px-4">
          <nav className="grid gap-2 mt-4">
            {[
              ["Overview", LayoutDashboard, "overview"],
              ["Agent", Bot, "agent"],
              ["Regeln", FileCog, "rules"],
              ["Datenquellen", Database, "sources"],
              ["Sicherheit", Shield, "security"],
            ].map(([label, IconComponent, value], i) => {
              const Icon = IconComponent as React.ElementType;
              const isActive = activeTab === value;
              return (
                <button
                  key={label as string}
                  onClick={() => setActiveTab(value as string)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${isActive ? "bg-primary/10 text-primary border border-primary/20 shadow-sm shadow-primary/5" : "text-muted-foreground hover:bg-white/5 hover:text-white"}`}
                >
                  <Icon className={`size-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  {label as string}
                  {isActive && <ChevronRight className="ml-auto size-4 opacity-50" />}
                </button>
              );
            })}
          </nav>

          <Separator className="my-6 bg-white/5" />
          
          <div className="px-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Letzte Scans</p>
            <div className="grid gap-3">
              {[
                { name: "Google Drive (Root)", time: "vor 2 Min", status: "success" },
                { name: "OneDrive /Kunden", time: "gestern", status: "success" },
                { name: "Archiv 2025", time: "3 Tage", status: "warning" }
              ].map((scan, i) => (
                <div key={i} className="flex items-center gap-3 text-sm group cursor-pointer">
                  <div className={`size-2 rounded-full ${scan.status === "success" ? "bg-green-500" : "bg-amber-500"}`}></div>
                  <span className="text-white/70 group-hover:text-white transition-colors truncate">{scan.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{scan.time}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 mt-auto">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/60 p-4 backdrop-blur-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase tracking-widest px-2 py-0.5">Demo-Modus</Badge>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Visueller Prototyp. Es werden keine Daten verändert.
                </p>
              </div>
              <LockKeyhole className="size-4 text-primary/50" />
            </div>
          </div>
        </div>
      </aside>

      <section className="relative z-10 flex flex-1 flex-col overflow-hidden h-screen">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/5 bg-black/20 px-6 backdrop-blur-xl">
          <div className="flex items-center gap-4 lg:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="size-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg overflow-hidden border border-white/10">
                <Image src="/assets/logo_mark.png" alt="Logo" width={32} height={32} className="object-cover" />
              </div>
              <span className="font-bold text-white">CloudSorted</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center flex-1 max-w-md relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
             <Input placeholder="Dateien oder Kunden suchen..." className="w-full bg-white/5 border-white/10 pl-10 h-10 rounded-full focus-visible:ring-primary/50 transition-all text-sm" />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                 <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-white rounded-full">
                  <Bell className="size-5" />
                  <span className="absolute top-2 right-2 size-2 bg-primary rounded-full ring-2 ring-background"></span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Benachrichtigungen</TooltipContent>
            </Tooltip>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full ml-2 ring-2 ring-white/10 hover:ring-primary/50 transition-all">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                    <AvatarFallback>AT</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Alex Test</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      alex@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profil</DropdownMenuItem>
                <DropdownMenuItem>Einstellungen</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/login" className="text-red-400 focus:text-red-400 cursor-pointer flex items-center">
                    <LogOut className="mr-2 size-4" />
                    Ausloggen
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <ScrollArea className="flex-1">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-6 sm:p-8 md:p-10 max-w-7xl mx-auto w-full space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <motion.p variants={itemVariants} className="text-sm font-medium text-primary mb-1 uppercase tracking-wider">Dashboard Übersicht</motion.p>
                <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tight text-white">
                  Dein KI-Ordnungsassistent
                </motion.h1>
              </div>
              <motion.div variants={itemVariants}>
                <Button className="rounded-full shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40">
                  <Zap className="mr-2 size-4" /> Jetzt aufräumen
                </Button>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Verbundene Clouds", value: "2", desc: "Drive, OneDrive", icon: Cloud, color: "text-blue-400", bg: "bg-blue-400/10" },
                { title: "Agent Status", value: "Bereit", desc: "Wartet auf Start", icon: Activity, color: "text-green-400", bg: "bg-green-400/10" },
                { title: "Erkannte Cluster", value: "14", desc: "+3 neue Kunden", icon: BrainCircuit, color: "text-primary", bg: "bg-primary/10" },
                { title: "Ordnungs-Score", value: "86%", desc: "12% Verbesserung möglich", icon: Sparkles, color: "text-accent", bg: "bg-accent/10" },
              ].map((stat, i) => (
                <Card key={i} className="bg-white/[0.02] border-white/5 backdrop-blur-md overflow-hidden relative group hover:border-white/10 transition-colors">
                  <div className={`absolute -right-6 -top-6 size-24 rounded-full ${stat.bg} blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                      </div>
                      <div className={`grid size-10 place-items-center rounded-xl ${stat.bg} ${stat.color}`}>
                        <stat.icon className="size-5" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1.5">
                      {stat.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full h-12 mb-6 inline-flex w-full sm:w-auto">
                  <TabsTrigger value="overview" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Übersicht</TabsTrigger>
                  <TabsTrigger value="agent" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Agent Steuerung</TabsTrigger>
                  <TabsTrigger value="rules" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Logik & Regeln</TabsTrigger>
                  <TabsTrigger value="preview" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Vorschau</TabsTrigger>
                  <TabsTrigger value="sources" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Datenquellen</TabsTrigger>
                  <TabsTrigger value="security" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Sicherheit</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="focus-visible:outline-none focus-visible:ring-0">
                   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    {[
                      { title: "Dateien verarbeitet", value: "1,284", icon: FileCog, color: "text-blue-400" },
                      { title: "Speicherplatz optimiert", icon: Cloud, value: "12.4 GB", color: "text-green-400" },
                      { title: "KI-Entscheidungen", icon: BrainCircuit, value: "842", color: "text-primary" },
                      { title: "Zeitersparnis", icon: Zap, value: "14h", color: "text-accent" },
                    ].map((stat, i) => (
                      <Card key={i} className="bg-white/[0.02] border-white/5 backdrop-blur-md">
                        <CardContent className="p-6">
                           <div className="flex justify-between items-center">
                              <div>
                                 <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">{stat.title}</p>
                                 <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                              </div>
                              <stat.icon className={cn("size-8 opacity-20", stat.color)} />
                           </div>
                        </CardContent>
                      </Card>
                    ))}
                   </div>
                   
                   <div className="grid gap-6 lg:grid-cols-2">
                      <Card className="bg-white/[0.02] border-white/5">
                        <CardHeader>
                           <CardTitle className="text-lg">Letzte Aktivitäten</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <div className="space-y-4">
                              {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
                                   <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">#{i}</div>
                                   <div>
                                      <p className="text-sm text-white font-medium">Rechnungen sortiert</p>
                                      <p className="text-xs text-muted-foreground">Vor {i * 10} Minuten • 12 Dateien</p>
                                   </div>
                                   <ArrowRight className="ml-auto size-4 text-muted-foreground" />
                                </div>
                              ))}
                           </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                        <CardHeader>
                           <CardTitle className="text-lg">Agenten-Status</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center text-center p-8">
                           <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                              <Bot className="size-8 text-primary animate-bounce" />
                           </div>
                           <h4 className="text-white font-bold mb-2">Agent ist online</h4>
                           <p className="text-sm text-muted-foreground max-w-[200px]">Der Agent überwacht deine Cloud-Ordner in Echtzeit.</p>
                           <Button className="mt-6 w-full" variant="secondary">Einstellungen öffnen</Button>
                        </CardContent>
                      </Card>
                   </div>
                </TabsContent>

                <TabsContent value="agent" className="focus-visible:outline-none focus-visible:ring-0">
                  <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
                    <Card className="bg-white/[0.02] border-white/10 backdrop-blur-md shadow-2xl">
                      <CardHeader className="pb-4">
                        <CardDescription className="text-primary">KI-Konfiguration</CardDescription>
                        <CardTitle className="text-xl text-white">Agenten Profil</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid gap-2">
                          <Label htmlFor="agent-name" className="text-white/80">Profilname</Label>
                          <Input
                            id="agent-name"
                            defaultValue="Freelance Master Profil"
                            className="bg-black/50 border-white/10 focus-visible:ring-primary text-white"
                          />
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="grid gap-2">
                            <Label className="text-white/80">Arbeitsstil</Label>
                            <Select defaultValue="balanced">
                              <SelectTrigger className="bg-black/50 border-white/10 text-white">
                                <SelectValue placeholder="Arbeitsstil wählen" />
                              </SelectTrigger>
                              <SelectContent className="bg-[#0f111a] border-white/10 text-white">
                                <SelectItem value="careful">Vorsichtig (fragt oft nach)</SelectItem>
                                <SelectItem value="balanced">Ausgewogen</SelectItem>
                                <SelectItem value="fast">Aggressiv (maximale Automation)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label className="text-white/80">Fokus-Bereich</Label>
                            <Select defaultValue="clients">
                              <SelectTrigger className="bg-black/50 border-white/10 text-white">
                                <SelectValue placeholder="Fokus wählen" />
                              </SelectTrigger>
                              <SelectContent className="bg-[#0f111a] border-white/10 text-white">
                                <SelectItem value="clients">Kunden & Projekte</SelectItem>
                                <SelectItem value="finance">Buchhaltung & Rechnungen</SelectItem>
                                <SelectItem value="assets">Design Assets</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-3 pt-2">
                          <div className="flex items-center justify-between">
                            <Label className="text-white/80 flex items-center gap-2">
                              Automationsgrad
                              <Tooltip>
                                <TooltipTrigger><div className="size-4 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-muted-foreground">?</div></TooltipTrigger>
                                <TooltipContent>Wie eigenständig der Agent Entscheidungen trifft.</TooltipContent>
                              </Tooltip>
                            </Label>
                            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">Ausbalanciert (62%)</Badge>
                          </div>
                          <Slider defaultValue={[62]} max={100} step={1} className="py-4" />
                        </div>

                        <Separator className="bg-white/10" />

                        <div className="space-y-4">
                          <Label className="text-white/80">Verhaltens-Flags</Label>
                          <div className="grid gap-3">
                            {[
                              { label: "Vorschau vor jeder Änderung erzwingen", checked: true, desc: "Sicherheits-Check aktiv" },
                              { label: "Dateinamen normalisieren", checked: true, desc: "Entfernt Sonderzeichen & Leerzeichen" },
                              { label: "Leere Ordner automatisch entfernen", checked: false, desc: "Hält die Struktur schlank" },
                            ].map((item, i) => (
                              <div
                                key={i}
                                className="flex items-start space-x-4 rounded-xl border border-white/5 bg-black/30 p-4 transition-colors hover:bg-black/50"
                              >
                                <Switch id={`switch-${i}`} defaultChecked={item.checked} className="mt-0.5 data-[state=checked]:bg-primary" />
                                <div className="space-y-1">
                                  <Label htmlFor={`switch-${i}`} className="text-sm font-medium leading-none text-white cursor-pointer">
                                    {item.label}
                                  </Label>
                                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-6">
                      <Card className="bg-gradient-to-b from-primary/10 to-transparent border-primary/20 backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                           <BrainCircuit className="size-32 text-primary" />
                        </div>
                        <CardHeader>
                          <CardDescription className="text-primary">Echtzeit-Analyse</CardDescription>
                          <CardTitle className="text-xl text-white">Laufender Scan</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 relative z-10">
                          <div>
                            <div className="mb-2 flex justify-between text-sm">
                              <span className="text-muted-foreground font-medium flex items-center gap-2">
                                <Loader2 className="size-3.5 animate-spin text-primary" /> Strukturiere Daten...
                              </span>
                              <span className="text-primary font-bold">43%</span>
                            </div>
                            <Progress value={43} className="h-2 bg-black/50" indicatorClassName="bg-gradient-to-r from-primary to-accent" />
                          </div>
                          
                          <div className="space-y-3 bg-black/40 border border-white/5 rounded-xl p-4">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Details</p>
                            {[
                              { text: "142 Dateien gefunden", icon: FileCog },
                              { text: "12 Projekte erkannt", icon: FolderTree },
                              { text: "3 Namens-Konflikte", icon: Shield, warning: true },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center gap-3 text-sm">
                                <item.icon className={`size-4 ${item.warning ? "text-amber-500" : "text-primary"}`} />
                                <span className={item.warning ? "text-white/90" : "text-white/70"}>{item.text}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Button className="w-full h-12 shadow-lg shadow-primary/20 group">
                            <Settings2 className="mr-2 size-4 group-hover:rotate-90 transition-transform" />
                            Einstellungen sichern
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="bg-white/[0.02] border-white/5 backdrop-blur-md">
                         <CardContent className="p-6">
                            <div className="flex gap-4 items-start">
                              <div className="grid size-10 place-items-center rounded-full bg-blue-500/10 text-blue-400 shrink-0 mt-1">
                                <History className="size-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-1">Letztes Event</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  Agent hat erfolgreich 45 Dateien sortiert und 12 neue Ordner angelegt.
                                </p>
                                <Button variant="link" className="px-0 text-primary h-auto mt-2 text-xs">Log ansehen &rarr;</Button>
                              </div>
                            </div>
                         </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="rules" className="focus-visible:outline-none focus-visible:ring-0">
                  <Card className="bg-white/[0.02] border-white/10 backdrop-blur-md">
                    <CardHeader>
                      <CardDescription className="text-primary">Regel-Editor</CardDescription>
                      <CardTitle className="text-xl text-white">Logik-Bausteine</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 md:grid-cols-2">
                      {[
                        ["Dateinamen-Format", "{Kunde}_{Datum}_{Typ}_{OriginalName}", "Namenskonventionen"],
                        ["Hierarchie-Tiefe", "Maximal 4 Ebenen (Kunde/Jahr/Monat/Typ)", "Struktur-Limits"],
                        ["Sicherheits-Zone", "Finanz-Dokumente immer in verschlüsselten Bereich", "Data Security"],
                        ["Archivierungs-Trigger", "Dateien älter als 2 Jahre automatisch verschieben", "Lifecyle"],
                      ].map(([title, text, tag]) => (
                        <div key={title} className="group rounded-xl border border-white/5 bg-black/40 p-5 hover:border-primary/30 hover:bg-black/60 transition-all cursor-pointer">
                          <div className="flex justify-between items-center mb-3">
                            <div>
                               <p className="font-semibold text-white group-hover:text-primary transition-colors">{title}</p>
                               <span className="text-[10px] text-muted-foreground uppercase">{tag}</span>
                            </div>
                            <Settings2 className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="preview" className="focus-visible:outline-none focus-visible:ring-0">
                  <Card className="bg-white/[0.02] border-white/10 backdrop-blur-md">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardDescription className="text-primary">Ziele-Struktur</CardDescription>
                        <CardTitle className="text-xl text-white">Vorschau der Änderungen</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">Bereit zum Anwenden</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-black/50 border border-white/5 rounded-xl p-4 mt-4 font-mono text-xs">
                        {[
                          { path: "Google Drive / Root", type: "folder", root: true },
                          { path: "Kunden", type: "folder", indent: 1 },
                          { path: "Katherine-Smith", type: "folder", indent: 2 },
                          { path: "2024_Website_Relaunch", type: "folder", indent: 3 },
                          { path: "briefing-notes-v2.docx", type: "file", indent: 4, isNew: true },
                          { path: "Assets", type: "folder", indent: 3 },
                          { path: "logo_final_transparent.png", type: "file", indent: 4, isNew: true },
                          { path: "Finanzen", type: "folder", indent: 2 },
                          { path: "RE_2024_APRIL_KUNDE_01.pdf", type: "file", indent: 3, isNew: true },
                          { path: "Archiv", type: "folder", root: true },
                          { path: "Unsicher (Bitte prüfen)", type: "folder", indent: 1, warning: true },
                          { path: "unbenanntes_bild_123.jpg", type: "file", indent: 2, warning: true },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center py-2 px-3 rounded-md hover:bg-white/5 transition-colors cursor-default ${item.root ? 'mt-4 border-t border-white/5 pt-4 first:mt-0 first:border-0 first:pt-0 font-bold' : ''}`}
                            style={{ paddingLeft: `${(item.indent || 0) * 1.5 + 0.75}rem` }}
                          >
                            <span className="mr-2 opacity-50 text-muted-foreground">
                              {item.indent ? '└' : ''}
                            </span>
                            {item.type === 'folder' ? (
                               <FolderTree className={`size-4 mr-2 ${item.warning ? 'text-amber-400' : 'text-blue-400'}`} />
                            ) : (
                               <FileCog className={`size-4 mr-2 ${item.warning ? 'text-amber-400' : 'text-muted-foreground'}`} />
                            )}
                            <span className={`${item.warning ? 'text-amber-100' : (item.root ? 'text-white' : 'text-white/80')}`}>
                              {item.path}
                            </span>
                            {item.isNew && (
                               <Badge className="ml-auto bg-green-500/20 text-green-400 border-none h-5 px-1.5 text-[10px]">NEU</Badge>
                            )}
                             {item.warning && (
                               <Badge className="ml-auto bg-amber-500/20 text-amber-400 border-none h-5 px-1.5 text-[10px]">PRÜFEN</Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sources" className="focus-visible:outline-none focus-visible:ring-0">
                   <Card className="bg-white/[0.02] border-white/10 backdrop-blur-md">
                    <CardHeader>
                      <CardDescription className="text-primary">Cloud-Verbindungen</CardDescription>
                      <CardTitle className="text-xl text-white">Deine Datenquellen</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                       {[
                         { name: "Google Drive", user: "alex@example.com", status: "Connected", icon: Cloud, color: "text-blue-400" },
                         { name: "Microsoft OneDrive", user: "alex.test@work.com", status: "Connected", icon: Cloud, color: "text-sky-400" },
                         { name: "Dropbox", user: "Nicht verbunden", status: "Disconnected", icon: Cloud, color: "text-muted-foreground" },
                       ].map((source, i) => (
                         <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/40">
                            <div className="flex items-center gap-4">
                               <div className={`grid size-10 place-items-center rounded-xl bg-white/5 ${source.color}`}>
                                  <source.icon className="size-5" />
                               </div>
                               <div>
                                  <p className="font-medium text-white">{source.name}</p>
                                  <p className="text-xs text-muted-foreground">{source.user}</p>
                               </div>
                            </div>
                            <div className="flex items-center gap-3">
                               <Badge variant="outline" className={cn(source.status === "Connected" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-white/5 text-muted-foreground border-white/10")}>
                                  {source.status}
                               </Badge>
                               <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                                  <Settings2 className="size-4" />
                                </Button>
                            </div>
                         </div>
                       ))}
                       <Button variant="outline" className="w-full border-dashed border-white/10 hover:border-primary/50 bg-transparent text-muted-foreground hover:text-primary">
                          + Neue Datenquelle hinzufügen
                       </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="focus-visible:outline-none focus-visible:ring-0">
                   <Card className="bg-white/[0.02] border-white/10 backdrop-blur-md">
                    <CardHeader>
                      <CardDescription className="text-primary">Datenschutz & Zugriff</CardDescription>
                      <CardTitle className="text-xl text-white">Sicherheitseinstellungen</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       <div className="grid gap-4">
                          {[
                            { title: "End-zu-End Verschlüsselung", desc: "Alle Metadaten werden lokal verschlüsselt.", active: true },
                            { title: "Zwei-Faktor-Authentifizierung", desc: "Zusätzlicher Schutz für Cloud-Zugriffe.", active: true },
                            { title: "Aktivitäts-Logging", desc: "Jede Änderung des Agenten wird protokolliert.", active: true },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/40">
                               <div>
                                  <p className="font-medium text-white">{item.title}</p>
                                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                               </div>
                               <Switch defaultChecked={item.active} className="data-[state=checked]:bg-primary" />
                            </div>
                          ))}
                       </div>
                       
                       <Separator className="bg-white/10" />
                       
                       <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                          <div className="flex gap-3">
                             <Shield className="size-5 text-amber-500 shrink-0" />
                             <div>
                                <p className="text-sm font-bold text-amber-200">Sicherheits-Audit empfohlen</p>
                                <p className="text-xs text-amber-200/70 mt-1">Du hast 3 Ordner mit öffentlichen Freigaben. Der Agent empfiehlt diese zu prüfen.</p>
                                <Button variant="link" className="p-0 h-auto text-amber-500 text-xs mt-2">Jetzt prüfen &rarr;</Button>
                             </div>
                          </div>
                       </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>
        </ScrollArea>
      </section>
    </main>
  );
}
