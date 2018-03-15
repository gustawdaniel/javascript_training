(function() {

    const api = "URL";
    const getName = function () {
        return "NAME";
    };

    try {
        // api = "xxx"
    } catch (e) {
        console.log(e.message);
    }

    console.log(api);
    console.log(getName());

})();