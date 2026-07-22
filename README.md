<div align="center">
  <img src="./icons/pcc-logo-original.png" alt="PCC Prep Assist Logo" width="110">

# ⚙️ PCC Prep Assist

**Digitale Arbeitsunterstützung für die Vorbereitung von cobas pro und cobas pure Systemen**

🌐 Interne GitLab-Web-App&nbsp;&nbsp;·&nbsp;&nbsp;📲 Installierbare PWA&nbsp;&nbsp;·&nbsp;&nbsp;📴 Offline nutzbar

Die interne App-Adresse steht im Projekt unter **Deploy > Pages**.
</div>

---

> [!IMPORTANT]
> **PCC Prep Assist unterstützt den Arbeitsablauf, ersetzt jedoch keine freigegebenen Arbeitsanweisungen, Service-Dokumente oder internen Qualitätsvorgaben.**  
> Bei Abweichungen gilt immer das offiziell freigegebene Dokument.

## 🚀 Schnellstart

| Schritt | Aktion |
|---:|---|
| **1️⃣** | Oben über **DE / EN** die gewünschte Sprache auswählen. |
| **2️⃣** | Unter **Konfiguration / Configuration** die Plattform **cobas pro** oder **cobas pure** auswählen. |
| **3️⃣** | Die tatsächlich vorhandenen Module und Positionen eintragen. |
| **4️⃣** | Angezeigte Schalterstellungen und Warnhinweise kontrollieren. |
| **5️⃣** | Die Bereiche **Steckverbinder / Connectors** und **Montage / Assembly** prüfen. |
| **6️⃣** | Angaben vor Arbeitsbeginn mit der realen Gerätekonfiguration abgleichen. |

```text
System auswählen → Module konfigurieren → Schalter prüfen → Connectors prüfen → Assembly prüfen
```

---

## ✨ Was kann PCC Prep Assist?

| Funktion | Beschreibung |
|---|---|
| 🧩 **System konfigurieren** | Module passend zur realen Gerätekonfiguration auswählen. |
| 🎛️ **Schalterstellungen anzeigen** | Relevante und positionsabhängige Einstellungen direkt ablesen. |
| 🔌 **Connectoren prüfen** | Zu trennende Connectoren passend zur Auswahl anzeigen. |
| 🛠️ **Assembly anzeigen** | Benötigte Zusatzteile und Montageschritte aufrufen. |
| 📄 **Dokumente öffnen** | Hinterlegte Referenzdokumente schnell erreichen. |
| ⚠️ **Konfiguration prüfen** | Ungewöhnliche oder möglicherweise falsche Reihenfolgen erkennen. |
| 💾 **Auswahl speichern** | Die letzte Konfiguration bleibt auf dem Gerät gespeichert. |
| 🌓 **Darstellung wechseln** | Zwischen heller und dunkler Ansicht wechseln. |
| 🌐 **Sprache wechseln** | Oberfläche jederzeit zwischen Deutsch und Englisch umschalten. |
| 🔄 **Automatisch aktualisieren** | Bei bestehender Internetverbindung wird regelmäßig auf eine neue Version geprüft und diese automatisch geladen. |
| 📴 **Offline arbeiten** | Nach dem ersten vollständigen Laden ohne Internet nutzbar. |

---

## 🧭 Bereiche der Anwendung

### ⚙️ Configuration

Hier wird das System entsprechend der realen Konfiguration zusammengestellt.

#### cobas pro

- **SSU** ist als Basiseinheit fest enthalten.
- Für die ISE-Position kann ausgewählt werden:
  - kein ISE-Modul,
  - **ISE NEO**,
  - **ISE**.
- Für **AU1 bis AU4** kann jeweils ausgewählt werden:
  - `No module`
  - `C503`
  - `C703`
  - `E801`

> [!TIP]
> Die Auswahl von **AU1 bis AU4** muss der tatsächlichen physischen Reihenfolge des Systems entsprechen.

#### cobas pure

- **SSU** ist fest enthalten.
- **C303** und **E402** werden entsprechend der vorhandenen Konfiguration ausgewählt.

Nach jeder Änderung aktualisiert die Anwendung automatisch:

- die Systemreihenfolge,
- die relevanten Schalterstellungen,
- positionsabhängige Einstellungen,
- Warnungen,
- Connector-Hinweise,
- zusätzliche Montageteile.

Bei Auswahl von **ISE** zeigt die Anwendung zusätzlich:

- ISE Exhibition Mode: Board `PMC2`, Setting `6 ON`,
- SSU: `SW14 = 2`,
- für jede ausgewählte SB: Exhibition Mode `SW14 = 2`.

Bei Auswahl von **ISE NEO** wird für die SSU `SW14 = 4` angezeigt.

---

### 🔌 Connectors

