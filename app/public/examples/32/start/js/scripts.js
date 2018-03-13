(function($) {

   $(document).ready(function() {

        var links = $(".rte a:has(img)");

        links.each(function (index, elem) {
            let that = $(elem),
                alt = that.find("img").attr("alt");

            that.attr("title", that.attr("title") + " - " + alt);
        })

    });

})(jQuery);


















