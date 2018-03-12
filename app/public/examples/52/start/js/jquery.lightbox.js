(function($, window, document, undefined) {

    var win = $(window),
        doc = $(document);

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