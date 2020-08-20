const VERSION = 'v1';

//self es como un this, pero exclusivo para los Sevice Workers
self.addEventListener('install', event => {
    //lo primero q vamos a ahcer es crear un preCache
    event.waitUntil(precache());
});

//  cuando ocurra una  peticion, veremos si en el cache encontramos la respuesta
self.addEventListener('fetch', event => {
    //Extraer la peticion
    let request = event.request;
    // solo queremos trabajar con las peticiones: get
    if( request.method !== "GET"){
        return; //no retorna nada
    }
    //buscar en el cache si tiene la peticion
    event.respondWith(cachedResponse(request));

    //actualizar el cache, para evitar el error de q en produccion tengamos una version de un archivo, y en cache una version vieja
    event.waitUntil(updateCache(request));
});

async function precache(){
    let cache = await caches.open(VERSION); //esto va a regresa una promesa, por tanto le agregaremos await
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/BigBuckBunny.mp4',
        '/assets/index.css',
        '/assets/index.js',
    ]); //esto lo tenemos q regresar ya que nos devuelve una promesa
}

async function cachedResponse(request){
    let cache = await caches.open(VERSION);
    //le vamos a preguntar al cache, ya tienes una copia que le corresponde al request
    let response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request){
    let cache = await caches.open(VERSION);
    let response = await fetch(request);
    return cache.put(request, response);
}