Dieser Bereich zeigt die Connectoren, die für die aktuell ausgewählte Gerätekonfiguration relevant sind.

Die Zahl neben **Connectors** zeigt an, wie viele Hinweise aktuell vorhanden sind.

---

### 🛠️ Assembly

Hier werden zusätzliche Bauteile, Zubehörteile oder Montageschritte angezeigt, die sich aus der aktuellen Konfiguration ergeben.

Die Zahl neben **Assembly** wird automatisch aktualisiert.

---

### 📄 Documents

Hier befinden sich die beiden vorhandenen Exhibition-Mode-Dokumente sowie zusätzliche Referenzen für:

- Nivellierung,
- Modifikationen,
- Schaltereinstellungen,
- Justagen,
- Vorbereitung und trockene Inbetriebnahme,
- **cobas pro** und **cobas pure**.

Die Dokumentbibliothek unterstützt PDF-, PNG-, JPG- und PPTX-Dateien sowie einen externen RDK-Link. Die Inhalte sind in anklickbare Haupt- und Unterordner gegliedert. Über die Pfadnavigation kann jederzeit zu einem übergeordneten Ordner zurückgekehrt werden. Suche und Filter gelten innerhalb des aktuell geöffneten Ordners einschließlich seiner Unterordner.

> [!NOTE]
> Die beiden Exhibition-Mode-PDFs werden direkt offline vorgeladen. Die zusätzlichen Dokumente werden wegen ihrer Gesamtgröße erst nach dem ersten Öffnen zwischengespeichert. Der externe RDK-Link benötigt eine Netzwerkverbindung.

---

### 📍 Contact

Enthält die hinterlegten Kontaktdaten und Standortinformationen des PCC Monsheim sowie eine eingebettete Google-Maps-Karte für die Wormser Straße 111 in 67590 Monsheim. Die Karte und der externe Maps-Link benötigen eine Internetverbindung.

---

## ✅ Konfiguration richtig prüfen

Vor Arbeitsbeginn sollten diese Angaben übereinstimmen:

- ausgewählte Systemfamilie,
- vorhandene Module,
- Position der Module von **AU1 bis AU4**,
- Status und Typ von **ISE / ISE NEO**, **C303** oder **E402**,
- angezeigte physische Systemreihenfolge,
- Schalterstellungen,
- Connector- und Assembly-Hinweise.

> [!WARNING]
> Eine Warnung bedeutet, dass die Anwendung eine ungewöhnliche Reihenfolge oder eine hinterlegte Regelverletzung erkannt hat. Die Konfiguration muss dann vor der weiteren Verwendung geprüft werden.

---

## 🔎 Suche verwenden

Über das Suchfeld oben rechts können Bereiche und Inhalte schnell geöffnet werden.

| Betriebssystem | Tastenkombination |
|---|---|
| Windows | `Strg + K` |
| macOS | `⌘ + K` |
| Suche schließen | `Esc` |

---

## 📲 Als App installieren

PCC Prep Assist kann wie eine normale App auf dem Gerät installiert werden.

### iPhone oder iPad

1. Anwendung in **Safari** öffnen.
2. Auf das **Teilen-Symbol** tippen.
3. **Zum Home-Bildschirm** auswählen.
4. Mit **Hinzufügen** bestätigen.
5. Die App einmal mit Internetverbindung starten.

### Android

1. Anwendung in **Chrome** öffnen.
2. Browsermenü öffnen.
3. **App installieren** oder **Zum Startbildschirm hinzufügen** auswählen.
4. Installation bestätigen.

### Windows oder macOS

1. Anwendung in einem unterstützten Browser öffnen.
2. Oben rechts **Install app** auswählen.
3. Installation bestätigen.

Danach kann PCC Prep Assist wie ein eigenständiges Programm gestartet werden.

---

## 📴 Offline verwenden

Nach dem ersten vollständigen Laden speichert die Anwendung wichtige Bestandteile lokal:

- Benutzeroberfläche,
- Konfigurationslogik,
- Symbole,
- die beiden Exhibition-Mode-PDFs.

Weitere lokale Referenzdokumente werden nach dem ersten Öffnen im Dokumenten-Cache gespeichert.

### Vorbereitung für den Offline-Betrieb

1. Anwendung mit Internetverbindung öffnen.
2. Warten, bis die Oberfläche vollständig geladen ist.
3. Benötigte Dokumente einmal öffnen.
4. Prüfen, ob **Offline ready** angezeigt wird.
5. Danach kann die Anwendung auch ohne Netzwerk genutzt werden.

> [!TIP]
> Nach einer neuen Version die Anwendung einmal online öffnen, damit alle aktualisierten Dateien gespeichert werden.

---

## 🌓 Helle und dunkle Ansicht

