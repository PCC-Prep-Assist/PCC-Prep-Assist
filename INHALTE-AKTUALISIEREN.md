# Inhalte und Dokumente in GitLab aktualisieren

Änderungen können über `Code` > `Web IDE` oder lokal mit Git vorgenommen werden. Für fachliche Änderungen ist ein eigener Branch mit Merge Request sinnvoll, damit eine zweite Person die Änderung prüfen kann.

## Bestehendes Dokument ersetzen

1. Die neue Datei muss denselben Dateinamen und denselben Ordnerpfad wie die bisherige Datei behalten.
2. Datei im Repository ersetzen.
3. Commit erstellen.
4. Pipeline abwarten.

Der sichtbare Dokumenteintrag muss nicht geändert werden. Die neue Datei wird mit der nächsten Pages-Veröffentlichung ausgeliefert.

## Neues Dokument hinzufügen

1. Datei in einen passenden Unterordner unter `documents/` hochladen.
2. In `assets/core.js` den Bereich `DOCUMENTS` öffnen.
3. Vor dem Ende der Liste einen neuen Eintrag ergänzen.

Beispiel:

```javascript
{
  id: "c503-wartung",
  folder: ["pro", "c503"],
  title: "C503 maintenance",
  titleDe: "C503 Wartung",
  description: "Maintenance reference for the C503 module.",
  descriptionDe: "Wartungsreferenz für das C503-Modul.",
  href: "documents/pro/c503/c503-wartung.pdf",
  system: "cobas pro",
  category: "Preparation",
  categoryDe: "Vorbereitung",
  type: "PDF",
  size: "2.4 MB",
},
```

Wichtig:

- `id` muss eindeutig sein.
- `href` muss exakt zum Repository-Pfad passen.
- Erlaubte bestehende Hauptordner sind unter anderem `pro`, `pure`, `leveling` und `modification`.
- Bei einem externen Link zusätzlich `external: true` setzen.
- Die Pipeline schlägt fehl, wenn eine eingetragene lokale Datei fehlt.

## Dokument entfernen

Zuerst den zugehörigen Eintrag aus `DOCUMENTS` in `assets/core.js` entfernen, danach die Datei löschen. Beide Änderungen gemeinsam committen.

## Sichtbare Texte ändern

| Inhalt | Datei |
|---|---|
| Statische Seitentexte und Kontaktangaben | `index.template.html` |
| Deutsche Übersetzungen und Bedienhinweise | `assets/app.source.js` im Bereich `DE_TRANSLATIONS` |
| Dokumenttitel und Dokumentbeschreibungen | `assets/core.js` im Bereich `DOCUMENTS` |
| Modulwerte, Schalterlogik, Connectoren und Montageangaben | `assets/core.js` |
| Layout, Farben und Darstellung | `assets/styles.css` |

Nach Änderungen niemals nur die erzeugte `index.html` bearbeiten. Die Pipeline erzeugt sie erneut aus `index.template.html`, `assets/styles.css`, `assets/core.js` und `assets/app.source.js`.

## Versionsnummer erhöhen

Bei jedem veröffentlichten Inhalts- oder Funktionsupdate die Versionsnummer erhöhen, zum Beispiel von `4.0.0` auf `4.0.1`.

Diese Stellen müssen übereinstimmen:

- `package.json`
- `version.json`
- `assets/core.js` bei `APP_META.version`
- `service-worker.js` bei `VERSION`
- `index.template.html` in der sichtbaren Versionsanzeige
- `UPDATE-APP.html`

Zusätzlich das aktuelle Datum in `version.json`, `assets/core.js` und `index.template.html` eintragen. Die Pipeline prüft die wichtigsten Übereinstimmungen und stoppt die Veröffentlichung bei Fehlern.

## Sichere Arbeitsweise

1. Neuen Branch anlegen.
2. Datei oder Text ändern.
3. Commit erstellen.
4. Pipeline muss grün sein.
5. Merge Request prüfen lassen.
6. In den Standard-Branch mergen.
7. Pages-Link öffnen und die geänderte Stelle kontrollieren.

