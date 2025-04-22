self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("esp-pwa-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./script.js",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
