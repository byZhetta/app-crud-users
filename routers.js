const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

// Mostrar todos los registros
// router.get('/', (req, res) => {
//     conexion.query('SELECT * FROM users', (error, results) => {
//         if (error) {
//             throw error;
//         } else {
//             res.render('index', {results:results});
//         }
//     });
// });
router.get('/', (req, res) => {
    res.render('index');
});

// Mostrar todos los registros
router.get('/users', (req, res) => {
    conexion.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('users', {results:results});
        }
    });
});

// Crear registros
router.get('/create', (req, res) => {
    res.render('create');
});

// Editar registros
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id = ?',[id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit', {user:results[0]});
        }
    });
});

// Eliminar registros
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    });
});

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;