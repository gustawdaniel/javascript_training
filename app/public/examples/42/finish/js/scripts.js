(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output"),
            form = $(".contact-form");

        button.on("click", function() {

            // $.get("", function(data) {
            //     output.text(data);
            // });

            // $.getJSON("http://code.eduweb.pl/kurs-jquery/get_json.php", function(data) {
            //     console.log(data);
            // });

            // $.getScript("http://code.eduweb.pl/kurs-jquery/js/hello.js");

        });

        form.on("submit", function(e) {

            e.preventDefault();

            var data = form.serialize();

            $.post(form.attr("action"), data, function(data) {
                utils.log(data, true);
            });

        });

    });

})(jQuery);


















