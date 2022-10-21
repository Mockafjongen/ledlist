'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "31376c1518dbecf3fa3f2e716c3e9cda",
".git/config": "108295fd070c874a7ae22464972d4171",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "28b300ca0093e4750b53c51a80f16e11",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "117bb4e8b505b39f0722c1eaf86bb47c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "824c3fbc28cd5f3b7e6c11393973424a",
".git/logs/refs/heads/master": "057285d0225118bc98e01447643a82f7",
".git/logs/refs/remotes/origin/master": "4145f96daf5a5ec5e927d20af0b16ef5",
".git/objects/03/1fcde730a8031f732b81820ef4a2eb2563b0fc": "2b730ab82e456363be6f75a571f7c538",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/3634d116ea8d78e81535f129ae9522d3553f46": "2a493b9d4ab0cb72d91c93a2b436b1d1",
".git/objects/0a/8274a103b533c388d220f7a60e16834d70fc06": "0499114cbcaa7ce88a77431fe5d17279",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/17/8b7a93e10aa6718b45f66be67804a5586f496b": "33ccc64f4376f323849535c49764725a",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/25/bb6086b84371979f1570865cd65e41dd9aed9a": "9181a2ac054b25738d5105997616299c",
".git/objects/26/f701d80e7a6d18a9c138eb98c3d6dc2755b96e": "42567bac49ffff85f93edf889dadaa0c",
".git/objects/27/0f4974192ec0f8325b30e531ea87cd5cded074": "30b2078ccea0213c1c4736515ac650bb",
".git/objects/27/21c077573ac9805e1c5a1185a9b55fc1e543bb": "6f9e7ba047c302d6c0e2e925787e8d87",
".git/objects/30/265da01d1d10cac9bcc7006ce11ae55a803b98": "2060b8ffc41b33d9872593f0f38555c6",
".git/objects/32/75e4d0e60266bd3924a7880cbfee846815d20b": "4062d1ef8e783d4c158f4456cfef51da",
".git/objects/37/2e818abe0bdfdb549257a8bf797ff38669072c": "c5e8baa47efc374f9da668de99f23cdb",
".git/objects/3e/4f378ed36db138c8bac7c440075b4e15a49fcc": "f4e3a0ed60d7f789c38e758b23f59e19",
".git/objects/43/ab428677851c75851264967cabcf09f5223f65": "9b2f6e5d338a02ff7609b320f2d9051a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5a/4f0db50651e8726efef14b32df761dc9a0eb42": "33eae760683fb992a04132ce61732f6c",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/5d/b927d7d4e986e89e0e5e9beda7b83abac6ed9a": "0b8a6ba222e8a67a07cc934599a2a808",
".git/objects/61/bb227c811d8c81d803d8a59758ce1b80152c3d": "9b3c177f65d5b7c90a08149d19651450",
".git/objects/67/dba8511ff567e9e4264e5699120e11c10175ae": "a5b770f4238c7f1a9de253614602d5bc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/7e/27137128a13929ac3be18cf17338c550aed581": "feb5387807427de7d673bdcfd3f296c2",
".git/objects/89/486661746430586410648c43752ecfc0defddd": "5eb74e60957f8b915a70352bdc3c7986",
".git/objects/93/b388ffd9b1bb4acf81dce0fc1db8f3d026af43": "de56b95b9a1c200021196615c753c0ae",
".git/objects/97/fd43241047da721c82fb2029a262625cd0b1e7": "79de290c37e0c132a7b4185eef741949",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/0d018c8a4d29fa4e9b867cfbd2abd945e2282f": "fbd30fbe0eac6a3468ff5768dab583ae",
".git/objects/aa/d9cc42ff73466feca6370f96e4edb80d0bba1b": "4f211256284ab9df0de3b3b6b39cfd29",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ca/f6b1dbb6ab315c2798836059c0957e6406095a": "87b039a5cb4dd305aea6bcfa685efac1",
".git/objects/cb/42df789f6eac9bb0c2e648858950643aaf9e19": "9f330b0ed971cc93ad6fe77ed167bb41",
".git/objects/d5/e9a0973cae695a056a6a6e5b374a2488ba4560": "fc6060c2acc6a356992fc7415c27b7c8",
".git/objects/da/91bd09c31248a6aedd73704010241dc779191f": "f7408288cea7f994357455729c5763be",
".git/objects/de/640c40433425d373396e62ac2597acbf365147": "a0cd3033b07a487cb5ebad6ca06edffd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/8e55dff9207ae709be3d9095c386bb9e0d3b48": "dd97f04a5ebb1bf410bf19e0050c0a2a",
".git/objects/eb/76b1d309ae03fd872b654618aa3c1e5cd1dbf0": "ca6b351936facdb9bf870bf040ab14ff",
".git/objects/ef/26b00d4b9ae27e811d65a3f735c4c9a5309a29": "d4be33a9287c0dc08d7d589d28d70e99",
".git/objects/ef/bbfe458a580e856748009a97b9aff1865144ee": "0ca5455b6018f0ed8dd887df39de9a26",
".git/objects/f1/74f0fe07823c561f6159c289be08ff5bf513c4": "af48645b7ec5881c663c10c2ddf9ee5d",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/fa/e70f6e55bf907ec161468e50611d8288baf653": "2f0944bffa563f9b4b5d245904034229",
".git/ORIG_HEAD": "c9860931ea3db124eec4bf9961fbe389",
".git/refs/heads/master": "4f56ea5d68658b793fcb3501f78d9df0",
".git/refs/remotes/origin/master": "4f56ea5d68658b793fcb3501f78d9df0",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "69e3b209354a9bcae7242179c8bc1575",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"CNAME": "55c08d3ea8dcba894408c40000c5993a",
"favicon.png": "f1a56e7e362edbaf53d1500063c0958a",
"icons/Icon-192.png": "e6ba89b73b1368e0bf68cf76da389c60",
"icons/Icon-512.png": "5819edd69b5fab65be35f5201587cd47",
"icons/Icon-maskable-192.png": "adbce84cdfbf8b9ecd83b75d5b3e2c4e",
"icons/Icon-maskable-512.png": "03f971df17982c46845a441882dc63f3",
"index.html": "dc508c476642b51f465d3d46ca7bbb0a",
"/": "dc508c476642b51f465d3d46ca7bbb0a",
"main.dart.js": "85b1facf56aa6b60d25c555321b40740",
"manifest.json": "4b30939638c7f5a4200788797a610c9f",
"version.json": "9b55ede22b865935706244d85c8235a2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
