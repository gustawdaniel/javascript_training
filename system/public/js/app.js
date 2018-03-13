(function() {

function $(selector) {
    return document.querySelector(selector);
}

function on(elem, type, fn) {
    elem && elem.addEventListener(type, fn, false);
}

on($("#scriptButton"), "click", function() {
    var text = this.textContent,
        show = this.dataset.show,
        hide = this.dataset.hide;

    this.textContent = text === show ? hide : show;

    $("#scriptPreview").classList.toggle("edu-hidden");
});

})();