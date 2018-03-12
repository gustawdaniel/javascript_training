(function($, window, document, undefined) {

   $.fn.highlight = function() {

        return this.each(function() {

            var that = $(this),
                text = that.text();

            if(text.length > 100) {
                that.css("color", "red");
            } else {
                that.css("color", "green");
            }

        });

   };

    $(document).ready(function() {

        $(".rte p, .rte li").highlight();

    });

})(jQuery, window, document);


















