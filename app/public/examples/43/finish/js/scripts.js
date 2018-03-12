(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output");

        button.on("click", function() {

            $.ajax({
                url: "http://code.eduweb.pl/kurs-jquery/get_jsonp.php",
                dataType: "jsonp",
                jsonp: "callback",
                success: function(data) {
                    output.text( JSON.stringify(data, null, 4) );
                }
            });

        });

    });

})(jQuery);


















