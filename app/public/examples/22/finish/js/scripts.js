(function($) {

    $(document).ready(function() {

        var figure = $(".rte figure");

        // figure.width(300);
        // figure.innerWidth(300);
        figure.outerWidth(300);

        var fWidth = figure.width(),
            fHeight = figure.height(),
            fInnerWidth = figure.innerWidth(),
            fInnerHeight = figure.innerHeight(),
            fOuterWidth = figure.outerWidth(true),
            fOuterHeight = figure.outerHeight(true);

        utils.log("Szerokość: " + fWidth);
        utils.log("Wysokość: " + fHeight);
        utils.log("Szerokość wewnętrzna: " + fInnerWidth);
        utils.log("Wysokość wewnętrzna: " + fInnerHeight);
        utils.log("Szerokość zewnętrzna: " + fOuterWidth);
        utils.log("Wysokość zewnętrzna: " + fOuterHeight);



    });

})(jQuery);


















