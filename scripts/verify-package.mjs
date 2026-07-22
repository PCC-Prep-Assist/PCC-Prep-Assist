import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { DOCUMENTS } from "../assets/core.js";

const root = new URL("../", import.meta.url);
const localDocumentPaths = DOCUMENTS.filter((document) => !document.external).map(
  (document) => decodeURIComponent(document.href),
);
const required = [
  ".gitlab-ci.yml",
  "START-HIER-GITLAB.md",
  "INHALTE-AKTUALISIEREN.md",
  "index.html",
  "UPDATE-APP.html",
  "manifest.json",
  "service-worker.js",
  "version.json",
  "Exhibition Mode Pro.pdf",
  "ExhibitionMode_for pure_0.3_SW 0102.pdf",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  ...localDocumentPaths,
];

await Promise.all(required.map((path) => access(new URL(path, root), constants.R_OK)));

const [html, updatePage, versionJson, serviceWorker, packageJson, gitlabCi, readme] = await Promise.all([
  readFile(new URL("index.html", root), "utf8"),
  readFile(new URL("UPDATE-APP.html", root), "utf8"),
  readFile(new URL("version.json", root), "utf8").then(JSON.parse),
  readFile(new URL("service-worker.js", root), "utf8"),
  readFile(new URL("package.json", root), "utf8").then(JSON.parse),
  readFile(new URL(".gitlab-ci.yml", root), "utf8"),
  readFile(new URL("README.md", root), "utf8"),
]);
const assertions = [
  [html.includes("data-bundled-styles"), "Bundled CSS is missing"],
  [html.includes("data-bundled-app"), "Bundled JavaScript is missing"],
  [!html.includes('href="assets/styles.css"'), "index.html still depends on external CSS"],
  [!html.includes('src="assets/app.js"'), "index.html still depends on external app.js"],
  [html.includes('value="C503"'), "C503 option is missing"],
  [html.includes('value="C703"'), "C703 option is missing"],
  [html.includes('value="E801"'), "E801 option is missing"],
  [html.includes('<option value="ISE NEO">ISE NEO</option>'), "ISE NEO option is missing"],
  [html.includes('<option value="ISE">ISE</option>'), "ISE option is missing"],
  [html.includes('["Board", "PMC2"]'), "Classic ISE PMC2 guidance is missing"],
  [html.includes('["Setting", "6 ON"]'), "Classic ISE exhibition setting is missing"],
  [html.includes('["Board", "SW1"]'), "E801 exhibition board must be SW1"],
  [!html.includes("SET ID PCB"), "Outdated E801 board value is still present"],
  [!html.includes("Daniel Shumejko"), "Removed owner name is still present"],
  [html.includes('data-language="de"'), "German language switch is missing"],
  [html.includes('data-language="en"'), "English language switch is missing"],
  [DOCUMENTS.length === 27, "The document library must contain 27 unique entries"],
  [localDocumentPaths.length === 26, "The GitLab package must contain 26 local documents"],
  [DOCUMENTS.filter((document) => document.category === "Exhibition Mode").length === 2, "Exhibition Mode documents were duplicated"],
  [DOCUMENTS.every((document) => Array.isArray(document.folder) && document.folder.length > 0), "A document folder path is missing"],
  [html.includes('id="documentFolderGrid"'), "Document folder browser is missing"],
  [html.includes('id="documentBreadcrumb"'), "Document breadcrumb is missing"],
  [html.includes('class="contact-map-frame"'), "Embedded Google Maps frame is missing"],
  [html.includes('https://maps.google.com/maps?'), "Direct Google Maps embed endpoint is missing"],
  [html.includes('Wormser%20Strasse%20111%2C%2067590%20Monsheim'), "Embedded Google Maps address is incorrect"],
  [updatePage.includes('key.startsWith("pcc-prep-")'), "PCC cache reset is missing"],
  [html.includes("Offline after opening"), "Document offline label is incorrect"],
  [!html.includes("Available offline"), "Old document offline label is still present"],
  [versionJson.version === packageJson.version, "version.json and package.json versions differ"],
  [html.includes(`v${versionJson.version}`), "HTML version does not match version.json"],
  [serviceWorker.includes(`const VERSION = "${versionJson.version}"`), "Service worker version does not match version.json"],
  [serviceWorker.includes("networkOnlyVersion"), "Version endpoint is not network-only"],
  [html.includes("UPDATE_CHECK_INTERVAL = 60_000"), "Automatic update polling is missing"],
  [gitlabCi.includes("pages: true"), "GitLab Pages deployment is missing"],
  [gitlabCi.includes("npm run check"), "GitLab validation step is missing"],
  [gitlabCi.includes("- public"), "GitLab Pages artifact path is missing"],
  [!readme.includes("github.io"), "README still contains a public GitHub Pages link"],
];

for (const [condition, message] of assertions) {
  if (!condition) throw new Error(message);
}

console.log("Package verification passed.");
