(function($) {

    $(document).ready(function() {

        // var button = document.createElement("button");

        // button = $(button);

        // var button = $("<button></button>");

        var button = $("<button class='button' disabled>Kliknij mnie</button>");

        button.addClass("button--inactive");

        // console.log(button);

        var link = $("<a></a>", {
            href: "http://eduweb.pl",
            text: "Kliknij mnie",
            on: {
                click: function() {
                    alert("Kliknięty!");
                }
            }
        });

        $("body").append(link);

    });

})(jQuery);


















