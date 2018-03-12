(function($) {

   $(document).ready(function() {

        var MyPlugin = {

            message: $("#message"),
            button: $("#button"),

            sayHello: function() {

                this.message.text("Witaj!");

            },

            init: function() {

                var that = this;

                // this.button.on("click", function() {

                //     that.sayHello();

                // });

                // this.button.on("click", $.proxy(this.sayHello, this));
                this.button.on("click", this.sayHello.bind(this));

            }

        };

        MyPlugin.init();

    });

})(jQuery);


















