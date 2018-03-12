(function($) {

   $(document).ready(function() {

        var rte = $(".rte");

        var links = rte.find("a");

        var externalLinks = links.filter("[href^='http']");

        var longP = rte.find("p").filter(function(i, elem) {

            return $(elem).text().length > 100;

        });

        longP.hl();

    });

})(jQuery);


















