(function($) {

   $(document).ready(function() {

        var links = $(".rte a:has(img)");

        links.each(function(i, elem) {

            var that = $(elem),
                alt = that.find("img").attr("alt");

            that.attr("title", that.attr("title") + " - " + alt);

        });

    });

})(jQuery);


















