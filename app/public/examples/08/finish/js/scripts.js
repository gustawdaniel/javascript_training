(function($) {

    $(document).ready(function() {

        // var lis = document.querySelectorAll("li");

        // for(var i = 0; i < lis.length; i++) {

        //     lis[i].addEventListener("click", function() {

        //         alert("Kliknięty");

        //     });

        // }

        $("li").click(function() {

            alert("Kliknięty!");

        });

        // $("#button").bind("click", function() {

        //     alert("Kliknięty!");

        // });

        // $("#button").on("dblclick contextmenu", function() {

        //     alert("Kliknięty!");

        // });

        $("#button").on({
            "dblclick": function() {
                alert("Kliknięty dwukrotnie!");
            },
            "contextmenu": function() {
                alert("Kliknięty prawym przyciskiem!");
            }
        });

        // $("#button").on("click", fn).on("dbllick", fn2);

        $("#button").one("click", function() {

            console.log( $(this) );

        });

    });

})(jQuery);


















