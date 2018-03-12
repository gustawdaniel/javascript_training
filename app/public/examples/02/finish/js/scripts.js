(function($) {

    $(document).ready(function() {

        var paragraphs = $("p");

        var headings = $(".heading");

        var button = $("#button");

        var links = $(".rte a");

        var lis = $(".rte ul > li");

        var pap = $(".rte p + p");

        var paul = $(".rte ul ~ p");

        var texts = $(".rte p, .rte ul, .rte .heading");

        texts.hl();

        console.log(paragraphs.length);

    });

})(jQuery);