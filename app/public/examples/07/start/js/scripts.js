(function($) {

    console.timeStamp();

    console.time('DOMContentLoaded');
    console.time('Window Loaded');

    $(window).load(function () {
        console.timeEnd('Window Loaded');
    });

    $(document).ready(function () {
        console.timeEnd('DOMContentLoaded');
    });

})(jQuery);


















