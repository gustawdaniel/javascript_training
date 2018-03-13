(function($) {

    function preload(urls) {
        var dfd = $.Deferred(),
            length = urls.length,
            counter = 0;

        $.each(urls, function (i, url) {
            var img = $("<img>");
            img.on("load", function () {
                counter++;
                dfd.notify(url, counter, length);
                if(counter === length) {
                    dfd.resolve(urls);
                }
            });

            img.on("error", function () {
                length--;
                dfd.notify(null, counter, length);
                if(counter === length) {
                    dfd.resolve(urls);
                }
            });

            img.attr("src", url);
        });

        return dfd;
    }

    $(document).ready(function() {

        function appendImage(url) {

            var img = $("<img>", {
                src: url,
                css: {
                    width: "25%",
                    float: "left",
                    opacity: 1
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
            "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-5.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-6.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-7.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-8.jpg"
        ];



        preload(imgs).then(
            function (imgs) {
                // $.each(imgs, function(i, url) {
                //     appendImage(url);
                // });
            },
            function () {

            },
            function (url, counter, length) {
                $("#progress").stop().animate({
                    width: (100*counter/length)+"%"
                },300);
                appendImage(url);
            }
        )

    });

})(jQuery);


















