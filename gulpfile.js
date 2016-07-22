'use strict';

var fs = require('fs')
var path = require('path')
var gulp = require('gulp')
var gutil = require('gulp-util')
var data = require('gulp-data')
var browserSync = require('browser-sync')
var ejs = require('gulp-ejs')


var tplDir = './templates'  // 模版目录
var distDir = './html'      // 生成目录


// 模版合并
gulp.task('ejs', function(){
    gulp.src(tplDir + '/**/*.html')
        .pipe(data(function (file) {

            var filePath = file.path;

            // global.json 全局数据，页面中直接通过属性名调用
            return Object.assign(JSON.parse(fs.readFileSync(tplDir + '/global.json')), {
                // local: 每个页面对应的数据，页面中通过 local.属性 调用
                local: JSON.parse(fs.readFileSync( path.join(path.dirname(filePath), path.basename(filePath, '.html') + '.json')))
            }) 
        }))
        .pipe(ejs().on('error', function(err) {
            gutil.log(err);
            this.emit('end');
        }))
        .pipe(gulp.dest(distDir));
});

gulp.task('ejs-watch', ['ejs'], browserSync.reload);

// 开发服务
gulp.task('dev', function() {

    browserSync.init({
        server: {
            baseDir: distDir
        },
        reloadDebounce: 0
    });

    // 无论是数据文件更改还是模版更改都会触发页面自动重载
    gulp.watch(tplDir + '/**/*.*', ['ejs-watch']);

});