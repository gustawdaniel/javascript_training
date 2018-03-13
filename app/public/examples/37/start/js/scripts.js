(function($) {

    $(document).ready(function() {

        var form = $(".contact-form");

        form.on("submit", function(e) {

            e.preventDefault();

            var serialize = form.serialize();

            utils.log(serialize)


        });

    });

})(jQuery);


















