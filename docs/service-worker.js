const m = [
  "/_app/immutable/assets/_layout-5c688d2e.css",
  "/_app/immutable/chunks/2-792ef5a4.js",
  "/_app/immutable/chunks/1-7dbe878f.js",
  "/_app/immutable/components/pages/offline/_page.svelte-ee204f4d.js",
  "/_app/immutable/chunks/0-dabbc661.js",
  "/_app/immutable/components/error.svelte-1f1b8675.js",
  "/_app/immutable/components/pages/_page.svelte-6498e312.js",
  "/_app/immutable/chunks/3-f19e9eff.js",
  "/_app/immutable/chunks/singletons-71d3e28b.js",
  "/_app/immutable/chunks/index-f0049a99.js",
  "/_app/immutable/start-73fe3ac5.js",
  "/_app/immutable/components/pages/_layout.svelte-cc263426.js"
], h = [
  "/favicon-old.png",
  "/favicon.png",
  "/icons/maskable_icon_x128.png",
  "/icons/maskable_icon_x192.png",
  "/icons/maskable_icon_x384.png",
  "/icons/maskable_icon_x48.png",
  "/icons/maskable_icon_x512.png",
  "/icons/maskable_icon_x72.png",
  "/icons/maskable_icon_x96.png",
  "/manifest.json",
  "/personal.css",
  "/robots.txt"
], o = "1676040589093", a = self, i = `cache${o}`, p = m.concat(h), r = new Set(p);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(i).then((e) => e.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const t of e)
        t !== i && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function u(s) {
  const e = await caches.open(`offline${o}`);
  try {
    const t = await fetch(s);
    return e.put(s, t.clone()), t;
  } catch (t) {
    const c = await e.match(s);
    if (c)
      return c;
    throw t;
  }
}
a.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && r.has(e.pathname), l = s.request.cache === "only-if-cached" && !n;
  t && !c && !l && s.respondWith(
    (async () => n && await caches.match(s.request) || u(s.request))()
  );
});
