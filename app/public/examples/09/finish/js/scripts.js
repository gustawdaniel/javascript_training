(function($) {

    $(document).ready(function() {

        function message() {

            alert("Kliknięty!");

            $(this).off("click", message);

        }

        // $("#button").bind("click", function() {

        //     alert("Klinięty!");

        //     $(this).unbind("click");

        // });

        $("#button").on("click", message).on("click", function() {

            alert("Zupełnie inna funkcja!");

        });

    });

})(jQuery);


















