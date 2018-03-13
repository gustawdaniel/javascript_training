const fs = require("fs");
const { normalize } = require("path");
const http = require("http");
const httpShutdown = require("http-shutdown");
const express = require("express");
const app = express();
const server = httpShutdown( http.createServer(app) );
const { highlight: hljs } = require('highlight.js');
const config = getConfig();
const examplesPath = normalize(`${__dirname}/../examples/`);

const PORT = 3000;

function getConfig() {
    try {
        return JSON.parse( fs.readFileSync("config.json") );
    } catch(e) {
        console.log("Wystąpił błąd w pliku config.json");
        return process.exit(1);
    }
}

function setupVariables(obj) {
    "scripts noscript search error scriptContent scriptType scriptName noEmbed"
        .split(" ")
        .forEach(key => { if(obj[key] === undefined) obj[key] = false; });
}

app.set("view engine", "ejs");
app.disable("view cache");
app.use( express.static( normalize(`${__dirname}/public`) ) );

app.get("/", function(req, res) {

    res.redirect("/01");

});

app.get("/:example/:finish?", function(req, res, next) {

    let param = req.params.example,
        finish = req.params.finish,
        example = parseInt(param);

    if(param === "search") {
        return next();
    }

    if(!(/^((0[0-9])|([1-9][0-9])+)$/).test(param) || !config[example - 1]) {
        return res.redirect("/01");
    }

    let data = Object.assign({}, config[example - 1]);

    data.finish = finish === "finish";
    data.relativePath = normalize(`${data.example}${(data.finish ? "/finish/" : "/start/")}`);
    data.path = normalize(`${examplesPath}/${data.relativePath}`);

    if(!data.noscript) {
        try {
            data.scriptContent = fs.readFileSync(`${data.path}js/scripts.js`, { encoding: "utf8" });
            data.highlight = hljs;
        } catch(e) {
            data.scriptContent = false;
        }
    }

    setupVariables(data);

    res.render("pages/index", data, function(err, html) {
        if(err) {
            data.title = "Błąd renderowania szablonu";
            data.error = err.message;
            res.render("pages/index", data);
        } else {
            res.send(html);
        }
    });

});

app.get("/search", function(req, res) {

    let q = req.query.q;

    if(!q) {
        return res.redirect("/01");
    }

    let examples = config.filter( example => example.title.toLowerCase().includes( q.toLowerCase() ) );

    let data = {
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

app.use( express.static(examplesPath) );

server.listen(PORT, function() {
    console.log(`Aplikacja została uruchomiona pod adresem http://localhost:${PORT}\nAby ją zatrzymać, naciśnij CTRL+C`);
});

process.on("SIGINT", () => server.shutdown());