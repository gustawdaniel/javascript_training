(function() {
// get list and container
var list = document.getElementsByClassName('list-group')[0];
var container = document.getElementsByClassName("container")[0];

$.getJSON('data/data.json', function (data) {

    // clone list into container as many products is minus one because of one exists initially
    for (var i = 0; i < data.products.length - 1; i++) {
        container.appendChild(list.cloneNode(true));
    }

    // iterate over products
    data.products.forEach(function (product, i) {
        // iterate over keys
        for (var key in product) {
            // set inner html properly to json structure
            document.getElementsByClassName(key)[i].innerHTML = product[key];
        }
    });

}).fail(function() {
    container.innerHTML = '<div class="alert alert-danger">Json has incorrect format or is unavailable.</div>';
});
})();