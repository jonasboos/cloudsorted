"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Bot,
  ChevronRight,
  Database,
  Eye,
  FileCog,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Settings2,
  Shield,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Uebersicht",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Status, Score und Aktivitaet",
  },
  {
    title: "Agent",
    href: "/dashboard/agent",
    icon: Bot,
    description: "Steuerung und Laufzeit",
  },
  {
    title: "Regeln",
    href: "/dashboard/regeln",
    icon: FileCog,
    description: "Sortierlogik und Naming",
  },
  {
    title: "Datenquellen",
    href: "/dashboard/datenquellen",
    icon: Database,
    description: "Drive, OneDrive und Speicher",
  },
  {
    title: "Vorschau",
    href: "/dashboard/vorschau",
    icon: Eye,
    description: "Geplante Struktur pruefen",
  },
  {
    title: "Sicherheit",
    href: "/dashboard/sicherheit",
    icon: Shield,
    description: "Privacy und Freigaben",
  },
  {
    title: "Einstellungen",
    href: "/dashboard/einstellungen",
    icon: Settings2,
    description: "Profil und Benachrichtigungen",
  },
];

const recentScans = [
  { name: "Google Drive Root", detail: "1.284 Dateien", state: "ok" },
  { name: "OneDrive Kunden", detail: "312 Dateien", state: "ok" },
  { name: "Archiv 2025", detail: "7 Hinweise", state: "warn" },
];

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[296px] shrink-0 border-r border-white/10 bg-[#070912] lg:flex lg:flex-col">
      <div className="px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center overflow-hidden rounded-lg border border-white/10 bg-white">
            <Image
              src="/assets/logo_mark.png"
              alt="CloudSorted"
              width={40}
              height={40}
              className="object-cover"
            />
          </span>
          <span>
            <span className="block text-base font-semibold tracking-tight text-white">
              CloudSorted
            </span>
            <span className="block text-xs text-slate-400">Demo Workspace</span>
          </span>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-4">
        <nav className="grid gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors",
                  active
                    ? "border border-blue-400/30 bg-blue-500/12 text-white"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white",
                )}
              >
                <span
                  className={cn(
                    "grid size-8 place-items-center rounded-md border transition-colors",
                    active
                      ? "border-blue-400/30 bg-blue-400/15 text-blue-200"
                      : "border-white/10 bg-white/[0.03] text-slate-500 group-hover:text-slate-200",
                  )}
                >
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium leading-none">
                    {item.title}
                  </span>
                  <span className="mt-1 block truncate text-xs text-slate-500">
                    {item.description}
                  </span>
                </span>
                {active ? <ChevronRight className="size-4 text-blue-200" /> : null}
              </Link>
            );
          })}
        </nav>

        <Separator className="my-6 bg-white/10" />

        <section className="px-2 pb-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Letzte Scans
            </p>
            <Badge className="border-emerald-400/20 bg-emerald-400/10 text-emerald-200">
              Live
            </Badge>
          </div>
          <div className="grid gap-3">
            {recentScans.map((scan) => (
              <div
                key={scan.name}
                className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-3"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "size-2 rounded-full",
                      scan.state === "ok" ? "bg-emerald-400" : "bg-amber-400",
                    )}
                  />
                  <p className="truncate text-sm font-medium text-slate-200">
                    {scan.name}
                  </p>
                </div>
                <p className="mt-1 text-xs text-slate-500">{scan.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollArea>

      <div className="p-4">
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-violet-300" />
            <p className="text-sm font-semibold text-white">Frontend Demo</p>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Alle Anzeigen sind statisch. Es werden keine Cloud-Daten gelesen oder
            veraendert.
          </p>
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  const pathname = usePathname();
  const activePage =
    navItems.find((item) => isActive(pathname, item.href)) ?? navItems[0];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070912]/85 px-4 py-3 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="size-5" />
        </Button>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Dashboard
          </p>
          <h1 className="truncate text-lg font-semibold text-white">
            {activePage.title}
          </h1>
        </div>

        <div className="ml-auto hidden w-full max-w-sm items-center md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
            <Input
              placeholder="Dateien, Regeln oder Quellen suchen..."
              className="h-10 rounded-lg border-white/10 bg-white/[0.04] pl-9 text-sm"
            />
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="size-5" />
              <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-rose-400 ring-2 ring-[#070912]" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Benachrichtigungen</TooltipContent>
        </Tooltip>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="size-10 rounded-lg p-0 ring-1 ring-white/10"
            >
              <Avatar className="size-9">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <p className="text-sm font-medium">CloudSorted Demo</p>
              <p className="text-xs font-normal text-muted-foreground">
                demo@cloudsorted.app
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/einstellungen">Einstellungen</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/login" className="text-rose-300 focus:text-rose-300">
                <LogOut className="mr-2 size-4" />
                Ausloggen
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-medium",
                active
                  ? "border-blue-400/30 bg-blue-500/15 text-white"
                  : "border-white/10 bg-white/[0.03] text-slate-400",
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#050711] text-foreground">
      <div className="flex min-h-screen">
        <Sidebar />
        <section className="min-w-0 flex-1">
          <Topbar />
          <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
