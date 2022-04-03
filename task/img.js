const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/pach.js');
const app = require('../config/app.js');

//Плагины
const imagemin = require('gulp-imagemin'); //Оптимизация img
const newer = require('gulp-newer'); 
const webp = require('gulp-webp'); 
const gulpif = require('gulp-if');

//Обработка img
const img = function () {
    return src(path.img.src)
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
        .pipe(dest(path.img.dest));
};

module.exports = img;