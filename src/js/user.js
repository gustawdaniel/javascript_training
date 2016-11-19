(function() {

    var con = document.querySelector("#con-login"),
        form = con.querySelector("form"),
        name = form.querySelector("#name"),
        pass = form.querySelector("#pass"),
        message = con.querySelector("#login-error"),
        button = form.querySelector("input[type=submit]");

    button.removeAttribute("disabled");

    function checkLength(field,min,max) {
        var userText = field.value;
        if(userText.length >= min && userText.length <= max) {
            message.innerHTML = '<br><div class="alert alert-success">Logged in correctly</div>';
            return true;
        } else {
            message.innerHTML = '<br><div class="alert alert-danger">Username length must be between '+min+' and '+max+'.</div>';
            return false;
        }
    }

    function tryNtimes(fn, n) {
        var counter = 0;
        return function () {
            if(++counter > n) {
                throw new Error("Over maximal number of login click: "+n);
            }
            fn();
        };
    }

    var try3times = tryNtimes(function () {
        console.log("hej");
    }, 3);

    form.onsubmit = function () {
        console.log("form");
        try{
            try3times();
            checkLength(name,3,12);
        }catch (e){
            button.classList.remove("btn-primary");
            button.classList.add("btn-danger");
            button.value = e.message;
            message.innerHTML = "";
            console.log("error");
            button.setAttribute("disabled","true");
            console.log(e.message);
        }

        return false;
    };
})();

