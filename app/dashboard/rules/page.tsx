"use client";

import { useState } from "react";
import { Plus, Trash2, ToggleLeft, ToggleRight, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Rule {
  id: number;
  name: string;
  trigger: string;
  action: string;
  target: string;
  active: boolean;
}

export default function RulesPage() {
  const [rules, setRules] = useState<Rule[]>([
    {
      id: 0,
      name: "Duplikate löschen",
      trigger: "Datei ist ein exaktes Duplikat (Inhaltsabgleich)",
      action: "Dauerhaft löschen",
      target: "-",
      active: true,
    },
    {
      id: 1,
      name: "Rechnungs-Sortierung",
      trigger: "Dateiname enthält 'Rechnung' oder 'Invoice'",
      action: "Verschieben in Ordner",
      target: "/Finanzen/Rechnungen",
      active: true,
    },
    {
      id: 2,
      name: "Screenshots Löschen",
      trigger: "Dateiname beginnt mit 'Screenshot' und älter als 30 Tage",
      action: "Dauerhaft löschen",
      target: "-",
      active: true,
    },
    {
      id: 3,
      name: "Foto-Archivierung",
      trigger: "Dateityp ist '.png', '.jpg' oder '.heic'",
      action: "Verschieben in Ordner",
      target: "/Fotos/Import",
      active: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newRuleName, setNewRuleName] = useState("");
  const [newRuleTrigger, setNewRuleTrigger] = useState("");
  const [newRuleAction, setNewRuleAction] = useState("Verschieben in Ordner");
  const [newRuleTarget, setNewRuleTarget] = useState("");

  const toggleRule = (id: number) => {
    setRules((prev) =>
      prev.map((rule) => (rule.id === id ? { ...rule, active: !rule.active } : rule))
    );
  };

  const deleteRule = (id: number) => {
    setRules((prev) => prev.filter((rule) => rule.id !== id));
  };

  const handleAddRule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRuleName || !newRuleTrigger) return;

    const newRule: Rule = {
      id: Date.now(),
      name: newRuleName,
      trigger: newRuleTrigger,
      action: newRuleAction,
      target: newRuleAction === "Dauerhaft löschen" ? "-" : newRuleTarget || "/Hauptverzeichnis",
      active: true,
    };

    setRules((prev) => [...prev, newRule]);
    setShowAddForm(false);
    setNewRuleName("");
    setNewRuleTrigger("");
    setNewRuleAction("Verschieben in Ordner");
    setNewRuleTarget("");
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-10 sm:mb-16">
        <h1 className="text-[clamp(2.75rem,15vw,4.5rem)] sm:text-[4vw] font-black uppercase leading-[0.85] tracking-tighter mb-4 sm:mb-6">
          Regeln.
        </h1>
        <p className="text-base sm:text-xl font-bold uppercase max-w-2xl text-gray-500">
          Regeln erstellen, aktivieren und verwalten für vollautomatische Datei-Sortierung.
        </p>
      </div>

      <div className="mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-6 sm:mb-8">Automatisierungs-Pipeline</h2>
        
        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          <div className="border-4 border-black p-5 sm:p-8 bg-white flex flex-col justify-between min-h-40">
            <div>
              <span className="font-black text-xs uppercase text-gray-400 block mb-2">Schritt 1 • Auslöser</span>
              <h3 className="font-black uppercase text-2xl leading-none">Neue Datei</h3>
              <p className="font-bold text-xs uppercase text-gray-500 mt-4 leading-normal">
                Datei wird in dein Google Drive oder OneDrive hochgeladen.
              </p>
            </div>
          </div>
          
          <div className="border-4 border-black p-5 sm:p-8 bg-black text-white flex flex-col justify-between min-h-40">
            <div>
              <span className="font-black text-xs text-gray-400 block mb-2 uppercase">Schritt 2 • Verarbeitung</span>
              <h3 className="font-black uppercase text-2xl leading-none text-white">Regel-Prüfung</h3>
              <p className="font-bold text-xs text-gray-300 mt-4 uppercase leading-normal">
                {rules.filter((r) => r.active).length} aktive Regeln werden in Echtzeit auf den Dateipfad angewendet.
              </p>
            </div>
          </div>

          <div className="border-4 border-black p-5 sm:p-8 bg-white flex flex-col justify-between min-h-40">
            <div>
              <span className="font-black text-xs uppercase text-gray-400 block mb-2">Schritt 3 • Ergebnis</span>
              <h3 className="font-black uppercase text-2xl leading-none">Sortierung</h3>
              <p className="font-bold text-xs uppercase text-gray-500 mt-4 leading-normal">
                Die Datei wird automatisch in den Zielordner verschoben oder unwiderruflich gelöscht.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto border-4 border-black p-5 sm:p-8 bg-white relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowAddForm(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-black transition-colors"
            >
              <X className="size-6" />
            </button>
            
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-8 pr-10">Regel hinzufügen</h2>
            
            <form onSubmit={handleAddRule} className="space-y-6">
              <div>
                <label className="block text-sm font-black uppercase mb-2">Regel-Name</label>
                <Input
                  value={newRuleName}
                  onChange={(e) => setNewRuleName(e.target.value)}
                  placeholder="Z.B. RECHNUNG-SORTIERUNG"
                  required
                  className="border-4 border-black rounded-none h-12 px-4 font-bold placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2">Wenn (Trigger-Bedingung)</label>
                <Input
                  value={newRuleTrigger}
                  onChange={(e) => setNewRuleTrigger(e.target.value)}
                  placeholder="Z.B. DATEINAME ENTHÄLT 'RECHNUNG'"
                  required
                  className="border-4 border-black rounded-none h-12 px-4 font-bold placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black uppercase mb-2">Dann (Aktion)</label>
                  <select
                    value={newRuleAction}
                    onChange={(e) => setNewRuleAction(e.target.value)}
                    className="w-full border-4 border-black bg-white rounded-none h-12 px-4 font-bold uppercase text-sm focus:outline-none"
                  >
                    <option value="Verschieben in Ordner">Verschieben in Ordner</option>
                    <option value="Dauerhaft löschen">Dauerhaft löschen</option>
                    <option value="In Archiv packen">In Archiv packen</option>
                  </select>
                </div>

                {newRuleAction !== "Dauerhaft löschen" && (
                  <div>
                    <label className="block text-sm font-black uppercase mb-2">Ziel-Ordner</label>
                    <Input
                      value={newRuleTarget}
                      onChange={(e) => setNewRuleTarget(e.target.value)}
                      placeholder="Z.B. /FINANZEN/RECHNUNGEN"
                      className="border-4 border-black rounded-none h-12 px-4 font-bold placeholder:text-gray-400"
                    />
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black rounded-none h-14 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2"
              >
                <Save className="size-5" /> Regel Speichern
              </Button>
            </form>
          </div>
        </div>
      )}

      <div className="border-4 border-black p-5 sm:p-8 bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">Aktive Regeln</h2>
          {!showAddForm && (
            <Button
              onClick={() => setShowAddForm(true)}
              className="w-full sm:w-auto bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black rounded-none h-12 px-6 font-black uppercase tracking-widest text-xs flex items-center gap-2"
            >
              <Plus className="size-4" /> Neue Regel
            </Button>
          )}
        </div>

        {rules.length === 0 ? (
          <div className="border-4 border-dashed border-black p-12 text-center">
            <p className="font-black uppercase text-xl mb-2">Keine Regeln gefunden</p>
            <p className="font-bold text-sm uppercase text-gray-500">Klicke oben auf &quot;Neue Regel&quot;, um eine zu erstellen.</p>
          </div>
        ) : (
          <div className="divide-y-4 divide-black border-t-4 border-black">
            {rules.map((rule) => (
              <div key={rule.id} className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="font-black text-lg sm:text-xl uppercase tracking-tight break-words">{rule.name}</h3>
                    <span
                      className={`w-fit px-2 py-1 text-xs font-black uppercase border-2 ${
                        rule.active
                          ? "bg-green-100 text-green-800 border-green-800"
                          : "bg-gray-100 text-gray-800 border-gray-400"
                      }`}
                    >
                      {rule.active ? "Aktiv" : "Inaktiv"}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-2 text-xs sm:text-sm font-bold uppercase mt-4">
                    <div>
                      <span className="text-gray-500 block text-xs">Bedingung:</span>
                      <span>{rule.trigger}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-xs">Aktion & Ziel:</span>
                      <span>
                        {rule.action} {rule.target !== "-" && `➔ ${rule.target}`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 sm:justify-start">
                  <button
                    onClick={() => toggleRule(rule.id)}
                    className="flex items-center gap-1 font-black uppercase text-xs hover:text-black transition-colors"
                  >
                    {rule.active ? (
                      <ToggleRight className="size-10 text-black" />
                    ) : (
                      <ToggleLeft className="size-10 text-gray-400 hover:text-black" />
                    )}
                  </button>
                  <Button
                    onClick={() => deleteRule(rule.id)}
                    className="bg-white text-black hover:bg-black hover:text-white border-4 border-black rounded-none h-12 px-5 font-black uppercase tracking-widest text-xs flex items-center gap-2"
                  >
                    <Trash2 className="size-4" /> Löschen
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
