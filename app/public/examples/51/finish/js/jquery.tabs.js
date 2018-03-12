(function($, window, document, undefined) {

    $.fn.tabs = function() {

        return this.each(function() {

            var that = $(this),
                tabsNav = that.find(".tabs-nav__item"),
                tabsItems = that.find(".tabs__item"),
                activeClass = "tabs-nav__item--active";

            tabsNav.first().addClass(activeClass);
            tabsItems.not(":first").hide();

            tabsNav.on("click", function() {

                var tabNav = $(this),
                    index = tabNav.index();

                if( tabNav.hasClass(activeClass) ) {
                    return;
                }

                tabsNav.removeClass(activeClass);
                tabNav.addClass(activeClass);

                tabsItems.hide()
                    .eq(index).fadeIn(500);

            });

        });

    };

})(jQuery, window, document);