/*
    CategoriasProductos
    ruta: '/api/categoriasProductos'
*/
const { Router } = require('express');

const {
    getCategoriasProductos,
    crearCategoriasProducto
    
} = require('../controllers/categoriasProductos')

const router = Router();

router.get( '/', getCategoriasProductos );


router.post( '/', crearCategoriasProducto );


module.exports = router;



