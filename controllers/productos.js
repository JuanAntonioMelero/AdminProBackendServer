const { response } = require('express');

const Producto = require('../models/producto');

const getProductos = async(req, res = response) => {

    const productos = await Producto.find()
                                    .populate('nombre img categoria precio');

    res.json({
        ok: true,
        productos
    })
}
const getProductosPorCategorias = async(req, res = response) => {
    const busqueda = req.params.categoria;
    const productos = await Producto.find({"categoria":busqueda})
                                    .populate('nombre img categoria precio');

    res.json({
        ok: true,
        productos
    })
}

const crearProducto = async (req, res = response) => {
    
    const producto = new Producto({
        
        ...req.body
    });


    try {

        const productoDB = await producto.save();

        
        res.json({
            ok: true,
            producto: productoDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador,no tiene ni idea'
        })
    }


}



module.exports = {
    getProductos,
    crearProducto,
    getProductosPorCategorias
}