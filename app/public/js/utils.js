(function($) {

    var utils = {};

    utils.log = function(data, clear) {

        var output = $("#output"),
            type = $.type(data),
            str = data;

        if(clear) {
            output.text("");
        }

        if(type === "object" || type === "array") {
            str = JSON.stringify(data, null, type === "object" ? 4 : 0);
        }

        output.text(output.text() + str + "\n");

        console.log(data);

    };

    $.fn.hl = function() {

        return this.each(function() {

            var that = $(this),
                bgc = that.css("background-color");

            that.css({
                "background-color": "#F8BBC6",
                "margin-bottom": "2px"
            });

            if( (bgc !== "rgba(0, 0, 0, 0)" && bgc !== "transparent") || that.is("a:has(img)") ) {
                that.css("outline", "2px rgba(255, 0, 0, 0.5) solid");
            }

            console.log(that);

        });

    };

    window.utils = utils;

})(jQuery);