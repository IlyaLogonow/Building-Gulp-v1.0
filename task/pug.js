const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/pach.js');
const app = require('../config/app.js');

//Плагины
const pugs = require('gulp-pug'); //Pug
const webpHtml = require('gulp-webp-html');

//Обработка Pug
const pug = function () {
    return src(path.pug.src)
        .pipe(pugs(app.pug))
        .pipe(webpHtml())
        .pipe(dest(path.pug.dest));
};

module.exports = pug;