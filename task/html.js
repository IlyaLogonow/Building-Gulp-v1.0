const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create(); //Сервер
const del = require('del'); //Удаление директории

//Конфигурация
const path = require('../config/pach.js');
const app = require('../config/app.js');

//Плагины
const fileInclude = require('gulp-file-include'); //Инклуд блоков
const htmlmin = require('gulp-htmlmin'); //Минификация 
const size = require('gulp-size'); //Показывает размер файла
const pugs = require('gulp-pug'); //Pug
const webpHtml = require('gulp-webp-html'); //Pug

//Обработка Html
const html = function () {
    return src(path.html.src)
        .pipe(fileInclude()) //Инклуд блоков
        .pipe(webpHtml())
        .pipe(size({ title: 'До сжатие файла' })) //Показывает размер файла
        .pipe(htmlmin(app.htmlmin)) //Минификация 
        .pipe(size({ title: 'После сжатие файла' })) //Показывает размер файла
        .pipe(dest(path.html.dest));
};

module.exports = html;