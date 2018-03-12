(function($) {

    $(document).ajaxStart(function(event, jqXHR, options) {

        var preloader = $("#preloader");

        if(!preloader.length) {
            preloader = $("<div></div>", {
                "id": "preloader",
                "class": "preloader"
            }).appendTo("body");
        }

        $("#preloader").fadeIn(500);

    });

    $(document).ajaxComplete(function() {

        $("#preloader").fadeOut(500);

    });

    $(document).ready(function() {

        var projects = $("#projects"),
            links = $("a.pagination__link"),
            projectsLinks = $("a.projects__link");

        projects.on("click", "a.pagination__link", function(e) {

            e.preventDefault();

            var page = $(this).attr("href");

            projects.load(page + " .projects, .pagination", function() {

                $("html, body").animate({
                    scrollTop: projects.offset().top - 30
                }, 300);

                $("a.projects__link").lightbox();

            });

        });

        projectsLinks.lightbox();

    });

})(jQuery);


















