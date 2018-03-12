(function($) {

   $(document).ready(function() {

        var stars = $("#rating .rating__star"),
            radios = $(":radio[name='rating']");

        stars.hover(
            function() {

                var that = $(this);

                that.prevAll().andSelf().addClass("rating__star--hovered");

            },
            function() {

                var that = $(this);

                that.prevAll().andSelf().removeClass("rating__star--hovered");

            }
        );

        stars.on("click", function() {

            var that = $(this),
                index = that.index();

            that.siblings().removeClass("rating__star--selected");
            that.prevAll().andSelf().addClass("rating__star--selected");

            // radios.eq(index)[0].checked = true;
            radios.eq(index).prop("checked", true);

        });

    });

})(jQuery);