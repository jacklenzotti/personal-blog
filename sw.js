if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return n;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-4d0bff02"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"U04ETotcmYX__lPhEaqLD"},{url:"/_next/static/U04ETotcmYX__lPhEaqLD/_buildManifest.js",revision:"a9d82c072b5697f951fc1839073a101d"},{url:"/_next/static/U04ETotcmYX__lPhEaqLD/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/U04ETotcmYX__lPhEaqLD/pages/_app.js",revision:"1b86a933c8941fbc17a1df0ccf09724a"},{url:"/_next/static/U04ETotcmYX__lPhEaqLD/pages/_error.js",revision:"00e9ad2e9f6b85449597ff374397b971"},{url:"/_next/static/U04ETotcmYX__lPhEaqLD/pages/index.js",revision:"74c11fb5c30d1ee00906cdc641c601fa"},{url:"/_next/static/U04ETotcmYX__lPhEaqLD/pages/posts/%5Bid%5D.js",revision:"b749769ac108b63dc44440837211dbf0"},{url:"/_next/static/chunks/4e98931d50fb588c8837f473c1ad22f4b9ea5db0.1b4336be8617ad1cfc67.js",revision:"f4501802fec66ff6f94b39f9a8b66df1"},{url:"/_next/static/chunks/a9a7754c.2c233710435a679a20bf.js",revision:"ae471de939ddf54e086e2a88cbd69548"},{url:"/_next/static/chunks/commons.134088cfec0460eb6c7d.js",revision:"e5fe7d95fb3fad29009ff5e976ac4e9a"},{url:"/_next/static/chunks/framework.61be3d4a7cddc2283fc7.js",revision:"8e6204793e3d11a8bedf359bfb6e110d"},{url:"/_next/static/css/2f3d92715f384264fdcf.css",revision:"0c87f2c9428f2b7c7cbd385fed7dd8bb"},{url:"/_next/static/css/5fb57b58a39ca7a486a8.css",revision:"95543ea8517c2396daf48f346fcc985a"},{url:"/_next/static/runtime/main-fcda8d8ae5e40b3934e7.js",revision:"e5d0c4ad534f831d9df52afcc8bbfb68"},{url:"/_next/static/runtime/polyfills-a0ee7e819ac33727cdcf.js",revision:"4f28bd3d37a02c31fea04e1a00cca933"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/icons/icon-128x128.png",revision:"8ab44770693f5bde6dd26f14c5a33852"},{url:"/images/icons/icon-144x144.png",revision:"bc340fc5a4f6d088ccfaa0a2d42d083e"},{url:"/images/icons/icon-152x152.png",revision:"ffcaa3df165edc40ea4b3ab0b6ac70b5"},{url:"/images/icons/icon-192x192.png",revision:"d5fa771e3d68a299ac9a80153eda0548"},{url:"/images/icons/icon-384x384.png",revision:"a38f2aa0b91a0148c22ec3373b739ccd"},{url:"/images/icons/icon-512x512.png",revision:"3da106778755fd03ee2a8c538fc2e0ef"},{url:"/images/icons/icon-72x72.png",revision:"cac40dd7f10f551d6c9897c663198a0e"},{url:"/images/icons/icon-96x96.png",revision:"e8954a316dcb2d88c632eaca8d75c5c6"},{url:"/images/kitten.jpg",revision:"b01f4bab92e95b4fb5fa9913ab6318ce"},{url:"/images/profile.jpg",revision:"6b6332662d0e7a9eabc3f91a498707cf"},{url:"/manifest.json",revision:"f77ebd54ac37a6b41e6ca9364e14a4d5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
