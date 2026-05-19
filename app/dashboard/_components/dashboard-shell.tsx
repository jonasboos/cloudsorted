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
    title: "Übersicht",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Status, Score und Aktivität",
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
    description: "Geplante Struktur prüfen",
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

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[272px] border-r border-white/[0.07] bg-[#06070b] lg:flex lg:flex-col">
      <div className="px-5 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center overflow-hidden rounded-md bg-white">
            <Image
              src="/assets/logo_mark.png"
              alt="CloudSorted"
              width={40}
              height={40}
              className="object-cover"
            />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-tight text-white">
              CloudSorted
            </span>
            <span className="block text-xs text-zinc-500">Demo Workspace</span>
          </span>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-3">
        <nav className="grid gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
                  active
                    ? "bg-white text-zinc-950"
                    : "text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-100",
                )}
              >
                <span
                  className={cn(
                    "grid size-7 place-items-center rounded-md transition-colors",
                    active
                      ? "bg-zinc-950 text-white"
                      : "text-zinc-500 group-hover:text-zinc-200",
                  )}
                >
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium leading-none">
                    {item.title}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block truncate text-xs",
                      active ? "text-zinc-500" : "text-zinc-600",
                    )}
                  >
                    {item.description}
                  </span>
                </span>
                {active ? <ChevronRight className="size-4 text-zinc-500" /> : null}
              </Link>
            );
          })}
        </nav>

        <Separator className="my-5 bg-white/[0.07]" />

        <section className="px-3 pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-600">
            Status
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">Cloud Scan</span>
              <span className="text-zinc-200">Bereit</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">Review</span>
              <span className="text-zinc-200">7 offen</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">Score</span>
              <span className="text-zinc-200">86%</span>
            </div>
          </div>
        </section>
      </ScrollArea>

      <div className="p-3">
        <div className="rounded-md border border-white/[0.07] bg-white/[0.025] p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-zinc-400" />
            <p className="text-sm font-medium text-white">Frontend Demo</p>
          </div>
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Statische UI. Keine echten Cloud-Aktionen.
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
    <header className="sticky top-0 z-30 border-b border-white/[0.07] bg-[#080910]/85 px-4 py-3 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="size-5" />
        </Button>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
            Dashboard
          </p>
          <h1 className="truncate text-base font-semibold text-white">
            {activePage.title}
          </h1>
        </div>

        <div className="ml-auto hidden w-full max-w-sm items-center md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-600" />
            <Input
              placeholder="Dateien, Regeln oder Quellen suchen..."
              className="h-9 rounded-md border-white/[0.07] bg-white/[0.03] pl-9 text-sm"
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
                  ? "border-white bg-white text-zinc-950"
                  : "border-white/[0.07] bg-white/[0.03] text-zinc-500",
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
    <main className="h-screen overflow-hidden bg-[#080910] text-foreground">
      <div className="h-full lg:pl-[272px]">
        <Sidebar />
        <section className="flex h-full min-w-0 flex-col">
          <Topbar />
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
