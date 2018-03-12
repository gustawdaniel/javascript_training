(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output");

        button.on("click", function() {

            $.ajax({
                url: "http://code.eduweb.pl/kurs-jquery/get_json.php",
                method: "GET",
                dataType: "text",
                data: {
                    imie: "Tomasz",
                    wiek: 22
                },
                context: button,
                success: function(data, status, jqXHR) {
                    console.log("Żądanie zakończone sukcesem");
                    console.log(typeof data);
                    output.text(data);
                    console.log(status);
                    this.attr("disabled", "disabled");
                },
                error: function(jqXHR, status, errorThrown) {
                    console.log("Wystąpił błąd");
                    console.log(status);
                    console.log(errorThrown);
                },
                complete: function(jqXHR, status) {
                    console.log("Żądanie zakończone");
                    console.log(status);
                    console.log(jqXHR);
                }
            });

        });

    });

})(jQuery);


















