(function() {
    $(".nav li").on("click", function () {
    // $(".nav li").removeClass("active");
    $("#"+this.id.replace("nav","con")).attr('hidden', function (_, attr) { return !attr})
    $(this).toggleClass("active");
});
})();