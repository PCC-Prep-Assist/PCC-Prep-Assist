const VERSION = "4.0.0";
const STATIC_CACHE = `pcc-prep-static-${VERSION}`;
const DOCUMENT_CACHE = `pcc-prep-documents-${VERSION}`;

const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./UPDATE-APP.html",
  "./manifest.json",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/pcc-logo.png",
  "./icons/pcc-logo-original.png",
];

const PRELOADED_DOCUMENTS = [
  "./Exhibition%20Mode%20Pro.pdf",
  "./ExhibitionMode_for%20pure_0.3_SW%200102.pdf",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      precache(STATIC_CACHE, STATIC_ASSETS),
      precache(DOCUMENT_CACHE, PRELOADED_DOCUMENTS),
    ]).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      const isUpgrade = keys.some(
        (key) =>
          key.startsWith("pcc-prep-") &&
          key !== STATIC_CACHE &&
          key !== DOCUMENT_CACHE,
      );

      await Promise.all(
        keys
          .filter(
            (key) =>
              key.startsWith("pcc-prep-") &&
              key !== STATIC_CACHE &&
              key !== DOCUMENT_CACHE,
          )
          .map((key) => caches.delete(key)),
      );

      await self.clients.claim();

      if (isUpgrade) {
        const windows = await self.clients.matchAll({
          type: "window",
          includeUncontrolled: true,
        });
        await Promise.all(
          windows.map((client) =>
            client.navigate(client.url).catch(() => undefined),
          ),
        );
      }
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.endsWith("/version.json")) {
    event.respondWith(networkOnlyVersion(request));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
    return;
  }

  if (
    url.pathname.includes("/documents/") ||
    url.pathname.toLowerCase().endsWith(".pdf")
  ) {
    event.respondWith(cacheFirst(request, DOCUMENT_CACHE));
    return;
  }

  event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
});

async function precache(cacheName, urls) {
  const cache = await caches.open(cacheName);
  await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url, { cache: "reload" });
      if (!response.ok) throw new Error(`Unable to cache ${url}: ${response.status}`);
      await cache.put(url, response);
    }),
  );
}

async function networkOnlyVersion(request) {
  try {
    return await fetch(request, { cache: "no-store" });
  } catch {
    return new Response(JSON.stringify({ version: VERSION, offline: true }), {
      status: 503,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  }
}

async function networkFirstPage(request) {
  try {
    const response = await fetch(request, { cache: "no-store" });
    const type = response.headers.get("content-type") || "";
    if (response.ok && type.includes("text/html")) {
      const cache = await caches.open(STATIC_CACHE);
      await cache.put("./index.html", response.clone());
    }
    return response;
  } catch {
    return (
      (await caches.match(request, { ignoreSearch: true })) ||
      (await caches.match("./index.html")) ||
      Response.error()
    );
  }
}

async function cacheFirst(request, cacheName, expectedType) {
  const cached = await caches.match(request, { ignoreSearch: true });
  if (cached) return cached;

  const response = await fetch(request);
  const type = response.headers.get("content-type") || "";
  if (
    response.ok &&
    response.status === 200 &&
    (!expectedType || type.includes(expectedType))
  ) {
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
  }
  return response;
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreSearch: true });
  const network = fetch(request)
    .then(async (response) => {
      if (response.ok) await cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);

  return cached || (await network) || Response.error();
}
