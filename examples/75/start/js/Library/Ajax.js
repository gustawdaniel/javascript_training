import { serialize } from '../Utils/Ajax.js';

function getXHR(type, url) {
    let xhr = new XMLHttpRequest();
    let p = new Promise(function (resolve, reject) {

        xhr.onload = function () {
            if(xhr.status >= 200 && xhr.status < 400) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(`Error occured. Status code is ${xhr.status}`));
            }
        };

        xhr.onerror = function () {
            reject( new Error(`Communication error occured`) );
        }

    });

    xhr.open(type, url);

    return {xhr, p};
}

export default {

    get(url) {
        const { xhr, p } = getXHR("GET", url);

        xhr.send();

        return p;
    },

    post(url, data) {
        const { xhr, p } = getXHR("POST", url);

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.send(serialize(data));

        return p;
    }

}