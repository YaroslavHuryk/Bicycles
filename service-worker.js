self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll([
        "/Bicycles/",
        "/Bicycles/index.html",
        "/Bicycles/style.css",
        "/Bicycles/script.js",
        "/Bicycles/icons/Circle-icons-bike-192.png",
        "/Bicycles/icons/Circle-icons-bike-512.png",
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
