# CloudSorted SEO Dokumentation

Diese Datei erklärt, wie SEO in diesem Projekt implementiert wurde und wie es gewartet werden sollte.

## Implementierte SEO-Features

### 1. Metadaten-Management
Wir nutzen das integrierte **Metadata API** von Next.js im App Router.
- **Globales Layout (`app/layout.tsx`)**: Definiert Standard-Titel, Beschreibungen, Keywords und `metadataBase`.
- **OpenGraph & Twitter Cards**: Automatische Generierung von Vorschau-Tags für soziale Netzwerke inklusive Vorschaubildern.
- **Canonical URLs**: Vermeidung von Duplicate Content durch explizite Canonical-Links.
- **Viewport-Konfiguration**: Optimiert für mobile Endgeräte und Browser-Theming.

### 2. Dynamische SEO-Dateien
Anstatt statischer Dateien im `public`-Ordner nutzen wir dynamische Generatoren:
- **`app/sitemap.ts`**: Generiert automatisch eine `sitemap.xml` mit allen relevanten Unterseiten.
- **`app/robots.ts`**: Steuert den Zugriff von Crawlern. Wichtige Bereiche wie das `/dashboard` sind für Suchmaschinen gesperrt (`disallow`).
- **`app/manifest.ts`**: Erstellt ein Web App Manifest für PWA-Features und bessere Browser-Integration.

### 3. Strukturierte Daten (JSON-LD)
In der `app/layout.tsx` wird ein JSON-LD Skript injiziert, das Suchmaschinen hilft, die Anwendung als `SoftwareApplication` zu verstehen. Dies kann zu "Rich Snippets" in den Suchergebnissen führen.

### 4. Seitenspezifisches SEO
- **Dashboard Schutz**: Das Dashboard hat ein eigenes `layout.tsx` mit `robots: { index: false }`, um sicherzustellen, dass private Nutzerdaten nicht in Suchmaschinen erscheinen.
- **Login-Optimierung**: Die Login-Seite hat optimierte Titel und Beschreibungen für eine bessere Click-Through-Rate.

### 5. On-Page Optimierung
- **Alt-Tags**: Alle Bilder verfügen über aussagekräftige Alt-Attribute zur Barrierefreiheit und Indexierung.
- **Semantisches HTML**: Korrekte Verwendung von `h1`-`h6` Tags für eine klare Informationshierarchie.
- **Sprachauszeichnung**: Das `html`-Tag ist auf `lang="de"` gesetzt.

## Wartung & Best Practices

1. **Neue Seiten**: Wenn eine neue öffentliche Seite hinzugefügt wird, sollte sie in der `app/sitemap.ts` ergänzt werden.
2. **Bilder**: Neue Bilder im `public/assets` Ordner sollten immer mit passenden Alt-Tags eingebunden werden.
3. **Keywords**: Die Keywords in `app/layout.tsx` sollten regelmäßig auf Relevanz geprüft werden.
4. **Validierung**: Nach größeren Änderungen sollte `npm run build` ausgeführt werden, um sicherzustellen, dass die Metadaten korrekt generiert werden.

---
*Dokumentation erstellt am 05. Mai 2026*
