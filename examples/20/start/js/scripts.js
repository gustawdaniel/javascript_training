const URL = "https://mojastrona.pl";
const filePath = "/Users/janek/Desktop/app/index.html";

function isHTTPS(text) {
    // return text.indexOf("https://") === 0;
    return text.startsWith("https://");
}

function hasEXT(path, ext) {
    // return new RegExp(/\.html/).test(path)
    return path.endsWith(`.${ext}`);
}

function includes(text, substring) {
    return text.indexOf(substring) !== -1;
}

console.log(isHTTPS(URL));
console.log(isHTTPS(filePath));
console.log(hasEXT(URL, "html"));
console.log(hasEXT(filePath, "html"));
console.log(includes("Ala ma kota", "ma"));
console.log("Ala ma kota".includes("ma"));
console.log("=".repeat(10));