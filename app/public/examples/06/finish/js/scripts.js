(function($) {

   $(document).ready(function() {

        var ul = $(".rte ul");

        var lis = ul.children("li");

        var firstLi = lis.first();

        // firstLi.next().prev().hl();

        var nextAll = firstLi.nextAll();

        var nextUntil = firstLi.nextUntil(":last-child");

        var parent = firstLi.parent();

        var parents = firstLi.parents();

        var parentsUntil = firstLi.parentsUntil(".rte");

        var closestDiv = firstLi.closest("div");

    });

})(jQuery);


















