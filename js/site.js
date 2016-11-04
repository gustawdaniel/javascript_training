var data = {
    "products" : [
        {
            "name" : "JavaScript",
            "price": 60,
            "category": "web"
        },{
            "name" : "Mysql",
            "price": 55,
            "category": "programing"
        },{
            "name" : "C++",
            "price": 85,
            "category": "programing"
        },{
            "name" : "MongoDB",
            "price": 65,
            "category": "programing"
        }
    ]
};

// get list and container
var list = document.getElementsByClassName('list-group')[0];
var container = document.getElementsByClassName("container")[0];

// clone list into container as many products is minus one because of one exists initially
for(var i=0; i<data.products.length - 1; i++) {
    container.appendChild(list.cloneNode(true));
}

// iterate over products
data.products.forEach(function (product, i) {
    // iterate over keys
    for(var key in product){
        // set inner html properly to json structure
        document.getElementsByClassName(key)[i].innerHTML = product[key];
    }
});
