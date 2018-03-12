(function($, window, document, undefined) {

   $.fn.highlight = function(userOptions) {

        var options = $.extend({}, $.fn.highlight.defaults, userOptions);

        return this.each(function() {

            var that = $(this),
                text = that.text();

            if(text.length > 100) {
                that.css("color", options.longColor);
            } else {
                that.css("color", options.shortColor);
            }

        });

   };

    $.fn.highlight.defaults = {
        shortColor: "red",
        longColor: "green"
    };

    $(document).ready(function() {

        $.fn.highlight.defaults.shortColor = "blue";

        $(".rte p, .rte li").highlight();

    });

})(jQuery, window, document);


















