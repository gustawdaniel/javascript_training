(function($) {

    $(document).ready(function() {

        function appendImage(url) {

            var img = $("<img>", {
                src: url,
                css: {
                    width: "25%",
                    float: "left",
                    opacity: 0
                }
            });

            $(".rte").append(img);
            img.animate({
                opacity: 1
            }, 500);

        }

        var imgs = [
            "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
        ];

        $.each(imgs, function(i, url) {

            appendImage(url);

        });

    });

})(jQuery);


















