const del = require('del'); //Удаление директории

//Конфигурация
const path = require('../config/pach.js');

//Удаление директории
const clear = function () {
    return del(path.root);
};

module.exports = clear;