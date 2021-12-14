importScripts("/precache-manifest.02a3e51e8769a17887c01cec230a7cf1.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// Workbox를 디버그모드로 설정 
workbox.setConfig({
  debug: true,
});

// Vue-Cli에서 기본으로 제공하는 프리캐시 설정을 Workbox에 적용 
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// 촬영된 이미지 캐시
workbox.routing.registerRoute(
  new RegExp('https://firebasestorage.googleapis.com/v0/b/pwa-camera.appspot.com/.*'),
  workbox.strategies.staleWhileRevalidate({
      cacheName: 'camera-images',
      plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1년 지정
          }),
        ],
  })
);
