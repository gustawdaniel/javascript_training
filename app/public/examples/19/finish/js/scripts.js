(function($) {

    $(document).ready(function() {

        $("#openDiv").on("click", function(e) {

            e.preventDefault();

            var divId = $(this).attr("href");

            $(divId).css("display", "");

        });

        $(".rte a:has('img')").attr("title", "Powiększ obrazek");

        $(".rte a").removeAttr("title href");

        $("img").on("click", function() {

            if( $(this).is("[width]") ) {

            }

            $(this).attr({
                width: "200",
                height: "300"
            });

        });

        var img = $("<img>", {
            src: "/images/picture.jpg",
            width: 300
        });

        $(".rte").append(img);

    });

})(jQuery);


















