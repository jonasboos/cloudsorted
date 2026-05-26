"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Cloud,
  X,
  FolderTree,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Google Drive",
    href: "/dashboard/drive",
    icon: Cloud,
  },
  {
    title: "OneDrive",
    href: "/dashboard/onedrive",
    icon: Cloud,
  },
  {
    title: "Rules",
    href: "/dashboard/rules",
    icon: FolderTree,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings2,
  },
];

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-[300px] lg:border-r-4 lg:border-black">
      <div className="h-16 px-4 border-b-4 border-black flex items-center justify-between lg:h-20 lg:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tighter uppercase lg:text-3xl">
            CloudSorted
          </span>
        </Link>
      </div>

      <div className="flex-1 p-4 lg:p-6">
        <nav className="grid gap-3 lg:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-4 px-4 py-4 font-bold uppercase text-sm transition-colors border-4",
                  active
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-transparent hover:border-black",
                )}
              >
                <Icon className="size-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t-4 border-black lg:p-6">
        <Link href="/login" onClick={onNavigate} className="flex items-center gap-4 px-4 py-4 font-bold uppercase text-sm transition-colors border-4 border-transparent hover:border-black text-red-600 hover:bg-red-50 hover:text-red-700">
          <LogOut className="size-5" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const activePage = navItems.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`)) ?? navItems[0];

  return (
    <header className="sticky top-0 z-30 border-b-4 border-black bg-white px-4 h-16 flex items-center justify-between lg:h-20 lg:px-6 lg:justify-end">
      <div className="flex min-w-0 items-center gap-3 lg:hidden">
        <Button variant="outline" size="icon" className="border-2 border-black rounded-none shrink-0" onClick={onMenuClick} aria-label="Menü öffnen">
          <Menu className="size-5" />
        </Button>
        <span className="truncate text-lg font-black uppercase tracking-tighter">
          {activePage?.title || "CloudSorted"}
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <span className="text-sm font-bold uppercase">Demo User</span>
        <div className="size-10 bg-black text-white flex items-center justify-center font-black">
          DU
        </div>
      </div>
    </header>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main className="h-screen overflow-hidden bg-white text-black selection:bg-black selection:text-white">
      <div className="h-full lg:pl-[300px]">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Menü schließen"
              className="absolute inset-0 bg-black/55"
              onClick={() => setMobileNavOpen(false)}
            />
            <div className="relative h-full w-full bg-white">
              <button
                type="button"
                aria-label="Menü schließen"
                onClick={() => setMobileNavOpen(false)}
                className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center border-2 border-black bg-white"
              >
                <X className="size-5" />
              </button>
              <Sidebar onNavigate={() => setMobileNavOpen(false)} />
            </div>
          </div>
        )}
        <section className="flex h-full min-w-0 flex-col">
          <Topbar onMenuClick={() => setMobileNavOpen(true)} />
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="p-4 sm:p-12">
              {children}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
