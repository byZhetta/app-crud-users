# CRUD de usuarios con Nodejs

Esta aplicación puede hacer operaciones CRUD create-read-update-delete de usuarios, usando las plantilla de EJS.

|Pantalla principal|Pantalla de usuarios|
|:----------:|:----------:|
|![Home](doc/img1.jpg)|![Users](doc/img2.jpg)|

## Instalación

```
git clone https://github.com/byZhetta/app-crud-users.git
cd app-crud-users
npm install
npm start
```

## Variables de entorno

Esta aplicación necesita las siguientes variables de entorno:

- `HOST` url del servidor
- `USER` tipo de usuario del servidor
- `DB_PASS` contraseña de la base de datos
- `DB_NAME` nombre de la base de datos

## Tecnologías principales

- nodejs v14.18.1
- express v4.18.2
- mysql v2.18.1
- ejs v3.1.8