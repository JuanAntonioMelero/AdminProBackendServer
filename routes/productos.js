/*
    Productos
    ruta: '/api/productos'
*/
const { Router } = require('express');

const {
    getProductos,
    crearProducto,
    getProductosPorCategorias
        
} = require('../controllers/productos')

const router = Router();

router.get( '/', getProductos );
router.get( '/:categoria', getProductosPorCategorias );
router.post( '/', crearProducto );


module.exports = router;



