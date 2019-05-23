(function () {

    const con = document.querySelector("#con-ajax");
    const url = "http://127.0.0.1:3000/people";

    const girls = [
        "Anna","Basia","Kasia","Ola","Agusia","Magda","Sylwia","Melania","Natalia"
    ];

    function getRandom(arr,modify=false,excluded=[]) {
        if(excluded.length){
            excluded.forEach((el)=>{
                let ind = arr.indexOf(el);
                if(ind > -1){
                    arr.splice(ind,1);
                }
            })
        }
        // console.log(arr);
        var ind = Math.floor(Math.random()*arr.length);
        var rand = arr[ind];
        if(modify){
            arr.splice(ind,1);
        }
        return rand;
    }


    function getNamesFromData(data) {
        let names = [];
        data.forEach((el)=>{names.push(el.name)});
        return names;
    }


    $.get(url,(data)=>{
        $.ajax({
            url:url+"/"+getRandom(data,true).id,
            method:"DELETE"
        }).done(function (msg) {
            $.post(url,{name:getRandom(girls,false,getNamesFromData(data))}).done((res)=>{
                data.push(res);
                con.appendChild((function (ul) {
                    ul.classList.add("list-group");
                    data.forEach((el)=>{
                        ul.appendChild((function (li) {
                            li.classList.add("list-group-item");
                            li.innerHTML = el.name+'<span class="pull-right">'+el.id+'</span>';
                            return li;
                        })(document.createElement("li")))
                    });
                    return ul;
                })(document.createElement("ul")))
            });
        });
    });

    // N = 9 - options
    // k = 4 - slots
    // manners - 9^4 = V
    // not repetitive - 9*8*7*6 = C
    // probability of repetition = 1 - C/V = 0.53

})();