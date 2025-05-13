import { regions } from "./regions.js"
import { pets } from "./pets.js"

const cacheName = "SolverCache";
const versionID = "c7d7e88b95e7fe4a9986360271101231"

var precachedResources = [
    "./",
    "./manifest.json",
    "./serviceWorker.js",
    "./index.html",
    "./solver.js",
    "./pets.js",
    "./regions.js",
    "./style.css",
    "./imgs/icons/icon-29x29.png",
    "./imgs/icons/icon-72x72.png",
    "./imgs/icons/icon-96x96.png",
    "./imgs/icons/icon-128x128.png",
    "./imgs/icons/icon-144x144.png",
    "./imgs/icons/icon-152x152.png",
    "./imgs/icons/icon-192x192.png",
    "./imgs/icons/icon-384x384.png",
    "./imgs/icons/icon-512x512.png",
    "./imgs/commonEmpty.png",
    "./imgs/rareEmpty.png",
    "./imgs/mythicalEmpty.png",
    "./imgs/timelessEmpty.png",
    "./imgs/petEmpty.png",
];

async function precache() {
    for (let regionId = 0; regionId < regions.length; regionId++) {
        const region = regions[regionId];
        precachedResources.push(region.baseTexture);
        precachedResources.push(region.emptyTexture);
        precachedResources.push(region.alt1);
        precachedResources.push(region.alt2);
        precachedResources.push(region.alt3);
        precachedResources.push(region.alt4);
        for (let patternId = 0; patternId < region.patterns.length; patternId++) {
            const pattern = region.patterns[patternId];
            precachedResources.push(pattern.image);
            precachedResources.push(pattern.imageOff);
        }
    }

    for (let petId = 0; petId < pets.length; petId++) {
        const pet = pets[petId];
        if (pet.images !== undefined) for (let imageSetId = 0; imageSetId < pet.images.length; imageSetId++) {
            const imageSet = pet.images[imageSetId];
            precachedResources.push(imageSet.blank);
            for (let imageId = 0; imageId < imageSet.full.length; imageId++) {
                precachedResources.push(imageSet.full[imageId]);
            }
        }
    }

    precachedResources = precachedResources.filter(e => e);

    precachedResources = Array.from([...new Set(precachedResources)])
    
    const cache = await caches.open(cacheName);
    return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
    event.waitUntil(precache());
});

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request, {ignoreSearch: true});
    if (cachedResponse) {
        return cachedResponse;
    }
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        return Response.error();
    }
}

self.addEventListener("fetch", (event) => {
    event.respondWith(cacheFirst(event.request));
});
