(function($, window, document, undefined) {

    var win = $(window),
        doc = $(document);

    function createOverlay() {
        var overlay = $("#lightbox-overlay");
        if(!overlay.length) {
            overlay = $("<div></div>", {
                id: "lightbox-overlay",
                class: "lightbox-overlay",
                on: {
                    click: closeOverlay
                }
            }).appendTo("body");
        }
        return overlay;
    }

    function showOverlay() {
        var overlay = createOverlay();
        overlay.css({
            width: doc.width(),
            height: doc.height(),
        });

        overlay.fadeIn(500);
    }

    function showLightbox() {
        showOverlay()
    }

    function closeOverlay() {

        var overlay = $("#lightbox-overlay");

        overlay.fadeOut(500);

    }

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