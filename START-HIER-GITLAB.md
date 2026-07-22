# PCC PREP ASSIST intern über GitLab bereitstellen

Diese Fassung benötigt weder Google Drive noch Google Apps Script. GitLab speichert den Projektstand, prüft jede Änderung und veröffentlicht die App über GitLab Pages.

## Voraussetzungen

- Ein leeres internes GitLab-Projekt
- Eine verfügbare GitLab-Runner-Umgebung
- GitLab Pages ist auf der Firmeninstanz aktiviert
- Du darfst Dateien in das Projekt pushen und die Pages-Einstellungen ändern

Wenn links unter `Deploy` kein Punkt `Pages` vorhanden ist, muss die interne GitLab-Administration Pages zuerst freischalten.

## 1. Projekt in GitLab anlegen

1. In GitLab `New project` auswählen.
2. `Create blank project` auswählen.
3. Als Namen zum Beispiel `PCC PREP ASSIST` eintragen.
4. Sichtbarkeit auf `Internal` oder `Private` setzen.
5. Das Projekt ohne automatisch erzeugte README-Datei anlegen.

Empfehlung: `Private` verwenden und nur das PCC-Team beziehungsweise eine passende GitLab-Gruppe als Mitglieder hinzufügen. `Internal` ist nur sinnvoll, wenn wirklich jede intern angemeldete Person die App sehen darf.

## 2. Dateien hochladen

ZIP vollständig entpacken. Anschließend im entpackten Projektordner ein Terminal öffnen und die Befehle ausführen, die GitLab unter `Code` beziehungsweise `Clone` für ein vorhandenes lokales Verzeichnis anzeigt.

Typischer Ablauf:

```bash
git init
git branch -M main
git remote add origin GITLAB_REPOSITORY_URL
git add .
git commit -m "PCC PREP ASSIST 4.0.0"
git push -u origin main
```

`GITLAB_REPOSITORY_URL` muss durch die Clone-URL deines internen Projekts ersetzt werden. Kein Force-Push verwenden.

## 3. Pipeline kontrollieren

1. In GitLab `Build` > `Pipelines` öffnen.
2. Die Pipeline muss grün abgeschlossen sein.
3. Der Job `pages` prüft die Fachlogik, baut die App und veröffentlicht nur die benötigten Website-Dateien.

Falls der Job dauerhaft auf `Pending` steht, fehlt ein nutzbarer GitLab Runner. Falls das Container-Image `node:22-alpine` nicht geladen werden darf, muss in `.gitlab-ci.yml` der Name eines intern freigegebenen Node-Images eingetragen werden.

## 4. Interne App-Adresse öffnen

Nach erfolgreicher Pipeline:

1. `Deploy` > `Pages` öffnen.
2. Die dort angezeigte HTTPS-Adresse aufrufen.
3. Prüfen, ob in der App `v4.0.0` angezeigt wird.
4. Unter `Dokumente` mehrere Dateien testweise öffnen.
5. Unter `Kontakt` die Google-Maps-Karte prüfen.

Die Pages-Adresse bleibt bei späteren Updates gleich.

## 5. Zugriff absichern

Unter `Settings` > `General` > `Visibility, project features, permissions`:

- `Only project members`: nur eingetragene Projektmitglieder dürfen die App öffnen.
- `Everyone with access`: bei einem internen Projekt dürfen intern angemeldete GitLab-Nutzer zugreifen.
- Niemals `Everyone` verwenden, wenn die Inhalte nicht öffentlich sein dürfen.

Wenn die Auswahl für Pages-Zugriff nicht vorhanden ist, muss die GitLab-Administration die Pages-Zugriffskontrolle aktivieren.

## Spätere Updates

Jeder Commit auf dem Standard-Branch startet automatisch eine neue Prüfung und Veröffentlichung. Der Link ändert sich nicht. Die installierte PWA erkennt eine neue Versionsnummer und aktualisiert sich bei bestehender Verbindung automatisch.

Die konkrete Inhaltspflege steht in `INHALTE-AKTUALISIEREN.md`.

