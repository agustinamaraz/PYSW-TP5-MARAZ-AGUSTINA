//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de productoCtrl
router.get('/', productoCtrl.getProductos); //se va a llamar-> http://localhost:3000/api/producto/
router.post('/', productoCtrl.createProducto);
router.get('/:id', productoCtrl.getProducto);
router.put('/:id', productoCtrl.editProducto); // cuando quiero modificar, y saco el id del body en postman, me sale que se actualizo pero cuando hago el GET de traer todos los productos, me sale que no se cambio nada. (SI O SI TIENE QUE ESTAR EL ID para que se modifique correctamente dentro del body)
router.delete('/:id', productoCtrl.deleteProducto);
router.get('/productos/destacados',productoCtrl.getProductosDestacados);
//exportamos el modulo de rutas
module.exports = router;