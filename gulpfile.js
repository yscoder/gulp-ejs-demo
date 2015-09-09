'use strict';

var gulp = require('gulp'),  
    rename = require('gulp-rename'), 
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    ejs = require('gulp-ejs');


gulp.task('default', function(){
    gulp.src('templates/*.html')
        .pipe(ejs())
        .pipe(gulp.dest('html'));
});