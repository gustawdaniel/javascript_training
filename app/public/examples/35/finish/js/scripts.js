(function($) {

   $(document).ready(function() {

        var numbers = [1, -3, 10, -44, 3, 50, 2, -6];

        var positive = $.grep(numbers, function(val, i) {

            return val > 0;

        }, true);

        utils.log(positive);

    });

})(jQuery);


















