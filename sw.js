const CACHE='nms-hub-v4.7';
const CORE=['./','./index.html','./manifest.webmanifest','./assets/favicon-32.png','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE).catch(()=>{})));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.hostname.indexOf('nomanssky.com')>-1)return; // live API -> always network
  if(u.hostname.indexOf('fandom.com')>-1)return; // NMS Wiki (codex.js) -> always network
  if(u.pathname.endsWith('.mp4'))return; // don't cache the intro video
  // HTML/JS/CSS: network-first so a fresh deploy shows immediately, cache is only an offline fallback
  e.respondWith(
    fetch(e.request).then(resp=>{
      if(resp&&resp.status===200&&u.origin===location.origin){const cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));}
      return resp;
    }).catch(()=> caches.match(e.request).then(r=> r || caches.match('./index.html')))
  );
});
