function getConfig() {

    try {
        return JSON.parse( fs.readFileSync("config.json") );
    } catch(e) {
        console.log("Wystąpił błąd w pliku config.json");
        return process.exit(1);
    }

}

function setupVariables(obj) {

    var list = ["example", "title", "className", "scripts", "noscript", "page", "finish", "search"];

    list.forEach(function(key) {
        if(obj[key] === undefined) {
            obj[key] = false;
        }
    });

}

var fs = require("fs"),
    express = require("express");
    app = express();

app.set("view engine", "ejs");
app.disable("view cache");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {

    res.redirect("/01");

});

app.get("/:example/:finish?", function(req, res, next) {

    var param = req.params.example;

    if(param === "search") {
        return next();
    }

    var finish = req.params.finish,
        example = parseInt(param),
        config = getConfig();

    if(!(/^((0[0-9])|[1-9][0-9]+)$/).test(param) || !config[example - 1]) {
        return res.redirect("/01");
    }

    var data = Object.assign({}, config[example - 1]),
        page = parseInt(req.query.page);

    if(!isNaN(page) && page > 1) {
        data.page = page;
    }

    if(finish === "finish") {
        data.finish = true;
    }

    data.path = "/examples/" + data.example + (data.finish ? "/finish/" : "/start/");
    data.filename = (data.page ? "index-" + data.page : "index") + ".html";

    setupVariables(data);

    if(page) {
        setTimeout(function() {
            res.render("pages/index", data);
        }, 1500);
    } else {
        res.render("pages/index", data);
    }

});

app.get("/search", function(req, res) {

    var q = req.query.q;

    if(!q) {
        return res.redirect("/01");
    }

    var config = getConfig();

    var examples = config.filter(function(example) {
        return example.title.toLowerCase().indexOf( q.toLowerCase() ) !== -1;
    });

    var data = {
        title: "Wyniki wyszukiwania",
        search: true,
        found: examples.length ? true : false,
        examples: examples.length ? examples : config,
        noscript: true,
        term: q
    };

    setupVariables(data);

    res.render("pages/index", data);

});

app.listen(3000, function() {

    console.log("Aplikacja została uruchomiona pod adresem http://localhost:3000\nAby ją zatrzymać wciśnij CTRL+C");

});