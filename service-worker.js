const CACHE_NAME = "pcc-prep-assist-en-v2";
async function readCacheMeta() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const res = await cache.match("__cache_meta__");
    if (!res) return {};
    return await res.json();
  } catch (e) {
    return {};
  }
}

async function writeCacheMeta(meta) {
  const cache = await caches.open(CACHE_NAME);
  await cache.put("__cache_meta__", new Response(JSON.stringify(meta), {
    headers: { "Content-Type": "application/json" }
  }));
}

async function broadcast(type, payload) {
  const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  for (const c of clients) c.postMessage({ type, payload });
}

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./Exhibition%20Mode%20Pro.pdf",
  "./ExhibitionMode_for%20pure_0.3_SW%200102.pdf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});


self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // same-origin only
  if (url.origin !== self.location.origin) return;
  if (req.method !== "GET") return;

  const isHTML = req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html");

  event.respondWith((async () => {
    try {
      // HTML: bypass HTTP cache to really get newest (helps on iOS / GitHub Pages)
      const res = await fetch(req, isHTML ? { cache: "no-store" } : undefined);

      // Update cache with latest response
      const cache = await caches.open(CACHE_NAME);
      await cache.put(req, res.clone());

      // If HTML, update the "data stand" based on Last-Modified (consistent across devices)
      if (isHTML) {
        const meta = await readCacheMeta();
        const lastMod = res.headers.get("last-modified");
        const updated = lastMod ? new Date(lastMod).toISOString() : new Date().toISOString();
        const prev = meta.updated;

        // Always store when we last checked, and store updated when it changes
        const nextMeta = { ...meta, checked: new Date().toISOString(), updated };
        await writeCacheMeta(nextMeta);

        if (prev && prev !== updated) {
          await broadcast("CACHE_UPDATED", { updated });
        }
      }

      return res;
    } catch (e) {
      // Offline fallback
      const cached = await caches.match(req);
      if (cached) return cached;

      if (isHTML) {
        const fallback = await caches.match("./index.html");
        if (fallback) return fallback;
      }
      throw e;
    }
  })());
});

self.addEventListener("message", (event) => {
  const data = event.data || {};

  if (data.type === "SKIP_WAITING") {
    self.skipWaiting();
    return;
  }

  if (data.type === "CLEAR_CACHES") {
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
        const updated = new Date().toISOString();
        await writeCacheMeta({ checked: updated, updated });
        await broadcast("CACHE_UPDATED", { updated });
      } catch (e) {}
    })();
    return;
  }

  if (data.type === "GET_CACHE_STATUS") {
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        const res = await cache.match("__cache_meta__");
        const text = res ? await res.text() : "";
        const payload = text ? JSON.parse(text) : {};
        if (event.source) event.source.postMessage({ type: "CACHE_STATUS", payload });
      } catch (e) {
        if (event.source) event.source.postMessage({ type: "CACHE_STATUS", payload: { error: true } });
      }
    })();
  }
});
