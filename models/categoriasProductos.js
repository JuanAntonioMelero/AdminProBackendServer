const { Schema, model } = require('mongoose');

const CategoriasProductosSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
    }
    
});


CategoriasProductosSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'CategoriasProductos', CategoriasProductosSchema );
