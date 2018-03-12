(function($) {

    $(document).ready(function() {

        $(".bxslider").bxSlider({
            auto: true,
            pause: 4000,
            controls: false
        });

        $("a.projects__link").lightbox();

    });

})(jQuery);


















