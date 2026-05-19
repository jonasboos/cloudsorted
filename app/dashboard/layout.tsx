import type { Metadata } from "next";
import { DashboardShell } from "./_components/dashboard-shell";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Verwalte deine Cloud-Struktur und Agenten-Einstellungen.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
