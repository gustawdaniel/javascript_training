(function($) {

   $(document).ready(function() {

        var links = $(".rte a");

        var urls = links.map(function(i, elem) {

            var href = $(elem).attr("href");

            if(href !== "#") {
                return href;
            }

        });

        // utils.log(urls);

        var numbers = [1, -3, 10, -44, 3, 50, 2, -6];

        var positive = $.map(numbers, function(val, i) {

            if(val > 0) {
                return val;
            }

        });

        utils.log(positive);

    });

})(jQuery);


















