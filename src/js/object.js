(function () {

    var con = document.querySelector("#con-object");

    con.appendAsserts = function (arr) {
        // let state =  :


            arr.forEach((el) => {
                // console.log(el);
                // console.log(eval(el));

                con.appendChild((function (e) {
                    e.innerHTML = "Test: [["+ el + "]] evaluated with " + (eval(el) ? "success" : "error");
                    e.classList.add(eval(el) ? "bg-success" : "bg-danger");
                    e.style.color = "white";
                    e.style.border = "none";
                    return e;
                })(document.createElement("pre")));
        });


    };




    function Shape(sideLengths) {
        // usage without new keyword is possible now
        if( !(this instanceof Shape)){
            return new Shape(sideLengths);
        }

        this._name = "Figure";
        this._sideLengths = sideLengths;
    }

    Shape.prototype.getPerimeter = function () {
        return this._sideLengths.reduce((a,b)=>{return a+b});
    };

    Shape.prototype.toString = function () {
        return this._name;
    };





    function Rectangle(sideLengths) {
        Shape.call(this,[].concat.apply([],[sideLengths,sideLengths]));
        this._name = "Rectangle";
    }

    Rectangle.prototype = Object.create(Shape.prototype);

    Rectangle.prototype.getArea = function () {
        return this._sideLengths.splice(0,2).reduce((a,b)=>{return a*b});
    };





    function Square(sideLength) {
        Rectangle.call(this,[sideLength,sideLength]);
        this._name = "Square";
    }

    Square.prototype = Object.create(Rectangle.prototype);





    function Triangle(sideLength) {
        Shape.call(this,[sideLength,sideLength,sideLength]);
        this._name = "Triangle";
    }

    Triangle.prototype = Object.create(Shape.prototype);


    Triangle.prototype.getArea = function () {
        var a = this._sideLengths[0];
        return ((a*a*Math.sqrt(3))/4);
    };






    var sh1 = Shape([2]), // usage without new keyword is tested
        sh2 = new Shape([2,3,4,5,6,7,8,9]),
        rec = new Rectangle([1,2]),
        sqr = new Square(8),
        tri = new Triangle(1);

    var asserts = [
        "sh1 instanceof Shape",
        "sh1 instanceof Square == false",
        "sh1.getPerimeter() < sh2.getPerimeter()",
        "\"_name\" in sh1",
        "rec instanceof Triangle == false",
        "rec instanceof Square == false",
        "rec instanceof Shape == true",
        "rec instanceof Rectangle == true",
        "sqr.getArea() == 64",
        "tri.getArea() < 0.5",
        "tri.getPerimeter() == 3",
        "tri+'' == \"Triangle\"",
        "true == true",
        "false == true"
    ];

    con.appendAsserts(asserts);


    function d(o) {
        console.dir(o);
    }

    // console.log(sh1);

    // properties and methods
    // for(var key in sh1) {
    //     console.log(key);
    // }

    // properties only
    for(let key in sh1) {
        if(!sh1.hasOwnProperty(key)){ continue; }
        // console.log(key);
    }
    //
    // for (i = 0; i < 10; i++) {
    //     if (i === 3) { continue; }
    //     console.log(i);
    // }

    function appendFrameWithText(str) {
        // console.log(this);
        this.appendChild((function (el) {
            el.appendChild((function (el) {
                el.classList.add("card-block");
                el.innerHTML = str;
                return el;
            })(document.createElement("div")));
            el.classList.add("card");
            return el;
        })(document.createElement("div")))
    }

    appendFrameWithText.call(con,"Usage of call example...");


    function bind(fn, obj) {
        var args = Array.prototype.slice.call(arguments,2);

        return function () {
            fn.apply(obj,args);
        }
    }










})();