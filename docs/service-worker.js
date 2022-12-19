const h = [
  "/_app/immutable/assets/_layout-3a1d9b33.css",
  "/_app/immutable/chunks/3-ba63b56f.js",
  "/_app/immutable/components/pages/blog/_page.svelte-6e7b0093.js",
  "/_app/immutable/chunks/2-7dd1f857.js",
  "/_app/immutable/chunks/0-199c931b.js",
  "/_app/immutable/components/pages/_page.svelte-28cf13f3.js",
  "/_app/immutable/chunks/1-e8faf203.js",
  "/_app/immutable/components/error.svelte-3822045b.js",
  "/_app/immutable/chunks/singletons-b9bb3064.js",
  "/_app/immutable/chunks/index-f5c3c3e4.js",
  "/_app/immutable/start-d1fda194.js",
  "/_app/immutable/components/pages/_layout.svelte-7a73a8f7.js"
], r = [
  "/favicon.png",
  "/manifest.json",
  "/personal.css",
  "/robots.txt"
], o = "1671481002104", a = self, i = `cache${o}`, p = h.concat(r), m = new Set(p);
a.addEventListener("install", (t) => {
  t.waitUntil(
    caches.open(i).then((s) => s.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (t) => {
  t.waitUntil(
    caches.keys().then(async (s) => {
      for (const e of s)
        e !== i && await caches.delete(e);
      a.clients.claim();
    })
  );
});
async function u(t) {
  const s = await caches.open(`offline${o}`);
  try {
    const e = await fetch(t);
    return s.put(t, e.clone()), e;
  } catch (e) {
    const c = await s.match(t);
    if (c)
      return c;
    throw e;
  }
}
a.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET" || t.request.headers.has("range"))
    return;
  const s = new URL(t.request.url), e = s.protocol.startsWith("http"), c = s.hostname === self.location.hostname && s.port !== self.location.port, n = s.host === self.location.host && m.has(s.pathname), l = t.request.cache === "only-if-cached" && !n;
  e && !c && !l && t.respondWith(
    (async () => n && await caches.match(t.request) || u(t.request))()
  );
});
