const  { spawn } = require("child_process");
const { normalize } = require("path");
const gulp = require("gulp");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();

const PORT = 3000;

gulp.task("server", function() {

    const appServer = spawn("node", ["index"]);

    appServer.on("exit", function(code) {
        if(code === 1) {
            throw new Error("Wystapił błąd w pliku index.js");
        }
        process.exit(1);
    });

    process.on("SIGINT", () => appServer.kill("SIGINT"));

    browserSync.init({
        port: PORT + 1,
        proxy: `localhost:${PORT}`,
        open: false,
        notify: false
    }, () => console.log("Aby zatrzymać serwer, naciśnij CTRL+C"));

});

gulp.task("watch", function() {

    watch("./public/css/*.css", (e) => gulp.src(e.path).pipe( browserSync.stream() ));
    watch(["../examples/**/*.html", "../examples/**/*.js"], { ignored: /node_modules/ }, () => browserSync.reload());

});

gulp.task("default", ["server", "watch"]);