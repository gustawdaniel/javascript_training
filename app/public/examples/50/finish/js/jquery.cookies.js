(function($, window, document, undefined) {

    function saveToLS(key, val) {

        if( !("localStorage" in window) ) return;

        window.localStorage.setItem(key, val);

    }

    function readFromLS(key) {

        if( !("localStorage" in window) ) return;

        return window.localStorage.getItem(key);

    }

    $.fn.cookieAlert = function(userOptions) {

        if( readFromLS("cookiesAccepted") === "1" ) {
            return this;
        }

        var options = $.extend({}, $.fn.cookieAlert.defaults, userOptions);

        var div = $("<div></div>", {
            "class": options.containerClass
        }).hide();

        var p = $("<p></p>", {
            "class": options.textClass,
            "text": options.message
        });

        var span = $("<span></span>", {
            "class": options.closeClass
        });

        span.on("click", function() {

            saveToLS("cookiesAccepted", 1);

            div.slideUp(options.animSpeed, function() {
                div.remove();
            });

        });

        p.append(span);
        div.append(p);
        this.prepend(div);

        div.slideDown(options.animSpeed);

        return this;

    };

    $.fn.cookieAlert.defaults = {
        message: "Ta strona wykorzystuje pliki cookies.",
        animSpeed: 300,
        containerClass: "cookie",
        textClass: "cookie__text",
        closeClass: "cookie__close"
    };

})(jQuery, window, document);