(function($) {

   $(document).ready(function() {

        var buttons = $(":button");

        var contains = $("a:contains('minima')");

        var secondLi = $(".rte ul li:eq(1)");

        var evenLi = $(".rte ul li:odd");

        var firstP = $("p:first");

        var liWithLink = $(".rte li:has(a)");

        var headings = $(":header:parent(.rte)");

        headings.hl();

    });

})(jQuery);