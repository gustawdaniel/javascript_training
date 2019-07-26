const gulp = require('gulp'),
    del = require('del'),
    mode = require('gulp-mode')(),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');

const c = {
    src: "src",
    web: "web",
    bower: "bower_components",
    js: "/**/*js",
    css: "/**/*css"
};

const app = {};

app.addStyle = function (paths, filename) {
    gulp.src(paths)
        .pipe(plumber())
        .pipe(mode.development(sourcemaps.init()))
        .pipe(concat(filename))
        .pipe(mode.production(cleanCss()))
        .pipe(mode.development(sourcemaps.write('.')))
        .pipe(gulp.dest(c.web + '/css'))
        .pipe(connect.reload());
};

app.addScript = function (paths, filename) {
    gulp.src(paths)
        .pipe(plumber())
        .pipe(mode.development(sourcemaps.init()))
        .pipe(concat(filename))
        .pipe(mode.development(sourcemaps.write('.')))
        .pipe(gulp.dest(c.web + '/js'))
        .pipe(connect.reload());
};
//
app.copy = function (srcFiles, outputDir) {
    return gulp.src(srcFiles)
        .pipe(gulp.dest(outputDir));
};

gulp.task('styles', function (resolve) {
    app.addStyle([
        c.bower + '/tether/dist/css/tether.min.css',
        c.bower + '/bootstrap/dist/css/bootstrap.min.css',
        c.bower + '/font-awesome/css/font-awesome.min.css',
        c.src + c.css
    ], 'style.css');
    resolve();
});

gulp.task('scripts', function (resolve, reject) {
    try {
        app.addScript([
            c.bower + '/jquery/dist/jquery.min.js',
            c.bower + '/tether/dist/js/tether.min.js',
            c.bower + '/bootstrap/dist/js/bootstrap.min.js',
            c.src + c.js
        ], 'site.js');
    } catch (e) {
        reject(e);
    }
    resolve();
});

gulp.task('fonts', function (resolve) {
    app.copy(
        c.bower + '/font-awesome/fonts/*',
        c.web + '/fonts'
    );
    resolve();
});

gulp.task('data', function (resolve) {
    app.copy(
        c.src + '/data/*',
        c.web + '/data'
    ).pipe(connect.reload());
    resolve();
});

gulp.task('clean', function (resolve, reject) {
    try {
        [c.web + '/css', c.web + '/js', c.web + '/fonts', c.web + '/data'].forEach(path => del.sync(path));
    } catch (e) {
        reject(e);
    }
    resolve();
});

// gulp.task('webserver', function () {
//
//     gulp.src("php")
//         .pipe(p.webserver({
//             open: false,
//             port: 8040,
//         }));
// });

gulp.task('watch', function (resolve) {
    gulp.watch(c.src + c.scss, gulp.series(['styles']));
    gulp.watch(c.src + c.js, gulp.series(['scripts']));
    gulp.watch([c.web + '/*.html'], gulp.series(['html']));
    gulp.watch(['data/*.json'], gulp.series(['data']));
    resolve();
});

gulp.task('connect', function (resolve) {
    connect.server({
        root: c.web,
        livereload: true
    });
    resolve()
});

gulp.task('html', function (done) {
    gulp.src(c.web + '/*.html')
        .pipe(connect.reload());
});

// we removed shell
// gulp.task('server-mongo', p.shell.task([
//     'cd api && php -S localhost:8000 api.php &'
// ]));

gulp.task('build', gulp.series(['clean', 'styles', 'scripts', 'fonts', 'data']));
gulp.task('default', gulp.series(['build', 'connect', 'watch']));