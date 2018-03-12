(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output");

        button.on("click", function() {

            var clientId = 223;

            $.get("http://code.eduweb.pl/kurs-jquery/get_name.php?client_id=" + clientId);
            $.get("http://code.eduweb.pl/kurs-jquery/get_tel.php?client_id=" + clientId);
            $.get("http://code.eduweb.pl/kurs-jquery/get_email.php?client_id=" + clientId);

        });

    });

})(jQuery);


















