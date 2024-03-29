//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de transaccionCtrl

//se va a llamar-> http://localhost:3000/api/transaccion/
router.get('/', transaccionCtrl.getTransacciones);
//router.get('/:id', transaccionCtrl.getTransaccion);

router.get('/moneda', transaccionCtrl.getTransaccionesPorMonedas);

router.post('/', transaccionCtrl.createTransaccion);
router.get('/:email', transaccionCtrl.getTransaccionesDeUnCliente);
router.delete('/:id', transaccionCtrl.deleteTransaccion);

// //no estan
// router.delete('/:id', transaccionCtrl.deleteTransaccion);
// router.put('/:id', transaccionCtrl.editTransaccion);
//exportamos el modulo de rutas
module.exports = router;