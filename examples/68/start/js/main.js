import { isSelector, isHTMLTag, isDOMNode } from './Utils/Check.js';

function init(param) {

    let nodes = null;

    if(isSelector(param)) {
        // nodes = findElement(param);
        console.log("s");
    } else if(isHTMLTag(param)) {
        // nodes = createElement(param);
        console.log("e");
    } else if(isDOMNode(param)) {
        // nodes = param;
        console.log("d");
    }

}

window.eQuery = init;