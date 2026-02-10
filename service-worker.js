const CACHE_NAME = "pcc-prep-assist-cache";

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


self.addEventListener("message", (event) => {
  const data = event.data;
  if (data && (data.type === "SKIP_WAITING" || data === "SKIP_WAITING")) {
    self.skipWaiting();
  }
});

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

  // Cache meta + broadcast
  (async () => {
    try {
      const cache = await caches.open(CACHE_NAME);
      const updated = new Date().toISOString();
      await cache.put("__cache_meta__", new Response(JSON.stringify({ updated }), { headers: { "Content-Type": "application/json" } }));
  
      const allClients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
      for (const c of allClients) {
        c.postMessage({ type: "CACHE_UPDATED", payload: { updated } });
      }
    } catch (e) {}
  })();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      }).catch(() => caches.match("./index.html"));
    })
  );
});


self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "SKIP_WAITING") {
    self.skipWaiting();
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
