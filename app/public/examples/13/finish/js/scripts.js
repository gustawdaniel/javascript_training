(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

            var that = $(this);

            var bgColor = that.css("background-color");

            // var bgColor = window.getComputedStyle(this).backgroundColor;

            // that.css("background-color", "#ff0000");

            // that.css("font-size", 12);

            // that.css("font-size", function(i, value) {

            //     return parseInt(value) * 2;

            // });

            that.css("font-size", "+=2");

            that.css({
                "font-size": 20,
                "background-color": "green"
            });

            that.css("font-size", "");

            console.log(bgColor);

        });

    });

})(jQuery);


















