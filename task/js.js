const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/pach.js');
const app = require('../config/app.js');

//Плагины
const babel = require('gulp-babel'); 
const uglify = require('gulp-uglify'); //Минификация Js файла
const webpack = require('webpack-stream'); //Webpack


//Обработка JavaScript
const js = function () {
    return src(path.js.src, { sourcemaps: app.isDev })
        .pipe(babel())
        .pipe(webpack(app.webpack))
        .pipe(uglify())
        .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
};

module.exports = js;