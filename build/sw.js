// キャッシュにバージョンを付けておくと、古いキャッシュを消す時に便利
var CACHE_STATIC_VERSION = 'static-v2';
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
        ]);
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetching something ...', event);
  event.respondWith(
    // キャッシュの存在チェック
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        } else {
          // キャッシュがなければリクエストを投げて、レスポンスをキャッシュに入れる
          return fetch(event.request)
            .then(res => {
              return caches.open(CACHE_DYNAMIC_VERSION)
                .then(cache => {
                  // 最後に res を返せるように、ここでは clone() する必要がある
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(function() {
              // エラーが発生しても何もしない
            });
        }
      })
  );
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating Service Worker...');
  event.waitUntil(
    caches.keys()
      .then(function(keyList) {
        return Promise.all(keyList.map(key => {
          if (key !== CACHE_STATIC_VERSION) {
            console.log('[Service Worker] Removing old cache...');
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});

