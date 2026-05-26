"use client";

import { useState } from "react";
import { Save, User, ShieldAlert, Check, RefreshCw, AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  const [name, setName] = useState("Demo User");
  const [email, setEmail] = useState("demo@example.com");
  const [syncFrequency, setSyncFrequency] = useState("Stündlich");
  const [emailReports, setEmailReports] = useState(true);

  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [deleteConfirmationText, setDeleteConfirmationText] = useState("");
  const [accountDeleted, setAccountDeleted] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSavedSuccess(false);

    setTimeout(() => {
      setSaving(false);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }, 1200);
  };

  const handleDeleteAccount = () => {
    if (deleteConfirmationText.toUpperCase() === "LÖSCHEN") {
      setAccountDeleted(true);
    }
  };

  if (accountDeleted) {
    return (
      <div className="max-w-2xl border-4 border-black p-8 sm:p-12 text-center bg-white my-12">
        <ShieldAlert className="size-20 mx-auto text-red-600 mb-6" />
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-4">Konto gelöscht</h1>
        <p className="font-bold uppercase text-sm text-gray-500 mb-8">
          Dein Account wurde erfolgreich aus dem System entfernt. Alle API-Verbindungen wurden getrennt.
        </p>
        <Button
          onClick={() => window.location.href = "/"}
          className="bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black rounded-none h-14 px-8 font-black uppercase tracking-widest text-sm"
        >
          Zur Startseite
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl">
      <div className="mb-16">
        <h1 className="text-[6vw] sm:text-[4vw] font-black uppercase leading-[0.85] tracking-tighter mb-6">
          Einstellungen.
        </h1>
        <p className="text-xl font-bold uppercase max-w-2xl text-gray-500">
          Verwalte deine Profileinstellungen und Automatisierungs-Intervalle.
        </p>
      </div>

      <div className="grid gap-12">
        <div className="border-4 border-black p-8 bg-white">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-2">
            <User className="size-6" /> Profileinstellungen
          </h2>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase mb-2">Dein Name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-4 border-black rounded-none h-12 px-4 font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-2">E-Mail-Adresse</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-4 border-black rounded-none h-12 px-4 font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase mb-2">Bereinigungs-Intervall</label>
              <div className="grid grid-cols-3 border-4 border-black overflow-hidden text-center font-black uppercase text-xs">
                {["Manuell", "Stündlich", "Täglich"].map((freq) => (
                  <button
                    key={freq}
                    type="button"
                    onClick={() => setSyncFrequency(freq)}
                    className={`py-4 transition-colors border-r-4 border-black last:border-r-0 ${
                      syncFrequency === freq ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 py-2">
              <button
                type="button"
                onClick={() => setEmailReports(!emailReports)}
                className={`size-6 border-4 border-black flex items-center justify-center shrink-0 ${
                  emailReports ? "bg-black" : "bg-white"
                }`}
              >
                {emailReports && <Check className="size-4 text-white stroke-[4]" />}
              </button>
              <label
                onClick={() => setEmailReports(!emailReports)}
                className="font-black uppercase text-xs cursor-pointer select-none"
              >
                Sende mir wöchentliche Berichte über aufgeräumten Speicherplatz
              </label>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button
                type="submit"
                disabled={saving}
                className="bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black rounded-none h-14 px-8 font-black uppercase tracking-widest text-sm flex items-center gap-2"
              >
                {saving ? (
                  <>
                    <RefreshCw className="size-4 animate-spin" /> Speichere...
                  </>
                ) : (
                  <>
                    <Save className="size-4" /> Speichern
                  </>
                )}
              </Button>

              {savedSuccess && (
                <span className="text-green-600 font-black uppercase text-xs flex items-center gap-1 animate-fade-in">
                  <Check className="size-4 stroke-[3]" /> Einstellungen gespeichert!
                </span>
              )}
            </div>
          </form>
        </div>

        <div className="border-4 border-red-600 p-8 bg-white">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-red-600 mb-4 flex items-center gap-2">
            <ShieldAlert className="size-6 text-red-600" /> Gefahrenbereich
          </h2>
          <p className="font-bold uppercase text-xs text-gray-500 mb-8 max-w-xl">
            Das Löschen deines Kontos ist endgültig. Alle deine Regeln und Zugriffsrechte werden sofort widerrufen.
          </p>

          <Button
            onClick={() => setShowConfirmDelete(true)}
            className="bg-white text-red-600 hover:bg-red-600 hover:text-white border-4 border-red-600 rounded-none h-12 px-6 font-black uppercase tracking-widest text-xs"
          >
            Konto löschen
          </Button>
        </div>

        {showConfirmDelete && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-md border-4 border-red-600 p-8 bg-white relative shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] animate-in zoom-in-95 duration-200">
              <button
                onClick={() => {
                  setShowConfirmDelete(false);
                  setDeleteConfirmationText("");
                }}
                className="absolute top-6 right-6 text-gray-500 hover:text-black transition-colors"
              >
                <X className="size-6" />
              </button>
              
              <h2 className="text-2xl font-black uppercase tracking-tighter text-red-600 mb-6 flex items-center gap-2">
                <ShieldAlert className="size-6 text-red-600" /> Konto löschen?
              </h2>

              <div className="bg-red-50 border-4 border-red-600 p-6 mb-6 space-y-2 text-red-800 font-bold uppercase text-xs">
                <p className="font-black text-sm">Das Löschen deines Kontos ist endgültig!</p>
                <p className="leading-relaxed">
                  Alle deine Regeln und Zugriffsrechte werden sofort widerrufen. Bitte tippe das Wort <strong>LÖSCHEN</strong> ein.
                </p>
              </div>

              <div className="space-y-4">
                <Input
                  value={deleteConfirmationText}
                  onChange={(e) => setDeleteConfirmationText(e.target.value)}
                  placeholder="LÖSCHEN"
                  className="border-4 border-red-600 rounded-none h-12 px-4 font-black uppercase bg-white w-full focus:ring-0 focus-visible:ring-0"
                />
                <div className="flex gap-4">
                  <Button
                    onClick={handleDeleteAccount}
                    disabled={deleteConfirmationText.toUpperCase() !== "LÖSCHEN"}
                    className="flex-1 bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:hover:bg-red-600 rounded-none h-12 font-black uppercase tracking-widest text-xs"
                  >
                    Bestätigen
                  </Button>
                  <Button
                    onClick={() => {
                      setShowConfirmDelete(false);
                      setDeleteConfirmationText("");
                    }}
                    className="flex-1 bg-white text-black hover:bg-gray-100 border-4 border-black rounded-none h-12 font-black uppercase tracking-widest text-xs"
                  >
                    Abbrechen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
