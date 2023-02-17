const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conexion.connect((error) => {
    if (error) {
        console.log('El error de conexion es: '+error);
        return
    }
    console.log('¡Conectado a la BD MySQL!');
});

module.exports = conexion;