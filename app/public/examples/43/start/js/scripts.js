(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output");

        button.on("click", function() {

            $.ajax({
                url: "",
                success: function(data) {
                    output.text( JSON.stringify(data, null, 4) );
                }
            });

        });

    });

})(jQuery);


















