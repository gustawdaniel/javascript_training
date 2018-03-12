(function($) {

   $(document).ready(function() {

        var withTitle = $("[title]");

        var blank = $("a[href='#']");

        var eduwebLinks = $(".rte a[href*='eduweb']");

        var zoomLink = $("a[title~='Powiększ']");

        var pictureLink = $("a[href$='.jpg']");

        var notBlank = $("a[href!='#']");

        var externalLinks = $("a[href^='http']");

        var notTitle = $("h2:not('.page-title')");

        var buttonDisabled = $("button:disabled");

        buttonDisabled.hl();

    });

})(jQuery);