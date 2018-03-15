function $(selector) {
    return document.querySelector(selector);
}

function getJSON(url) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    let p = new Promise(function (resolve, reject) {
        xhr.onload = function() {
            if(xhr.status === 200) {
                // console.log(xhr.responseText);
                resolve(xhr.responseText);
            } else {
                reject( new Error("Wystąpił błąd") );
            }
        };

        xhr.onerror = function() {
            reject( new Error("Wystapił błąd") );
        };
    });

    xhr.send();

    return p;
}

$("#btn-39").onclick = function() {

    getJSON("http://code.eduweb.pl/kurs-es6/json/")
        .then(json => $("#pre-39").textContent = json, err => $("#pre-39").textContent = err.message);

};