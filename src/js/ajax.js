(function () {

    function AJAX(config) {

        if(!(this instanceof AJAX)) {
            return new AJAX(config);
        }

        this._xhr = new XMLHttpRequest();
        this._extendOptions();

    }

    AJAX.prototype._extendOptions = function(config = {}) {

        var defaultConfig = JSON.parse(JSON.stringify(this._defaultConfig));

        for (var key in defaultConfig){

            if(config.hasOwnProperty(key)) {
                defaultConfig[key] = config[key];
            }
        }
        return defaultConfig;
    };

    AJAX.prototype._defaultConfig = {
        type: "GET",
        url: window.location.href,
        data: {},
        options: {
            async: true,
            timeout: 0,
            username: null,
            password: null
        },
        headers: {}
    };

    console.dir(AJAX({
        type: "POST",
        url: "127.0.0.1:3000/people",
        data: {
            name: "Agusia"
        },
        headers: {
            "X-My-Header": "123#asdf"
        },
        success: function (response, xhr) {
            console.log("Udało się! Status: "+ xhr.status);
        },
        failure: function (xhr) {
            console.log("Wystąpił błąd. Status: "+xhr.status);
        }
    }))


})();