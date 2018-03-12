(function($) {

    $(document).ready(function() {

        var form = $(".contact-form");

        form.on("submit", function(e) {

            e.preventDefault();

            // var serialized = form.serialize();
            var serialized = form.serializeArray();

            utils.log(serialized, true);

        });

    });

})(jQuery);


















