(function($) {

    function createContextMenu(config) {
        var ul = $(`<ul></ul>`, {
            id: 'contextmenu',
            class: 'contextmenu',
            css: {
                display: 'none'
            },
            on: {
                click: function (e) {
                    e.stopPropagation();
                }
            }
        });

        $.each(config, function (key, val) {

            var li = $("<li></li>", {
                class: "contextmenu__item"
            });

            var a = $("<a></a>", {
                class: "contextmenu__link",
                text: key,
                href: val
            });

            ul.append(li.append(a));
        });

        $("body").append(ul);

        return ul;
    }

   $(document).ready(function() {

        var logo = $(".header__logo"),
            ul = null;

        var config = {
            "Logo w formacie SVG": "#svg",
            "Logo w formacie PNG": "#png",
            "Zip z logo": "#zip"
        };

        logo.on('contextmenu', function (e) {
            e.preventDefault();

            ul = ul || createContextMenu(config);

            ul.css({
                display: "",
                top: e.pageY,
                left: e.pageX
            });

            $(document).on('click', function () {
                ul.css("display", "none");
            })
        });



    });

})(jQuery);


















