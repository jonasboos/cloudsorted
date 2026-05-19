import { Bell, CreditCard, Mail, Palette, UserRound } from "lucide-react";

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
import { Switch } from "@/components/ui/switch";
import { PageHeader, StatusPill } from "../_components/page-section";

export default function EinstellungenPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Settings"
        title="Einstellungen ohne Ablenkung."
        description="Profil, Workspace und Demo-Präferenzen sind als klare Frontend-Formulare dargestellt."
        action={<StatusPill tone="slate">Keine Backend-Funktion</StatusPill>}
      />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-white/10 bg-white/[0.035]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <UserRound className="size-5 text-blue-200" />
              Profil
            </CardTitle>
            <CardDescription>Statische Formularfelder für die Demo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="CloudSorted Demo" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" defaultValue="demo@cloudsorted.app" />
            </div>
            <Button className="w-full">Änderungen anzeigen</Button>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {[
            [Bell, "Benachrichtigungen", "Wichtige Hinweise und Review-Items anzeigen", true],
            [Mail, "Wochenbericht", "Zusammenfassung der erkannten Ordnungschancen", true],
            [Palette, "Kompakte Ansicht", "Dichtere Listen für wiederkehrende Nutzung", false],
            [CreditCard, "Plan-Hinweise", "Billing-Karte nur als statisches Element", false],
          ].map(([Icon, title, detail, enabled]) => {
            const SettingIcon = Icon as typeof Bell;

            return (
              <Card key={title as string} className="border-white/10 bg-white/[0.035]">
                <CardContent className="flex items-center gap-4 p-5">
                  <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200">
                    <SettingIcon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">{title as string}</p>
                    <p className="mt-1 text-xs text-slate-500">{detail as string}</p>
                  </div>
                  <Switch defaultChecked={enabled as boolean} />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
