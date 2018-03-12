(function($) {

    function getName(ms) {

        setTimeout(function() {

            var name = prompt("Podaj swoje imię");

            if(name) {
                fn1(name);
                console.log("Podane imię to: " + name);
            } else {
                fn2();
                console.log("Nie podano imienia");
            }

        }, ms);

    }

    $(document).ready(function() {

        getName(300);

    });

})(jQuery);


















