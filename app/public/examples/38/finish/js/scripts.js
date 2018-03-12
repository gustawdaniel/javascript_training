(function($) {

    if("placeholder" in document.createElement("input")) {
        return;
    }

    $(document).ready(function() {

        var form = $(".contact-form"),
            fields = form.find("[placeholder]");

        fields.each(function() {

            var field = $(this),
                placeholder = field.attr("placeholder");

            field.val(placeholder).addClass("placeholder");

            field.on("focus", function() {

                var val = field.val();

                if( val === placeholder ) {
                    field.val("").removeClass("placeholder");
                }

            });

            field.on("blur", function() {

                var val = field.val();

                if( $.trim(val) === "" ) {
                    field.val(placeholder)
                        .addClass("placeholder");
                }

            });

        });

        form.on("submit", function() {

            fields.each(function() {

                var field = $(this),
                    placeholder = field.attr("placeholder"),
                    val = field.val();

                if(val === placeholder) {
                    field.val("");
                }

            });

        });

    });

})(jQuery);


















