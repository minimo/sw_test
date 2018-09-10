/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/background.png",
    "revision": "091ecae1665d0a9118d4287fd97d7999"
  },
  {
    "url": "assets/buropiyo.png",
    "revision": "8abccf4fc54410aa988b9eeffad9c1b6"
  },
  {
    "url": "assets/character.tmss",
    "revision": "6d2b627c68418aed9fd689dcd17d77ec"
  },
  {
    "url": "assets/damage.mp3",
    "revision": "48de05e4242f7a65eea83968d8c01ba7"
  },
  {
    "url": "assets/ground.png",
    "revision": "d36eaa48b45238a14db6171b6c627040"
  },
  {
    "url": "assets/meropiyo.png",
    "revision": "6604cd944acdcf1b524365d283803a46"
  },
  {
    "url": "assets/mikapiyo.png",
    "revision": "0234267d275d5cc5d5ae1d5b4fc8bc84"
  },
  {
    "url": "assets/nasupiyo.png",
    "revision": "de3259442528eef3ab93e395d0869272"
  },
  {
    "url": "assets/takepiyo.png",
    "revision": "c27f07c719eb920eeb7b8caf936c6c3c"
  },
  {
    "url": "assets/tomapiyo.png",
    "revision": "dcfbf8237b6551efe77b94143d8692e0"
  },
  {
    "url": "assets/tube1.png",
    "revision": "565a8a84a97a8865bb04980c81608da3"
  },
  {
    "url": "assets/tube2.png",
    "revision": "67df21f35fd41791b91346b1c3136a67"
  },
  {
    "url": "index.html",
    "revision": "3ef5454c1a29ea331817f69588801012"
  },
  {
    "url": "phina_app.js",
    "revision": "2ec6493e2a9d1f44c0ba6894e316fbcc"
  },
  {
    "url": "phina.js",
    "revision": "8e26123c2b5288de8f63286be3befb02"
  },
  {
    "url": "style.css",
    "revision": "06b93ba01902b394e42933472f0bf0db"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
