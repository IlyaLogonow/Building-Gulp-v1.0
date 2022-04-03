const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/pach.js');
const app = require('../config/app.js');

//Плагины
const concat = require('gulp-concat'); //Объединение в общий файл
const cssimport = require('gulp-cssimport'); //Оператор @import
const autoprefixer = require('gulp-autoprefixer'); //Автопрефиксер
const csso = require('gulp-csso'); //Минификация
const rename = require('gulp-rename');
const size = require('gulp-size'); //Выводит общий размер файлов в потоке
const shorthand = require('gulp-shorthand'); //Заменяет все возможные свойства на их краткие формы
const groupCssMediaQueries = require('gulp-group-css-media-queries'); //Сгруппировать все @media элементы
const webpCss = require('gulp-webp-css'); 


//Обработка CSS
const css = function () {
    return src(path.css.src, { sourcemaps: app.isDev })
        .pipe(concat('main.css'))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size({ title: 'main.css'}))
        .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
        .pipe(rename({ suffix: '.min'}))
        .pipe(csso())
        .pipe(size({ title: 'main.min.css'}))
        .pipe(dest(path.css.dest, { sourcemaps: app.isDev }));
};

module.exports = css;