(function($) {

    function getName(ms) {

        var dfd = $.Deferred();

        setTimeout(function() {

            var name = prompt("Podaj swoje imię");

            if(name) {
                dfd.resolve(name);
            } else {
                dfd.reject();
            }

        }, ms);

        return dfd.promise();

    }

    $(document).ready(function() {

        var dfd = getName(3000);

        // dfd.then(fn1, fn2, fn3);

        dfd.done(function(name) {
            console.log("Podane imię to: " + name);
        }).fail(function() {
            console.log("Nie podano imienia");
        }).always(function() {
            console.log("Nie wiem co się stało :)");
        });

        setTimeout(function() {
            dfd.reject();
        }, 1000);

    });

})(jQuery);


















