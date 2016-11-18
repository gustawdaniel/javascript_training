(function () {

    var form = document.querySelector("#con-form input");

    form.addEventListener("change", (e) => {
        let url = e.target.value;

        let cl = function(url, f = (a)=>a) {
            return f(url.indexOf('http://')) ? "has-error" : "has-success"
        };

        e.target.parentNode.classList.add(cl(url));
        e.target.parentNode.classList.remove(cl(url,(a)=>!a));

        console.log(cl(url));
        console.log(cl(url,(a)=>!a));

        console.log(url);
    });

    let setPlaceholderOn = function(event,text="") {
        form.addEventListener(event,(e) =>{
            e.target.setAttribute("placeholder", text);
        });
    };

    setPlaceholderOn("focus", "Introduce address with http://");
    setPlaceholderOn("blur");

})();