self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/icons/icon-192.png",
        "/icons/icon-512.png",
        "/css/all.min.css",
        "/webfonts/fa-regular-400.ttf",
        "/webfonts/fa-regular-400.woff2",
        "/webfonts/fa-solid-900.ttf",
        "/webfonts/fa-solid-900.woff2"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
