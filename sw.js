const C='hyrox-coach-github-v5-1';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);
 if(e.request.mode==='navigate'){
  e.respondWith(fetch(e.request).then(r=>{let cp=r.clone();caches.open(C).then(c=>c.put('./index.html',cp));return r;}).catch(()=>caches.match('./index.html')));return;
 }
 if(url.origin===self.location.origin){
  e.respondWith(caches.match(e.request).then(cached=>{let net=fetch(e.request).then(r=>{if(r&&r.ok){let cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));}return r;}).catch(()=>cached);return cached||net;}));
 }
});
