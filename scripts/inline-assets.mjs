import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const [template, styles, app, logo] = await Promise.all([
  readFile(new URL("index.template.html", root), "utf8"),
  readFile(new URL("assets/styles.css", root), "utf8"),
  readFile(new URL("assets/app.js", root), "utf8"),
  readFile(new URL("icons/pcc-logo.png", root)),
]);

if (!template.includes("<!-- INLINE_STYLES -->")) {
  throw new Error("index.template.html is missing INLINE_STYLES placeholder");
}
if (!template.includes("<!-- INLINE_APP -->")) {
  throw new Error("index.template.html is missing INLINE_APP placeholder");
}

const safeStyles = styles.replaceAll("</style", "<\\/style");
const safeApp = app.replaceAll("</script", "<\\/script");
const logoDataUri = `data:image/png;base64,${logo.toString("base64")}`;
const output = template
  .replaceAll("__PCC_LOGO_DATA_URI__", logoDataUri)
  .replace("<!-- INLINE_STYLES -->", `<style data-bundled-styles>\n${safeStyles}\n</style>`)
  .replace("<!-- INLINE_APP -->", `<script data-bundled-app>\n${safeApp}\n</script>`);

await writeFile(new URL("index.html", root), output, "utf8");
