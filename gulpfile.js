const { src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');

// File include Task
async function fileincludeTask(){
    return src(['*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./assets'));
}

// scss Task
async function scssTask(){
    return src('src/sass/**/*', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('assets/css', { sourcemaps: '.' }));
}

// css copy Task
async function cssTask(){
    return src('src/css/**/*', { sourcemaps: true })
        .pipe(postcss([cssnano()]))
        .pipe(dest('assets/css', { sourcemaps: '.' }));
}

// JavaScript Task
async function jsTask(){
    return src('src/js/*.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('assets/js', { sourcemaps: '.' }));
}

// Browsersync
function browsersyncServe(cb){
    browsersync.init({
        server: {
            baseDir: './assets'
        },
        open: false,
        notify: false
    });
    cb();
}

// Browsersync reload
function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

// Copy images
async function copyImages() {
    return src(['src/img/**/*'])
        .pipe(dest('assets/img'));
}

// Copy fonts
async function copyFonts() {
    return src(['src/fonts/**/*'])
        .pipe(dest('assets/fonts'));
}

// Copy media
async function copyMedia() {
    return src(['src/media/**/*'])
        .pipe(dest('assets/media'));
}

// Default Gulp Task
exports.default = series(
    scssTask,
    cssTask,
    jsTask,
    fileincludeTask,
    browsersyncServe,
    copyImages,
    copyFonts,
    copyMedia,
    watchTask
);

// Watch Task
function watchTask(){
    watch('src/sass/**/*', series(scssTask, browsersyncReload));
    watch('src/css/**/*', series(cssTask, browsersyncReload));
    watch('src/js/*.js', series(jsTask, browsersyncReload));
    watch('src/img/**/*', series(copyImages, browsersyncReload));
    watch('src/fonts/**/*', series(copyFonts, browsersyncReload));
    watch('src/media/**/*', series(copyMedia, browsersyncReload));
    watch(['*.html', 'components/*.html'], series(fileincludeTask, browsersyncReload));
}