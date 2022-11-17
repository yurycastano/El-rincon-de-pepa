const mongoose = require("mongoose");  
const Schema = mongoose.Schema;  //Creación esquema para db

const ProductosSchema = new Schema({          //Nombre del esquema con sus parametros
    id_producto:{type: String, required: true, max:60},
    nombre_producto:{type: String, required: true, max:40},
    descripcion:{type: String, required: true, max:300},
    precio:{type: String, required: true, max:100},
    
});

module.exports = mongoose.model("productos", ProductosSchema);  