(function($, window, document, undefined) {

    var win = $(window),
        doc = $(document);

    function createLightbox() {

        var lightbox = $("#lightbox");

        if(!lightbox.length) {
            lightbox = $("<div></div>", {
                "id": "lightbox",
                "class": "lightbox"
            }).appendTo("body");

            var close = $("<span></span>", {
                "class": "lightbox__close",
                "on": {
                    "click": function() {
                        closeOverlay();
                        closeLightbox();
                    }
                }
            });

            lightbox.append(close);
        }

        return lightbox;

    }

    function createOverlay() {

        var overlay = $("#lightbox-overlay");

        if(!overlay.length) {
            overlay = $("<div></div>", {
                "id": "lightbox-overlay",
                "class": "lightbox-overlay",
                on: {
                    click: function() {
                        closeOverlay();
                        closeLightbox();
                    }
                }
            }).appendTo("body");
        }

        return overlay;

    }

    function showOverlay() {

        var overlay = createOverlay();

        overlay.css({
            width: doc.width(),
            height: doc.height()
        });

        overlay.fadeIn(500);

    }

    function closeOverlay() {

        var overlay = $("#lightbox-overlay");

        overlay.fadeOut(500);

    }

    function closeLightbox() {

        var lightbox = $("#lightbox");

        lightbox.fadeOut(500);

    }

    function resizeLightbox() {

        var overlay = createOverlay(),
            lightbox = createLightbox();

        overlay.css({
            "width": doc.width(),
            "height": doc.height()
        });

        var width = lightbox.outerWidth(),
            height = lightbox.outerHeight();

        lightbox.css({
            "width": width,
            "height": height,
            "top": (win.height() / 2) - (height / 2) + doc.scrollTop(),
            "left": (win.width() / 2) - (width / 2) + doc.scrollLeft()
        });

    }

    function showLightbox(imgURL) {

        showOverlay();

        var lightbox = createLightbox();

        lightbox.css({
            "width": 500,
            "height": 400,
            "top": (win.height() / 2) + doc.scrollTop() - 200,
            "left": (win.width() / 2) + doc.scrollLeft() - 250
        });

        var img = $("<img>", {
            "class": "lightbox__img"
        });

        img.on("load", function() {

            lightbox.find("img").remove()
                .end()
                .append( img.hide() );

            var width = img.width(),
                height = img.height();

            lightbox.animate({
                "width": width,
                "height": height,
                "top": (win.height() / 2) + doc.scrollTop() - (height / 2),
                "left": (win.width() / 2) + doc.scrollLeft() - (width / 2)
            }, 500, function() {
                img.fadeIn(500);
            });

        });

        img.attr("src", imgURL);

        lightbox.fadeIn(500);

    }

    win.on("resize", resizeLightbox);
    doc.on("keyup", function(e) {

        if(e.which === 27) {
            closeOverlay();
            closeLightbox();
        }

    });

    $.fn.lightbox = function() {

        return this.each(function() {

            var that = $(this),
                imgURL = that.attr("href");

            that.on("click", function(e) {

                e.preventDefault();

                showLightbox(imgURL);

            });

        });

    };

})(jQuery, window, document);