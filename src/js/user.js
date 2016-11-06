(function() {
    function checkLength(field,min,max) {
        var userText = field.value;
        if(userText.length >= min && userText.length <= max) {
            document.getElementById('login-error').innerHTML = '<br><div class="alert alert-success">Logged in correctly</div>';
            return true;
        } else {
            document.getElementById('login-error').innerHTML = '<br><div class="alert alert-danger">Username length must be between '+min+' and '+max+'.</div>';
            return false;
        }
    }

document.querySelectorAll("#con-login form")[0].onsubmit = function () {
    var name = document.getElementById("name");
    var pass = document.getElementById("pass");
    checkLength(name,3,12);
    console.log("form");
    return false;
};
})();

