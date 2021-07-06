const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function adicionar() {
    return gulp.src('/style/style.css')
        .pipe(autoprefixer({
            cascade: false,
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('style/autoprefix.css'))
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