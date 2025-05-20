const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');


function compilaSass(){
    return gulp.src('./source/style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('build/style'));
}

function comprimeJS(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function comprimeImg(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(comprimeJS));
    gulp.watch('./source/images/*',{ignoreInitial:false}, gulp.series(comprimeImg));
}