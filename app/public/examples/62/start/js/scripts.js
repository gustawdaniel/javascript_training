(function($) {

   $(document).ready(function() {

        utils.log("Wersja jQuery to: " + $.fn.jquery);

    });

})(jQuery);

document.observe("dom:loaded", function() {

    utils.log("Wersja Prototype to: " + Prototype.Version);

});

















