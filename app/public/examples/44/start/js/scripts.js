(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output");

        button.on("click", function() {

            $.ajax({
                url: "http://code.eduweb.pl/kurs-jquery/get_json.php",
                method: "GET",
                dataType: "text",
                success: function(data, status, jqXHR) {
                    output.text(data);
                }
            });

        });

    });

})(jQuery);


