Über das Sonne-/Mond-Symbol kann zwischen **Light Mode** und **Dark Mode** gewechselt werden.

Die Auswahl wird automatisch auf dem verwendeten Gerät gespeichert.

Die Oberfläche passt sich an:

- Desktop-PC,
- Tablet,
- Smartphone,
- Hochformat,
- Querformat.

---

## 🛟 Fehlerbehebung

| Problem | Lösung |
|---|---|
| **Seite sieht unformatiert aus** | Seite vollständig neu laden. Unter Windows `Strg + F5`, auf dem Mac `⌘ + Shift + R`. |
| **Ein sehr großes Logo wird angezeigt** | Aktuelle Version verwenden und Browser-Cache vollständig aktualisieren. |
| **Auswahlfelder sind leer** | Browser schließen, erneut öffnen und vollständige Aktualisierung durchführen. |
| **Felder sind nicht anklickbar** | Prüfen, ob JavaScript aktiviert ist und die Datei vollständig entpackt wurde. |
| **Alte Version wird angezeigt** | Anwendung online öffnen, neu laden und eine installierte ältere App gegebenenfalls neu installieren. |
| **PDF öffnet sich offline nicht** | Dokument bei bestehender Internetverbindung einmal öffnen. |
| **Angabe wirkt fachlich falsch** | Arbeit unterbrechen, freigegebenes Referenzdokument prüfen und zuständige Person informieren. |

### Lokale Nutzung aus einem ZIP-Archiv

1. ZIP-Datei vollständig entpacken.
2. Den entpackten Ordner öffnen.
3. `index.html` starten.

> [!CAUTION]
> `index.html` nicht direkt innerhalb des ZIP-Archivs öffnen.

---

## 🔄 Automatische Aktualisierungen

PCC Prep Assist prüft bei bestehender Internetverbindung automatisch auf eine neue Version:

- beim Start der Anwendung,
- sobald die App wieder in den Vordergrund kommt,
- nach Wiederherstellung der Internetverbindung,
- während der Nutzung in regelmäßigen Abständen.

Wird eine neue Version erkannt, lädt die Anwendung sie automatisch und startet neu. Die gespeicherte Gerätekonfiguration bleibt erhalten.

> [!IMPORTANT]
> Ein Update kann nur geladen werden, wenn das Gerät online ist. Während die App vollständig offline ist, bleibt die zuletzt gespeicherte Version aktiv.

### Veröffentlichung einer neuen Version

Ein Commit auf dem Standard-Branch startet die GitLab-Pipeline. Sie prüft, baut und veröffentlicht die Anwendung automatisch über GitLab Pages. `package.json`, `version.json`, `assets/core.js` und `service-worker.js` müssen dieselbe Versionsnummer enthalten.

---

<details>
<summary><strong>🧑‍💻 Hinweise für Bereitstellung und Entwicklung</strong></summary>

### GitLab-Repository bereitstellen

Die vollständige Ersteinrichtung steht in `START-HIER-GITLAB.md`. Die Pipeline-Konfiguration liegt als `.gitlab-ci.yml` direkt im Stammverzeichnis.

Diese Dateien müssen unter anderem direkt im Stammverzeichnis liegen:

```text
.gitlab-ci.yml
index.html
manifest.json
service-worker.js
```

Zusätzlich müssen unter anderem diese Ordner erhalten bleiben:

```text
assets/
icons/
scripts/
tests/
```

### Anwendung bauen

Voraussetzung: aktuelle Node.js-Version.

```bash
npm run build
```

### Alle Prüfungen ausführen

```bash
npm run check
```

### Wichtige Quelldateien

| Datei | Aufgabe |
|---|---|
| `index.template.html` | Grundstruktur der Anwendung |
| `assets/styles.css` | Layout, responsive Ansicht und Animationen |
| `assets/core.js` | Konfigurationsdaten und fachliche Regeln |
| `assets/app.source.js` | Bedienlogik, Darstellung und PWA-Funktionen |
| `service-worker.js` | Offline-Speicherung und automatische Aktualisierungen |
| `version.json` | Online-Prüfung auf die aktuell veröffentlichte Version |
| `tests/core.test.mjs` | Automatisierte Prüfung der Konfigurationslogik |
| `.gitlab-ci.yml` | Automatische Prüfung und Veröffentlichung über GitLab Pages |

</details>

---

## ℹ️ Version

| Information | Stand |
|---|---|
| **Anwendung** | PCC Prep Assist |
| **Version** | 4.0.0 |
| **Plattformen** | cobas pro und cobas pure |
| **Betriebsart** | Browser und Progressive Web App |
| **Offline-Modus** | Unterstützt |

---

<div align="center">

**PCC Prep Assist**  
Schneller konfigurieren. Hinweise übersichtlich prüfen. Arbeitsabläufe digital unterstützen.

</div>
