const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const css = require('gulp-uglifycss');
const htmlmin = require('gulp-htmlmin')

function html() {
    return gulp.src('./dest/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./'))
}

function adicionar() {
    return gulp.src('./style/style.css')
        .pipe(css())
        .pipe(autoprefixer({
            cascade: false,
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('style/'))
}

function arquivo() {
    return gulp.src('./webpack/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./'))
}

gulp.task('a', adicionar);
gulp.task('c', arquivo)
gulp.task('h', html)
