let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let rename = require('gulp-rename');

let scssSrcFile = 'src/theme/flat-green/flat-green.scss';
let tmplSrcFile = 'src/tmpl/site/flat-green/flat-green.tmpl';
let themeDistDir = 'dist/theme/flat-green';
let tmplDistDir = 'dist/tmpl/site/flat-green';
let smartphoneTmplFileName = 'flat-green_smartphone.tmpl';

function buildStyles() {
    return gulp.src(scssSrcFile)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(themeDistDir));
}

function buildTmpl() {
    gulp.src(tmplSrcFile)
    .pipe(gulp.dest(tmplDistDir));
    gulp.src(tmplSrcFile)
    .pipe(rename(smartphoneTmplFileName))
    .pipe(gulp.dest(tmplDistDir));
}

function build(done) {
    buildStyles();
    buildTmpl();
    done();
}

function watch(done) {
    gulp.watch([scssSrcFile, tmplSrcFile], gulp.task(['build']));
    done();
}

exports.build = build;
exports.watch = watch;
exports.default = gulp.series(build);
