(function () {

    //defining anchors
    var con = document.querySelector("#con-counter"),
        par = con.querySelector("p"),
        textarea = con.querySelector("textarea"),
        button = con.querySelector("button"),
        list = con.querySelector(".list-group"),
        template = con.querySelector(".template");

    //methods
    function generateTable(array) {
        array.forEach((el) => {
            var row = template.cloneNode(true);
            row.classList.remove("template");
            row.childNodes[0].innerHTML=el.word;
            row.childNodes[1].innerHTML=el.count;

            switch(el.count) {
                case 4:
                    row.childNodes[1].classList.add("tag-danger");
                    break;
                case 3:
                    row.childNodes[1].classList.add("tag-primary");
                    break;
                case 2:
                    row.childNodes[1].classList.add("tag-success");
                    break;
                default:
                    row.childNodes[1].classList.add("tag-info");
            }

            list.appendChild(row);
        });

    }

    function generateArr(string) {
        var res = [];

        var dict = string.replace(/\.|,/g,'') // remove interpunkcy
            .replace(/\s+$/,'')
            .split(/\s+/)
            .reduce((map, word) =>
                    Object.assign(map, {
                        [word]: (map[word])
                            ? map[word] + 1
                            : 1,
                    }),
                {}
            );

        Object.keys(dict).forEach((k) => {
            res.push({"word":k,"count":dict[k]});
        });

        return res.sort((a,b)=>{return - a["count"] + b["count"]});
    }

    function process() {
        generateTable(generateArr(par.innerHTML));
    }

    //on loading
    process();



    //listeners
    button.addEventListener("click",(e)=>{
        par.innerHTML = textarea.value;
        list.innerHTML = "";
        process();
    });

})();