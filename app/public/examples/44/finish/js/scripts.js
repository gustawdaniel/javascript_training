(function($) {

    // .ajaxComplete()
    // .ajaxError()
    // .ajaxSend()
    // .ajaxStart()
    // .ajaxStop()
    // .ajaxSuccess()

    $(document).ajaxStart(function(event, jqXHR, options) {

        var preloader = $("#preloader");

        if(!preloader.length) {
            preloader = $("<div></div>", {
                "id": "preloader",
                "class": "preloader"
            }).appendTo("body");
        }

        $("#preloader").fadeIn(500);

    });

    $(document).ajaxComplete(function() {

        $("#preloader").fadeOut(500);

    });

    $.ajaxSetup({
        url: "http://code.eduweb.pl/kurs-jquery/get_json.php",
        cache: false
    });

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output");

        button.on("click", function() {

            $.ajax({
                method: "GET",
                dataType: "text",
                success: function(data, status, jqXHR) {
                    output.text(data);
                }
            });

        });

    });

})(jQuery);


















