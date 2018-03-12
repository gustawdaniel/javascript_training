(function($) {

   $(document).ready(function() {

        var MyPlugin = {

            message: $("#message"),
            button: $("#button"),

            sayHello: function() {

                this.message.text("Witaj!");

            },

            init: function() {

                this.button.on("click", this.sayHello);

            }

        };

        MyPlugin.init();

    });

})(jQuery);


















