(function($) {

    var collapseAll = true;

   $(document).ready(function() {

        var titles = $(".accordion__title"),
            texts = $(".accordion__text");

        texts.hide();

        titles.on("click", function() {

            if(collapseAll) {
                titles.removeClass("accordion__title--active");
                texts.stop().slideUp(300);
            }

            var that = $(this),
                text = that.next(".accordion__text"),
                isVisible = text.is(":visible");

            that.toggleClass("accordion__title--active", !isVisible);

            if(!isVisible) {
                text.stop().slideDown(300);
            } else {
                text.stop().slideUp(300);
            }

        });

    });

})(jQuery);


















