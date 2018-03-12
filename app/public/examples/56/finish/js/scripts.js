(function($) {

   $(document).ready(function() {

        utils.log("Korzystasz z przeglądarki " + $.browser.name + " w wersji " + $.browser.versionNumber);

        if($.browser.mozilla) {
            utils.log("Korzystasz z przeglądarki Firefox");
        }

    });

})(jQuery);


















