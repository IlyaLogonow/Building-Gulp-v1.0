## Building-Gulp-v1.0 - Окружение для разработки веб-проектов
Готовое окружение для разработки сайта.
## Требования к окружению Building-Gulp-v1.0
Для создания окружения необходимо иметь следующие установленные инструменты:
- node.js
- npm
- git 
- gulp

## Как использовать данную сборку в реальном проекте и что в итоге предевать заказчику

- Распаковать билд в любое удобное место
- Дать название директории в соответствие с вашим проектом
- Внутри сборки находятся все нужные файлы, кроме директории node_modules. Поэтому первым делом вызываем консоль, убеждаемся, что мы находиться в нужном проекте. 
- И выполняем команду npm i. В результате npm установит нам все пакеты, которые используються в данной сборки.
- Перед работой над проектом убедитесь, что в сборку включены именно те задачи которые нам нужны.

## Как использовать окружение

- `npm start` - Запускает режим разработки

- `npm run build` - Сборка файлов на продакшн

## Что именно отдавать заказчику ?

- Можно отдать конечную директорию проекта, в нашем случае это папка public. Именно в ней хранятся все файлы которые будут заливаться на сервер. Но отдавай заказчику только конечный фалы, вы лишаете возможность поддерживать, развивать и вносить изменение в проект должным образом.

- Лучши отдать заказчику два архива.
    - В одном архиве будут файлы которые будут залиты на сервер
    - Во втором ваша система сборки со всеми исходниками