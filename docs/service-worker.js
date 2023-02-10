const m = [
  "/_app/immutable/chunks/0-96f757a5.js",
  "/_app/immutable/chunks/1-8d1b0f4d.js",
  "/_app/immutable/chunks/2-134e6398.js",
  "/_app/immutable/chunks/3-7d983fed.js",
  "/_app/immutable/chunks/animationSetup-804870ba.js",
  "/_app/immutable/chunks/index-910a69f4.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/chunks/singletons-e2dd5076.js",
  "/_app/immutable/chunks/unwriteEffect-0f63106d.js",
  "/_app/immutable/chunks/writeAndUnwriteText-d6ed65e8.js",
  "/_app/immutable/chunks/writeEffect-bece77e5.js",
  "/_app/immutable/start-c4969975.js",
  "/_app/immutable/components/error.svelte-cb57a1f5.js",
  "/_app/immutable/chunks/cascade-73a25d0a.js",
  "/_app/immutable/chunks/concurrent-027c024c.js",
  "/_app/immutable/chunks/loop-4f70f3c4.js",
  "/_app/immutable/chunks/loopOnce-ed515471.js",
  "/_app/immutable/chunks/loopRandom-397ff417.js",
  "/_app/immutable/chunks/scramble-67eeee62.js",
  "/_app/immutable/assets/_layout-62c96fbd.css",
  "/_app/immutable/components/pages/_layout.svelte-6ac904bb.js",
  "/_app/immutable/assets/_page-fff2e19a.css",
  "/_app/immutable/components/pages/_page.svelte-27181eb4.js",
  "/_app/immutable/components/pages/offline/_page.svelte-36965c0c.js"
], u = [
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
], o = "1676044819996", t = self, i = `cache${o}`, p = m.concat(u), h = new Set(p);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(i).then((s) => s.addAll(p)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const a of s)
        a !== i && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function r(e) {
  const s = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return s.put(e, a.clone()), a;
  } catch (a) {
    const c = await s.match(e);
    if (c)
      return c;
    throw a;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), a = s.protocol.startsWith("http"), c = s.hostname === self.location.hostname && s.port !== self.location.port, n = s.host === self.location.host && h.has(s.pathname), l = e.request.cache === "only-if-cached" && !n;
  a && !c && !l && e.respondWith(
    (async () => n && await caches.match(e.request) || r(e.request))()
  );
});
