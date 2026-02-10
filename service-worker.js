/* PCC Prep Assist - Service Worker
   Goal:
   - Offline-capable (cache-first for app shell)
   - On every launch the page triggers registration.update()
   - Store a shared "data stand" based on server Last-Modified of index.html (consistent across devices)
   - Provide GET_CACHE_STATUS to the page for the toast + watermark
*/

const CACHE_NAME = "pcc-prep-assist-cache";
const META_KEY = "__pcc_meta__";

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

async function writeMeta(updatedIso){
  const cache = await caches.open(CACHE_NAME);
  const body = JSON.stringify({ updated: updatedIso });
  await cache.put(META_KEY, new Response(body, {
    headers: { "Content-Type": "application/json" }
  }));
}

async function readMeta(){
  const cache = await caches.open(CACHE_NAME);
  const res = await cache.match(META_KEY);
  if(!res) return { updated: null };
  try{
    return await res.json();
  }catch(e){
    return { updated: null };
  }
}

/**
 * Try to get a consistent "data stand" timestamp from the server.
 * GitHub Pages usually returns a Last-Modified header (same for all clients).
 * If not available, fall back to current time.
 */
async function updateMetaFromNetwork(){
  try{
    const resp = await fetch("./index.html", { cache: "no-store" });
    const lastMod = resp.headers.get("last-modified");
    // Prefer server last-modified because it's shared across devices
    const updated = lastMod ? new Date(lastMod).toISOString() : new Date().toISOString();
    await writeMeta(updated);
    return updated;
  }catch(e){
    // offline: keep existing meta if available
    const existing = await readMeta();
    if(existing && existing.updated) return existing.updated;
    const updated = new Date().toISOString();
    await writeMeta(updated);
    return updated;
  }
}

async function notifyClients(type, payload){
  const clientsList = await self.clients.matchAll({ includeUncontrolled: true, type: "window" });
  for(const c of clientsList){
    try{ c.postMessage({ type, payload }); }catch(e){}
  }
}

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "SKIP_WAITING") {
    self.skipWaiting();
    return;
  }
  if (data.type === "GET_CACHE_STATUS") {
    event.waitUntil((async ()=>{
      const meta = await readMeta();
      event.source?.postMessage({ type: "CACHE_STATUS", payload: meta });
    })());
  }
});

self.addEventListener("install", (event) => {
  event.waitUntil((async ()=>{
    const cache = await caches.open(CACHE_NAME);

    // Always refresh the app shell in the cache on install (so updates really land)
    for(const url of PRECACHE_URLS){
      try{
        const req = new Request(url, { cache: "reload" });
        const res = await fetch(req);
        if(res && (res.ok || res.type === "opaque")) await cache.put(url, res.clone());
      }catch(e){
        // ignore (offline during install) - existing cache may still be used
      }
    }

    // Update meta stamp
    await updateMetaFromNetwork();

    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async ()=>{
    // (single cache name) - no old cache cleanup needed unless you introduce versions later
    await self.clients.claim();

    // Refresh meta again on activate, then notify clients (so toast can say "updated")
    const updated = await updateMetaFromNetwork();
    await notifyClients("CACHE_UPDATED", { updated });
  })());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin
  if (url.origin !== self.location.origin) return;

  // Cache-first strategy for everything (offline priority)
  event.respondWith((async ()=>{
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req, { ignoreSearch: true });
    if(cached) return cached;

    try{
      const fresh = await fetch(req);
      if (fresh && fresh.ok) cache.put(req, fresh.clone());
      return fresh;
    }catch(e){
      // If navigation fails and we have index.html cached, serve it as fallback
      if(req.mode === "navigate"){
        const fallback = await cache.match("./index.html");
        if(fallback) return fallback;
      }
      throw e;
    }
  })());
});
