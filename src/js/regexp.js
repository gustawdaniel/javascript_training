(function () {

    var container = document.querySelector("#con-regexp");
    var input = container.querySelector("input");
    var progress = container.querySelector("progress");
    var message = container.querySelector(".alert");
    var code = container.querySelector("pre");
    // var regexp = /^[0-9]{6,12}$/;
    var regexp = /^(\+\d{2})?\s?(\d{3}(-| )?){3}$/; // phone number

    // green/red border http://
    input.addEventListener("change", (e) => {
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

    // placeholder on focus
    let setPlaceholderOn = function(event,text="") {
        input.addEventListener(event,(e) =>{
            e.target.setAttribute("placeholder", text);
        });
    };

    setPlaceholderOn("focus", "Introduce address with http://");
    setPlaceholderOn("blur");


    // progres bar on click


    function checkRegexp (input) {
            progress.value = 2*input.value.length;
            if(input.value.match(regexp)){
                message.classList.add("alert-success");
                message.classList.remove("alert-danger");
                message.innerHTML="Succes";
            } else {
                message.classList.remove("alert-success");
                message.classList.add("alert-danger");
                message.innerHTML="Fail";
            }
    }

    // console.log("2");


    code.innerHTML=regexp;
    ["keyup","focus"].forEach((e)=>{
        input.addEventListener(e,(e)=>{
            checkRegexp(e.target);
        })
    });

    window.addEventListener("load", function load(event){
        window.removeEventListener("load", load, false); //remove listener, no longer needed
        checkRegexp(input)
    },false);
})();