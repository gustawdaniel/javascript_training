(function($, window, document, undefined) {

    $.fn.highlight = function () {
        this.css({
            backgroundColor: "green"
        });
        return this;
    };

    $(document).ready(function() {

        $(".rte p, .rte li").highlight().css("font-size", "24px");

    });

})(jQuery, window, document);


















