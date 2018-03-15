import { isObject } from '../Utils/Check.js';

export default {

    attr(key, val) {
        if(key !== undefined && val === undefined) {
            return this.get(0).getAttribute(key);
        } else {
            this.each( node => node.setAttribute(key, val) );
        }
    },

    addClass(className) {
        this.each( node => node.classList.add(className) );
    },

    removeClass(className) {
        this.each( node => node.classList.remove(className) );
    },

    toggleClass(className) {
        this.each( node => node.classList.toggle(className) );
    },

    hasClass(className) {
        this.each( node => node.classList.has(className) );
    },

    css(prop, val) {
        if(prop !== undefined && val !== undefined) {
            this.each(node => node.style[prop] = val);
        } else if (isObject(prop)) {
            for(let key in prop) {
                if(prop.hasOwnProperty(key))
                    this.each(node => node.style[key] = prop[key])
            }
        } else {
            return this.get(0).style[prop];
        }
    }

};