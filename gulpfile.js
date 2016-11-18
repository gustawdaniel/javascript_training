var gulp = require('gulp');
var p = require('gulp-load-plugins')();
const del = require('del');

var c = {
    src: "src",
    web: "web",
    bower: "bower_components",
    js: "/**/*js",
    scss: "/**/*scss",

    production: !!p.util.env.production,
    sourceMaps: !p.util.env.production
};

var app = {};

app.addStyle = function (paths, filename) {
    gulp.src(paths)
        .pipe(p.plumber())
        .pipe(p.if(c.sourceMaps,p.sourcemaps.init()))
        .pipe(p.sass())
        .pipe(p.concat(filename))
        .pipe(c.production ? p.cleanCss() : p.util.noop())
        .pipe(p.if(c.sourceMaps,p.sourcemaps.write('.')))
        .pipe(gulp.dest(c.web+'/css'))
        .pipe(p.connect.reload());
};

app.addScript = function (paths, filename) {
    gulp.src(paths)
        .pipe(p.plumber())
        .pipe(p.if(c.sourceMaps,p.sourcemaps.init()))
        .pipe(p.concat(filename))
        .pipe(c.production ? p.uglify() : p.util.noop())
        .pipe(p.if(c.sourceMaps,p.sourcemaps.write('.')))
        .pipe(gulp.dest(c.web+'/js'))
        .pipe(p.connect.reload());
};
//
app.copy = function (srcFiles, outputDir) {
    return gulp.src(srcFiles)
        .pipe(gulp.dest(outputDir));
};

gulp.task('styles', function () {
    app.addStyle([
        c.bower+'/tether/dist/css/tether.min.css',
        c.bower+'/bootstrap/dist/css/bootstrap.min.css',
        c.bower+'/font-awesome/css/font-awesome.min.css',
        c.src+c.scss
    ],'style.css');
});

gulp.task('scripts', function () {
    app.addScript([
        c.bower+'/jquery/dist/jquery.min.js',
        c.bower+'/tether/dist/js/tether.min.js',
        c.bower+'/bootstrap/dist/js/bootstrap.min.js',
        c.src+c.js
    ],'site.js');
});

gulp.task('fonts', function () {
    app.copy(
        c.bower+'/font-awesome/fonts/*',
        c.web+'/fonts'
    )
});

gulp.task('data', function () {
    app.copy(
        c.src+'/data/*',
        c.web+'/data'
    ).pipe(p.connect.reload());
});

gulp.task( 'clean', function() {
    del([
        c.web+'/css',
        c.web+'/js',
        c.web+'/fonts',
        c.web+'/data'
    ])
});

gulp.task('webserver', function() {
    gulp.src(c.web)
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true,
            defaultFile: c.web+'/index.html'
        }));
});

gulp.task('watch', function () {
    gulp.watch(c.src+c.scss, ['styles']);
    gulp.watch(c.src+c.js, ['scripts']);
    gulp.watch([c.web+'/*.html'], ['html']);
    gulp.watch(['data/*.json'], ['data']);
});

gulp.task('connect', function() {
    p.connect.server({
        root: c.web,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src(c.web+'/*.html')
        .pipe(p.connect.reload());
});

gulp.task('build', ['clean', 'styles', 'scripts', 'fonts', 'data',]);
gulp.task('default', ['build', 'connect', 'watch']);