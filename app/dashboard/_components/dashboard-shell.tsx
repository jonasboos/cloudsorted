"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Cloud,
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

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[300px] border-r-4 border-black bg-white lg:flex lg:flex-col">
      <div className="h-20 px-6 border-b-4 border-black flex items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl font-black tracking-tighter uppercase">
            CloudSorted
          </span>
        </Link>
      </div>

      <div className="flex-1 p-6">
        <nav className="grid gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
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

      <div className="p-6 border-t-4 border-black">
        <Link href="/login" className="flex items-center gap-4 px-4 py-4 font-bold uppercase text-sm transition-colors border-4 border-transparent hover:border-black text-red-600 hover:bg-red-50 hover:text-red-700">
          <LogOut className="size-5" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

function Topbar() {
  const pathname = usePathname();
  const activePage = navItems.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`)) ?? navItems[0];

  return (
    <header className="sticky top-0 z-30 border-b-4 border-black bg-white px-6 h-20 flex items-center justify-between lg:justify-end">
      <div className="flex items-center gap-4 lg:hidden">
        <Button variant="outline" size="icon" className="border-2 border-black rounded-none">
          <Menu className="size-5" />
        </Button>
        <span className="text-xl font-black uppercase tracking-tighter">
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
  return (
    <main className="h-screen overflow-hidden bg-white text-black selection:bg-black selection:text-white">
      <div className="h-full lg:pl-[300px]">
        <Sidebar />
        <section className="flex h-full min-w-0 flex-col">
          <Topbar />
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="p-6 sm:p-12">
              {children}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
