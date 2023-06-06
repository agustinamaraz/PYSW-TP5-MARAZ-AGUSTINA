//defino controlador para el manejo de CRUD
const espectadorCtrl = require('./../controllers/espectador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de espectadorCtrl
router.get('/', espectadorCtrl.getEspectadores); //se va a llamar-> http://localhost:3000/api/espectador/
router.post('/', espectadorCtrl.createEspectador);
router.get('/:id', espectadorCtrl.getEspectador);
//exportamos el modulo de rutas
module.exports = router;