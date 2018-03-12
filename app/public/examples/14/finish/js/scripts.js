(function($) {

    $(document).ready(function() {

        function getInactiveClass(i, currentClass) {

            var firstClass = currentClass.split(" ")[0];

            console.log(firstClass);

            return firstClass + "--inactive";

        }

        var button = $("#button");

        button.on("click", function() {

            // if( button.hasClass("button--inactive") ) {
            //     button.removeClass("button--inactive");
            // } else {
            //     button.addClass("button--inactive");
            // }

            // button.toggleClass("button--inactive");

            button.addClass(getInactiveClass);

        });

    });

})(jQuery);


















