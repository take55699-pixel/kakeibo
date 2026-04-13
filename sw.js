const CACHE = 'kakeibo-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Clear all old caches
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

// No caching - always fetch from network
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
