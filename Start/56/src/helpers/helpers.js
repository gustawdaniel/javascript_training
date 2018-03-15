export function preloadImage(url) {

    const img = document.createElement("img");
    const p = new Promise(function(resolve, reject) {
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
    });

    img.src = url;

    return p;

}