(function() {

    document.querySelector(".nav-item:last-child").classList.add("active");

    var list = document.querySelectorAll(".tab-pane");
    list.item(list.length-1).classList.add("active")


})();