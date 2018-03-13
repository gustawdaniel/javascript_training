(function($) {

   $(document).ready(function() {

        var objects = [
            {
                "name": "Jan",
                "age": 33
            },
            {
                "name": "Agata",
                "age": 20
            },
            {
                "name": "Tomasz",
                "age": 50
            },
            {
                "name": "Karolina",
                "age": 20
            },
            {
                "name": "Anna",
                "age": 42
            }
        ];

        var age20 = null;

        // for(var i = 0; i < objects.length; i++) {
        //
        //     if(objects[i].name === "Agata") {
        //         continue;
        //     }
        //
        //     if(objects[i].age === 20) {
        //         age20 = objects[i];
        //         break;
        //     }
        //
        // }

       $.each(objects, function (i, obj) {
           if (obj.name === "Agata") {
               return true;
           }
           if (obj.age === 20) {
               age20 = obj;
               return false;
           }
       });

        utils.log(age20);

    });

})(jQuery);


















