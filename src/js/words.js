(function() {
    var list = document.querySelector("#con-words .list-group");
    var form = document.querySelector("#con-words form");

    // presentation of data
    $.get( "http://localhost:8000/words").done(function( data ) {

        console.log(data);

        for (var i = 0; i < data.words.length; i++) {
            list.innerHTML += '<li class="list-group-item" data-id="'+data.words[i].id+'">'+data.words[i].word+'</li>';
            // console.log(data.words[i]);
        }
    })
        .fail(function (xhr, status, err) {
            console.error(xhr, status, err);
        });

    $(form).submit(function(e) {

        var url = "http://localhost:8000/words"; // the script where you handle the form input.
        var data = {"word" : form.elements["word"].value };

        $.ajax({
            type: "POST",
            url: url,
            data: data, // serializes the form's elements.
            // contentType: 'application/json',
            dataType: 'json',
            success: function(data)
            {
                // console.log(JSON.stringify(data)); // show response from the php script.
                list.innerHTML += '<li class="list-group-item" data-id="'+data.words.id+'">'+data.words.word+'</li>';
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });

    list.addEventListener("click",function (e) {
        if(e.target && e.target.nodeName == "LI") {
            console.log(e.target.dataset.id + " was clicked");

            var url = "http://localhost:8000/words"; // the script where you handle the form input.

            $.ajax({
                type: "DELETE",
                url: url+"/"+e.target.dataset.id,
                data: {}, // serializes the form's elements.
                // contentType: 'application/json',
                dataType: 'json',
                success: function(data)
                {
                    console.log(JSON.stringify(data)); // show response from the php script.
                }
            });

            e.target.parentNode.removeChild(e.target);

            console.log("removed");

        }
    });


    // console.log(list.children);


})();