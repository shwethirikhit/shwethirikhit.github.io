'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8008e2eddb5f6e687c8fa99335a883b",
"index.html": "d1efea2ca389cb49ed000b20a4e06e9a",
"/": "d1efea2ca389cb49ed000b20a4e06e9a",
"main.dart.js": "8581b77d555ece9f18ed843870cbce49",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "6fb9343b8730d24082f9bc73482712d9",
"icons/Icon-192.png": "6927f2a0659218930ba0f5d9525294da",
"icons/Icon-maskable-192.png": "6927f2a0659218930ba0f5d9525294da",
"icons/Icon-maskable-512.png": "42fc7be2ebeb4607d9338e972d6e2809",
"icons/Icon-512.png": "42fc7be2ebeb4607d9338e972d6e2809",
"manifest.json": "063938ca79a876cad8fa466245b3c54c",
".git/config": "b65faaad5066474ff1335e92156980c0",
".git/objects/3e/14f126e238a599613bacf80115f2d32c575e71": "cb5ea9b69ca9030c1480d49ffc7cae84",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/68/a4c0dc06436d53cc6acaf641d4919957b99e22": "829d84fc2f6df0234cabd3a37595d96e",
".git/objects/9b/0a55bd61dfe1e50d0370695e38c11e139ad1c2": "57b1314e9a1ea37a53cb521a4b8bfe7d",
".git/objects/9e/4edce201b15badc9f7decca6d5650a25bcc1e0": "9841694142d39c6a1463c06434ff0e2f",
".git/objects/6a/8e4eeddc9915e0d8ef6e83d6bde0340a61d886": "2a0901a4747c5b5d6607a0116b44b94c",
".git/objects/6a/b815523a4d7ddb6a5798c7fcfd2794a4b36bc6": "966a535aa4a789e80a152366a21aea86",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/3d/935ddf7b9f2b54de9039390c9214df7c0a9834": "0c8806b5e042b1eaebe52cc4ed9a27fc",
".git/objects/67/f32d757d26caeb8b0f793f09b2444c48ae9509": "057de963beaefc4818bbe2e264fcc825",
".git/objects/93/04828a4391ac04d13235d55dc8708eb716b7f0": "9d212019e12192deccea36ceab0ed20a",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/b5/8c274435f234d50b95e5bf4eb4d9e18dc1531e": "91f3d3b5c4dbc3cb205badaa58858b0d",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/b3/4127c9f9baea014f39157c3cd5cbe16f626ac4": "f6112b32d215ea5b7b13f0204fba0cce",
".git/objects/d1/b7ee2bec05ee71501c48da01895c1a35683074": "569f711fe725ef41766924bc2acaba3c",
".git/objects/ab/992d23eae1f4370c27ef6e6be552e144f41432": "44dc30180071319e7ebaa15eaa671997",
".git/objects/f3/f9606346e0786617265a01bf802df2ab248510": "7fed7c437200bb7385e07a88b63941a5",
".git/objects/ee/d91f5cbe2758e11cbb993402909f3122fcad4f": "6ac6008dc704a2cd55b3c5e2fdf8fd2c",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/c8/5bc68fa7b58d541a60f3e96e281a04fecb9d35": "27a127a1e4eba650f7e61ea50458d4fe",
".git/objects/c6/6bf41330390c8df7aae6628369cafed7e09a03": "200bddab4c623afbc580346d648abdf6",
".git/objects/18/f4b2746893e86599487308c7f51167f0e2c868": "54084992e2b5de3660c2f4799c6b3345",
".git/objects/18/527dbfe76b35e5f750947b152ecb1b39e0b3cb": "cac156316a4f0ddd1e296201bb660a79",
".git/objects/27/553e89b0f5b9e8e9d28ffc7063d089e15e97e5": "bd4d39be26a063a01f84926d9e55580a",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7d/2b2fd4011b4ab61feb9f2173e0eafa5e8ae376": "a3dcab3df20dc8fc77292f8effec78a0",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/44a9bf9591188fc5903981e6dd7ea66d0b35f0": "c6e6a0153e2d38b4e47959ad27222f29",
".git/objects/16/4a039d616ed5806a18abede91b8b8017f7aa32": "d8e1306fddeb97f141537670f02ac375",
".git/objects/42/8cdff30a580c80adb4ca104f770beaf3159d5e": "caa25cff9701dbdbd73cd03da4c8fb2c",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/4b424eab682091dbefc600fd53d5fdf91ea4cf": "e89785fbe8d7d246f6869888ef9f2290",
".git/objects/8f/96c020ff0b76fb7d8c83b0ec1665d670831b00": "edee8b18cdf3f6c6e1fa6a029ac89805",
".git/objects/8f/e73f295cabf09c918f4bdca80347fca21f5409": "d35b96c764a98b038d684bba3b8b9d13",
".git/objects/26/814974c6c52d4910d86049360eb93bc7853293": "d1a816c184c694a45fb3c77c14f65b96",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2f/b4121b020e86f0d2304a39b1f420691d9913c7": "d37ff4b51f08c5e468240bfd821a08c3",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/6e/ee751511e80980d43cb2504ca2c9cf664f35e5": "4ba4843274bb85a9fdb92acf67518440",
".git/objects/6e/254f1739f171c288bd9709e48ac8d59e9ffbcc": "a3048625a1f261acd37c7cc3442b6a4a",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/65/7956b2b955e1d73ef081630b2b93bc4f0c08c2": "0f1863f5e23f1aefc24db60031b0ce3f",
".git/objects/96/97a390894c7cfd7badbb1dffea3890ef4f4e58": "0a801ef70ca33bc89290433791971407",
".git/objects/5b/d595056d34c2c412006a86e0f28f0050847784": "ebbf47c33314088aca0c76a3156bc25f",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/69f1151ada564e4cb26fbbf24e058f4ddfd402": "973e354b56e8414f51a7ae0ac0ecde20",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/dc/1bac726ed2be4facf6103ea9c3e04bd0bdd047": "fc75de83aa1a4b4e82a8f750a8543d64",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/ef/484bfa9ec13c6307a428ffd622a26e7a337fcb": "92211c78814b95df9a18c7e04e386839",
".git/objects/ea/6bb9e801d53bfa8040a71a118ff0988f609942": "6aab5e33756359a7649b6fdbd3b9d651",
".git/objects/e1/5fe953e70fb5d23fabdc1df983dc0756530467": "8a37e5eb73a2a2ce865a980e129d17ec",
".git/objects/cd/7cb6729869056817e06451745a2e541bc7d19f": "eebd31b16f705096b97956efc0269ea5",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/fa/e94bb3eba54e0cb6fefa57d1a006d076e4878c": "a302fc6776d852bc6b995623822c8e9c",
".git/objects/c2/f809d373f88ce8db515da98b5d90c91c4e24f1": "ac01497fa8aa970dff9eb9ecb69f74ae",
".git/objects/c2/17eb7b4690453af7e6baf420de7a1f81f191e6": "03e480aa2af83ce0dc56d8ef705be818",
".git/objects/e7/df4f44889826b9135f345d380dacdbff953081": "27e7e0ce0aec9cff89954d93c480abf6",
".git/objects/46/88eb3a6907331a3fab332a5d3c106dcf29d921": "57f134545814d7d6818776d8b606bfbb",
".git/objects/2d/a9e6ccbad2831b5b663ccbd5d0c7308c8c4c52": "1e9ec34dd93487e4b7352ed694d52c4d",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/30437c884674177fed0f2c58977a169584e15b": "862c55224702ca269e3bd149f4ef1dfe",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/15/ca97c74621c851902722664c7200d1d8f7b71a": "ac543da60550fc29d3afaa805f7b1107",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1c/52c5335084ff2f767f1a83569f5e8b4fcfc440": "8e97502a8d2c3c71911c1cf462429653",
".git/objects/1c/aff4f043e1a6f5735d85fb4e25e21c66248eca": "b42b17d9921661404ef6bcb3a4d575f7",
".git/objects/49/8974d0dd3e22600c30060eac94a1b7076747cc": "1b9f21937d75e55f43fd7179c0172f52",
".git/objects/40/5bb6dba482f6a6746b81ba5ce439e4cb766b5d": "5dad56776a99ed06397b46c16634a943",
".git/objects/2e/b7273c6fa5a79fe09fa7d32ce5f3bb8349879c": "5f30aa72ec8dd959276241c150a959c6",
".git/objects/13/d5fcba6b37e77608520180f3c6dafb9f72fa0c": "e4006cfb27a7462d2f3d8fc209d858b1",
".git/objects/7a/cc664cf6a0995e374ef631c9fb5885c7e6bdf8": "4d9ff119f1aeae47f4ecd0d5dbed898e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f57215b4813e1e71db295da007ea541f",
".git/logs/refs/heads/main": "f57215b4813e1e71db295da007ea541f",
".git/logs/refs/remotes/origin/main": "e45c7f7170215ddc955d1cd9b06cbb72",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e2a71393e973a4a0a9fcc54200177f42",
".git/refs/remotes/origin/main": "e2a71393e973a4a0a9fcc54200177f42",
".git/index": "4d7b2046e921a9785e247a00f4edaa11",
".git/COMMIT_EDITMSG": "b04d0b29d4bac0781fe844e328c5e2ac",
"assets/AssetManifest.json": "cfd68bfbd578f1732d0241368bca9abf",
"assets/NOTICES": "104772fb8313bf744e8dff05c7c74516",
"assets/FontManifest.json": "9ca5dcfcd70a3310e33da7169e2df95e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/admin/add_image.png": "75b091ba9b22d4b40dfd0a0e6ab1f936",
"assets/assets/admin/half-circle.svg": "9998af7d8476f150db38c02b7280b1ea",
"assets/assets/admin/total_sales.svg": "8ac9a4ec41b09f3bea26f8c08deb443e",
"assets/assets/admin/stack_user.png": "0c445649e7194b4fcb2981d72f63f625",
"assets/assets/admin/shopping-bag.svg": "01e72024185771203c2c5c4216a41672",
"assets/assets/admin/stk_logo.png": "7afde2131b90434613ef6fca13211c2c",
"assets/assets/admin/order.svg": "8c9f54731150bd32257937f7eaaf8166",
"assets/assets/admin/admin_forget_password.png": "7340d7ca64f74b3b7335831b9ed88ba0",
"assets/assets/admin/user.png": "e876fe410159bf929e57489d43b41250",
"assets/assets/admin/column-chart.svg": "95636d86d208ec3aa9b967bbacf7a9ed",
"assets/assets/admin/dots.png": "d96db7263559d90487b4083ea44e85f1",
"assets/assets/admin/admin_cover.png": "f4510119547de17e16915ebf1028078b",
"assets/assets/admin/setting.svg": "7629e4fd4c80ccc9c10fc406161e19c6",
"assets/assets/admin/stk_logo2.jpg": "6f78850cc5be2906b5ef23a579f87abb",
"assets/assets/admin/logo.jpg": "7393ad33ae7046d2428c794921d6d7b4",
"assets/assets/admin/calendar.png": "8461ccb9a7c19150183fe3cc59958960",
"assets/assets/admin/star.svg": "57065b7ce8ef25aaf6bcff6e636add33",
"assets/assets/admin/turn-left.svg": "045c95aea1a2f5e72ca6feb57ed9ef03",
"assets/assets/admin/order_status.png": "73a938531b56444f76e2e4c4d2c7d7d7",
"assets/assets/admin/row_users.svg": "9ad20db038fb6afeff0467d7f912e673",
"assets/assets/admin/enter.svg": "c889040d4a3f93de8b08598754079b46",
"assets/assets/admin/shopping-cart.svg": "9fc8fd256b7c6eb53249dfa86ca9c851",
"assets/assets/admin/customer.svg": "8405111dd7f31a061574a1c2c16a3da4",
"assets/assets/admin/close.png": "2fd780872ac0fc0f900ca81717605d3f",
"assets/assets/admin/nuclear.svg": "0a575d202e7bf7dee63a1e752b2492be",
"assets/assets/therapy.svg": "2422238e3d0ef75670dcef0720d9a921",
"assets/assets/learning.svg": "c9eeb52594113dbdd90bd51a4720e327",
"assets/assets/news.svg": "58afdf132b03ceb9a5739870e997c5bc",
"assets/assets/vlog.svg": "1c6784dc5cd324b659605ef19b32797a",
"assets/assets/affirmations.svg": "d45d46a11df208d21d0c1933826fa554",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
