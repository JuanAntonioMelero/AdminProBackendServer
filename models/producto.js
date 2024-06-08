const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    categoria:{
        type:String,
        required:true
    },
    precio:{
        type: Number
    }
    
});


ProductoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Producto', ProductoSchema );
