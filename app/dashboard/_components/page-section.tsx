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
    <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
          {title}
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
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
    blue: "bg-white/[0.04] text-zinc-300 border-white/[0.08]",
    emerald: "bg-white/[0.04] text-zinc-300 border-white/[0.08]",
    amber: "bg-white/[0.04] text-zinc-300 border-white/[0.08]",
    violet: "bg-white/[0.04] text-zinc-300 border-white/[0.08]",
    rose: "bg-white/[0.04] text-zinc-300 border-white/[0.08]",
  }[tone];

  return (
    <Card className="rounded-md border-white/[0.07] bg-white/[0.025] shadow-none">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-500">{title}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
          </div>
          <span className={cn("grid size-9 place-items-center rounded-md border", toneClass)}>
            <Icon className="size-5" />
          </span>
        </div>
        <p className="mt-4 text-xs leading-5 text-zinc-600">{detail}</p>
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
    blue: "border-white/[0.08] bg-white/[0.03] text-zinc-300",
    emerald: "border-white/[0.08] bg-white/[0.03] text-zinc-300",
    amber: "border-white/[0.08] bg-white/[0.03] text-zinc-300",
    violet: "border-white/[0.08] bg-white/[0.03] text-zinc-300",
    rose: "border-white/[0.08] bg-white/[0.03] text-zinc-300",
    slate: "border-white/[0.08] bg-white/[0.03] text-zinc-300",
  }[tone];

  return <Badge className={cn("border px-2.5 py-1 font-normal", classes)}>{children}</Badge>;
}
