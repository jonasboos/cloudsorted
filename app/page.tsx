import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  DatabaseZap,
  FolderTree,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import { InteractiveCloudDemo } from "@/components/landing/interactive-cloud-demo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const workflow = [
  {
    title: "Cloud verbinden",
    text: "Google Drive oder OneDrive auswaehlen und den Agenten im Testmodus starten.",
    icon: Cloud,
  },
  {
    title: "Dateien verstehen",
    text: "Der KI-Agent liest Namen, Typen und Projektkontext und bildet daraus Cluster.",
    icon: DatabaseZap,
  },
  {
    title: "Ordnung vorschlagen",
    text: "Neue Ordner, bessere Dateinamen und Kundenbereiche werden als Vorschau gezeigt.",
    icon: FolderTree,
  },
];

const features = [
  "Automatische Ordnerstruktur",
  "Intelligente Dateinamen",
  "Kundenordner und Projektphasen",
  "Regeln fuer sensible Dateien",
  "Agent-Profil im Dashboard",
  "Keine echten Aktionen im Prototyp",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(79,140,255,0.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.14),transparent_26%),linear-gradient(180deg,#070a12_0%,#0a1020_48%,#070a12_100%)]" />

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl border border-primary/30 bg-primary/15 text-primary transition-transform hover:scale-105">
              <Sparkles className="size-5" />
            </span>
            <span className="text-lg font-semibold tracking-normal">
              CloudSorted
            </span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#demo" className="hover:text-foreground">
              Demo
            </a>
            <a href="#produkt" className="hover:text-foreground">
              Produkt
            </a>
            <a href="#story" className="hover:text-foreground">
              Story
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/login">
                Beta testen
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <section
        id="demo"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-24"
      >
        <div className="animate-rise flex flex-col justify-center">
          <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 text-sm text-muted-foreground">
            <Bot className="size-4 text-primary" />
            KI-Agent fuer Freelancer und Selbststaendige
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-foreground sm:text-7xl">
            Deine Cloud. Automatisch sortiert.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            CloudSorted ist ein Kickstarter-artiges Schuelerprojekt fuer alle,
            die Google Drive aufraeumen und ihren Cloud Speicher organisieren
            wollen, ohne jede Kundendatei manuell zu verschieben.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#demo">
                Direkt testen
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/dashboard">Dashboard Preview</Link>
            </Button>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Drive & OneDrive", "Agent-Regeln", "Nur Demo-Frontend"].map(
              (item, index) => (
                <div
                  key={item}
                  className="animate-rise rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-card"
                  style={{ animationDelay: `${120 + index * 80}ms` }}
                >
                  <CheckCircle2 className="mb-3 size-4 text-primary" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <InteractiveCloudDemo />
      </section>

      <section id="produkt" className="border-y border-border bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Produkt
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
              Ein Agent, der Ordnung entwirft, bevor etwas passiert.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {workflow.map((item, index) => (
              <Card
                key={item.title}
                className="animate-rise bg-background/55 transition-all hover:-translate-y-1 hover:border-primary/45"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <CardHeader>
                  <span className="mb-4 grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="leading-6">
                    {item.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <CheckCircle2 className="size-4 text-primary" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="story"
        className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Kickstarter Storyline
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal">
            Weniger Suchen. Mehr Kundenergebnisse.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="transition-all hover:-translate-y-1 hover:border-primary/45">
            <CardHeader>
              <CardDescription>Persona</CardDescription>
              <CardTitle>Katherine Smith, 29</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              Selbststaendige Webdesignerin mit vielen parallelen Kunden,
              verstreuten Assets und staendig neuen Feedback-Dateien.
            </CardContent>
          </Card>
          <Card className="transition-all hover:-translate-y-1 hover:border-primary/45">
            <CardHeader>
              <CardDescription>Versprechen</CardDescription>
              <CardTitle>Cloud Speicher organisieren</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              CloudSorted macht Dateichaos sichtbar und zeigt, wie eine
              KI-gestuetzte Ordnung professioneller wirken kann.
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
        <Card>
          <CardHeader>
            <CardDescription>FAQ</CardDescription>
            <CardTitle>Wichtig fuer den Prototyp</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {[
              ["Welche Clouds?", "Google Drive und OneDrive sind vorgesehen."],
              ["Kostenlos?", "Ja, diese Version ist nur ein Schulkonzept."],
              ["Werden Dateien geloescht?", "Nein, es ist nur ein Frontend-Prototyp."],
              ["Wie funktioniert der Login?", "Jede Eingabe fuehrt in die Demo."],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted"
              >
                <p className="font-medium">{question}</p>
                <p className="mt-2 text-sm text-muted-foreground">{answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-border px-5 py-8 text-sm text-muted-foreground sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-medium text-foreground">CloudSorted</p>
          <p className="max-w-4xl leading-6">
            Diese Website wurde im Rahmen eines Schuelerprojekts erstellt und
            dient ausschliesslich zu Bildungszwecken. Es werden keine
            tatsaechlichen Dienstleistungen oder Produkte angeboten oder verkauft.
          </p>
          <LockKeyhole className="size-4 text-primary" />
        </div>
      </footer>
    </main>
  );
}
