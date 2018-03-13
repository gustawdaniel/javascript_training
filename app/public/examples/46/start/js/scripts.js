(function($) {

    function getName(ms) {

        var dfd = $.Deferred();

        setTimeout(function() {

            var name = prompt("Podaj swoje imię");

            if(name) {
                // fn1(name);
                // console.log("Podane imię to: " + name);
                dfd.resolve(name);
            } else {
                dfd.reject();
                // console.log("Nie podano imienia");
            }

        }, ms);

        return dfd;

    }

    $(document).ready(function() {

        getName(300).done(function (name) {
            console.log("Podane imię to: "+ name);
        }).fail(function () {
            console.log("Nie podano imienia.")
        });

    });

})(jQuery);


















