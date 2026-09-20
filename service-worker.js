const CACHE_NAME = "mi-peso-v2";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png"
];

self.addEventListener("install", function (evento) {

    evento.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(ARCHIVOS);
        })
    );

});
self.addEventListener("fetch", function (evento) {

    evento.respondWith(

        caches.match(evento.request)
            .then(function (respuestaGuardada) {

                if (respuestaGuardada) {
                    return respuestaGuardada;
                }

                return fetch(evento.request);

            })

    );

});