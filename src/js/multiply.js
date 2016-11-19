(function () {

    var con = document.getElementById("con-multiply");

    function jTransform(j) {
        return j+1;
    }

    function iTransform(i) {
        return i+1;
    }

    function finalTransform(i,j) {
        return i*j;
    }

    var resp = document.createElement("div");
    var tab = document.createElement("table");
    var tableHead = document.createElement("thead");
    var tableBody = document.createElement("tbody");

    for(var i=0; i<10; i++){
        var row = document.createElement("tr");
        for(var j=0; j<10; j++){
            var cell = document.createElement(i*j==0 ? "th" : "td");
            var cellContent = document.createTextNode(
                finalTransform(
                    iTransform(i),
                    jTransform(j)
                )
            );

            cell.appendChild(cellContent);
            row.appendChild(cell);
        }
        (i==0 ? tableHead : tableBody).appendChild(row);
    }
    tab.appendChild(tableHead);
    tab.appendChild(tableBody);
    resp.appendChild(tab);
    con.appendChild(resp);

    resp.classList.add("table-responsive");
    tab.classList.add("table");
    tab.classList.add("table-bordered");
    tab.classList.add("table-hover");



    con.appendChild((function (e) {
        e.innerHTML = "code generated and styled in anonymous function";
        e.classList.add("bg-success");
        e.style.color = "white";
        e.style.border = "none";
        return e;
    })(document.createElement("pre")));

})();