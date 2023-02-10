const m = [
  "/_app/immutable/chunks/0-0e21e10c.js",
  "/_app/immutable/chunks/1-8d1b0f4d.js",
  "/_app/immutable/chunks/2-26173ec8.js",
  "/_app/immutable/chunks/3-7d983fed.js",
  "/_app/immutable/chunks/animationSetup-804870ba.js",
  "/_app/immutable/chunks/index-910a69f4.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/chunks/singletons-e2dd5076.js",
  "/_app/immutable/chunks/unwriteEffect-0f63106d.js",
  "/_app/immutable/chunks/writeAndUnwriteText-d6ed65e8.js",
  "/_app/immutable/chunks/writeEffect-bece77e5.js",
  "/_app/immutable/assets/roboto-all-400-normal-e41533d5.woff",
  "/_app/immutable/assets/roboto-cyrillic-400-normal-495d38d4.woff2",
  "/_app/immutable/assets/roboto-cyrillic-ext-400-normal-b7ef2cd1.woff2",
  "/_app/immutable/assets/roboto-greek-400-normal-daf51ab5.woff2",
  "/_app/immutable/assets/roboto-latin-400-normal-f6734f81.woff2",
  "/_app/immutable/assets/roboto-latin-ext-400-normal-3c23eb02.woff2",
  "/_app/immutable/assets/roboto-vietnamese-400-normal-77b24796.woff2",
  "/_app/immutable/start-28fb5b07.js",
  "/_app/immutable/components/error.svelte-cb57a1f5.js",
  "/_app/immutable/chunks/cascade-73a25d0a.js",
  "/_app/immutable/chunks/concurrent-027c024c.js",
  "/_app/immutable/chunks/loop-4f70f3c4.js",
  "/_app/immutable/chunks/loopOnce-ed515471.js",
  "/_app/immutable/chunks/loopRandom-397ff417.js",
  "/_app/immutable/chunks/scramble-67eeee62.js",
  "/_app/immutable/assets/_layout-38f915ee.css",
  "/_app/immutable/components/pages/_layout.svelte-0c8475e5.js",
  "/_app/immutable/assets/_page-fff2e19a.css",
  "/_app/immutable/components/pages/_page.svelte-a2edb50c.js",
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
  "/robots.txt"
], o = "1676048315275", t = self, i = `cache${o}`, p = m.concat(u), r = new Set(p);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(i).then((a) => a.addAll(p)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (a) => {
      for (const s of a)
        s !== i && await caches.delete(s);
      t.clients.claim();
    })
  );
});
async function b(e) {
  const a = await caches.open(`offline${o}`);
  try {
    const s = await fetch(e);
    return a.put(e, s.clone()), s;
  } catch (s) {
    const c = await a.match(e);
    if (c)
      return c;
    throw s;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const a = new URL(e.request.url), s = a.protocol.startsWith("http"), c = a.hostname === self.location.hostname && a.port !== self.location.port, n = a.host === self.location.host && r.has(a.pathname), l = e.request.cache === "only-if-cached" && !n;
  s && !c && !l && e.respondWith(
    (async () => n && await caches.match(e.request) || b(e.request))()
  );
});
