import { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}

export function StatCard({
  title,
  value,
  detail,
  icon: Icon,
  tone = "blue",
}: {
  title: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  tone?: "blue" | "emerald" | "amber" | "violet" | "rose";
}) {
  const toneClass = {
    blue: "bg-blue-400/10 text-blue-200 border-blue-400/20",
    emerald: "bg-emerald-400/10 text-emerald-200 border-emerald-400/20",
    amber: "bg-amber-400/10 text-amber-200 border-amber-400/20",
    violet: "bg-violet-400/10 text-violet-200 border-violet-400/20",
    rose: "bg-rose-400/10 text-rose-200 border-rose-400/20",
  }[tone];

  return (
    <Card className="border-white/10 bg-white/[0.035]">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">{title}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
          </div>
          <span className={cn("grid size-10 place-items-center rounded-lg border", toneClass)}>
            <Icon className="size-5" />
          </span>
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">{detail}</p>
      </CardContent>
    </Card>
  );
}

export function StatusPill({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "emerald" | "amber" | "violet" | "rose" | "slate";
}) {
  const classes = {
    blue: "border-blue-400/20 bg-blue-400/10 text-blue-200",
    emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
    amber: "border-amber-400/20 bg-amber-400/10 text-amber-200",
    violet: "border-violet-400/20 bg-violet-400/10 text-violet-200",
    rose: "border-rose-400/20 bg-rose-400/10 text-rose-200",
    slate: "border-white/10 bg-white/[0.04] text-slate-300",
  }[tone];

  return <Badge className={cn("border px-2.5 py-1", classes)}>{children}</Badge>;
}
