const Producto = require("../models/productos.model") //Me hace el proceso de guardar los datos del model
let response = {  
msg: "",
exito: false,
};


exports.create = function (req, res) {
let producto = new Producto({
    id_producto: req.body.id_producto,
    nombre_producto: req.body.nombre_producto,
    descripcion: req.body.descripcion,
    precio: req.body.precio
});


producto.save(function (err) {
if (err) {
console.log = false,
response.exito = false,
response.msg = "Error al guardar el producto";
res.json(response);
return;
    }

    response.exito = true,
    response.msg = "El producto se guardó correctamente";
    res.json(response);
});
};

exports.find = function(req,res){
Producto.find(function (err, productos) {
    res.json(productos)
})
}

exports.findOne = function(req,res){  // find one --> es traer unida mente un dato por id
Producto.findOne({_id: req.params.id}, function (err,producto) {
    res.json(producto)
})
}

exports.update = function(req,res){
let producto = {
    id_producto: req.body.id_producto,
    nombre_producto: req.body.nombre_producto,
    descripcion: req.body.descripcion,
    precio: req.body.precio
}

Producto.findByIdAndUpdate(req.params.id, {$set: producto}, function(err){
    if(err){
console.error(err),
response.exito = false,
response.msg = "Error al modificar el producto"
response.json(response)
return;
    }

    response.exito = true,
    response.msg = "El producto modifico correctamente"
    res.json(response) 
})
}

exports.remove = function(req, res){
Producto.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err){
console.error(err),
response.exito = false,
response.msg = "Error al eliminar el producto"
response.json(response)
return;
    }

    response.exito = true,
    response.msg = "El producto eliminado correctamente"
    res.json(response)
})
}