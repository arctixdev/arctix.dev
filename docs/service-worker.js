const h = [
  "/_app/immutable/assets/_layout-8609f9cb.css",
  "/_app/immutable/chunks/1-e8faf203.js",
  "/_app/immutable/components/pages/_page.svelte-28cf13f3.js",
  "/_app/immutable/chunks/2-7dd1f857.js",
  "/_app/immutable/components/pages/blog/_page.svelte-6e7b0093.js",
  "/_app/immutable/chunks/0-f929b3fa.js",
  "/_app/immutable/chunks/singletons-b9bb3064.js",
  "/_app/immutable/components/error.svelte-3822045b.js",
  "/_app/immutable/chunks/3-ba63b56f.js",
  "/_app/immutable/chunks/index-f5c3c3e4.js",
  "/_app/immutable/start-09851671.js",
  "/_app/immutable/components/pages/_layout.svelte-615f7621.js"
], r = [
  "/favicon.png",
  "/manifest.json",
  "/robots.txt"
], o = "1671311762056", a = self, i = `cache${o}`, p = h.concat(r), m = new Set(p);
a.addEventListener("install", (t) => {
  t.waitUntil(
    caches.open(i).then((e) => e.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (t) => {
  t.waitUntil(
    caches.keys().then(async (e) => {
      for (const s of e)
        s !== i && await caches.delete(s);
      a.clients.claim();
    })
  );
});
async function u(t) {
  const e = await caches.open(`offline${o}`);
  try {
    const s = await fetch(t);
    return e.put(t, s.clone()), s;
  } catch (s) {
    const c = await e.match(t);
    if (c)
      return c;
    throw s;
  }
}
a.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET" || t.request.headers.has("range"))
    return;
  const e = new URL(t.request.url), s = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && m.has(e.pathname), l = t.request.cache === "only-if-cached" && !n;
  s && !c && !l && t.respondWith(
    (async () => n && await caches.match(t.request) || u(t.request))()
  );
});
