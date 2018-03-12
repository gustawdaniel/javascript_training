(function($) {

    $(document).ready(function() {

        var button = $("#button");

        button.on("click", function() {
            console.log("Kliknięty!");
        });

        button.find("span").on("click", function(e) {
            console.log("Kliknięty span!");
        });

        // $(".rte").prepend(button);
        // $(".rte").prepend( button.clone(true, false) );

        // $("<div>Treść</div>").replaceAll(".rte p");
        // $(".rte p").replaceWith("<div>tresc</div>");

        // $(".rte p").replaceWith(function() {
        //     return "<div>" + $(this).text() + "</div>";
        // });

        // $(".rte p").wrap("<div></div>");
        $(".rte p").wrap(function(i) {
            return $("<div></div>", {
                "class": "text-" + (i + 1)
            });
        });

        // $(".rte p").wrapAll("<div></div>");
        $(".rte ul li").wrapInner("<strong></strong>");

        $(".rte p").unwrap();

    });

})(jQuery);


















