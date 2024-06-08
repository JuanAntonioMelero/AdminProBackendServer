const { response } = require('express');

const CategoriasProductos = require('../models/categoriasProductos');

const getCategoriasProductos = async(req, res = response) => {

    const categoriasProductos = await CategoriasProductos.find()
                                    .populate('nombre img');

    res.json({
        ok: true,
        categoriasProductos
    })
}

const crearCategoriasProducto = async (req, res = response) => {
    console.log(req);
    
    const categoriasProductos = new CategoriasProductos({
        
        ...req.body
    });


    try {

        const categoriasProductosDB = await categoriasProductos.save();

        
        res.json({
            ok: true,
            categoriasProductos: categoriasProductosDB
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
    getCategoriasProductos,
    crearCategoriasProducto
}