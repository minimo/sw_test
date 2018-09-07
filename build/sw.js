// キャッシュにバージョンを付けておくと、古いキャッシュを消す時に便利
var CACHE_STATIC_VERSION = 'static-v3';
var CACHE_DYNAMIC_VERSION = null;

// サービスワーカーのインストール
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing Service Worker...');

  // キャッシュできるまで次の処理を待つ
  event.waitUntil(
    caches.open(CACHE_STATIC_VERSION)
      .then(cache => {
        console.log('[Service Worker] Precaching App...');
        cache.addAll([
          '/',
          'index.html',
          'style.css',
          'phina_app.js',
          'phina.js',
          'assets/background.png',
          'assets/buropiyo.png',
          'assets/character.tmss',
          'assets/damage.mp3',
          'assets/ground.png',
          'assets/meropiyo.png',
          'assets/mikapiyo.png',
          'assets/nasupiyo.png',
          'assets/takepiyo.png',
          'assets/tomapiyo.png',
          'assets/tube1.png',
          'assets/tube2.png',
        ]);
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetching something ...', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // キャッシュがあったのでそのレスポンスを返す
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event　=> {
  clients.claim();
});