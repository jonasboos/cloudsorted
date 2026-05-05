import Link from "next/link";
import { ArrowRight, Cloud, KeyRound, Mail, ShieldCheck, Sparkles } from "lucide-react";

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

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-background text-foreground lg:grid-cols-[0.95fr_1.05fr]">
      <section className="hidden border-r border-border bg-card/30 p-10 lg:flex lg:flex-col lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl border border-primary/30 bg-primary/15 text-primary">
            <Sparkles className="size-5" />
          </span>
          <span className="text-lg font-semibold">CloudSorted</span>
        </Link>
        <div>
          <p className="max-w-lg text-5xl font-semibold leading-tight tracking-normal">
            Einloggen, Agent ansehen, Regeln testen.
          </p>
          <p className="mt-5 max-w-md text-muted-foreground">
            Der Login ist absichtlich ein Demo-Flow. Jede E-Mail, jeder Name und
            jeder Button führt in das Dashboard.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {["Keine echten Accounts", "Keine echten Cloud-Zugriffe", "Nur Frontend"].map(
            (item) => (
              <div key={item} className="flex items-center gap-3">
                <ShieldCheck className="size-4 text-primary" />
                {item}
              </div>
            ),
          )}
        </div>
      </section>

      <section className="flex items-center justify-center px-5 py-10 sm:px-8">
        <Card className="w-full max-w-md bg-card/80">
          <CardHeader>
            <CardDescription>Demo Login</CardDescription>
            <CardTitle className="text-3xl">Willkommen zurück</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Button asChild variant="outline" className="justify-start">
                <Link href="/dashboard">
                  <Mail />
                  Mit E-Mail weiter
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-start">
                <Link href="/dashboard">
                  <Cloud />
                  Mit Google Drive weiter
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-start">
                <Link href="/dashboard">
                  <KeyRound />
                  Mit Demo-Account weiter
                </Link>
              </Button>
            </div>

            <div className="my-6 h-px bg-border" />

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" placeholder="egal@example.com" type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Passwort</Label>
                <Input id="password" placeholder="beliebig" type="password" />
              </div>
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Einloggen
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
