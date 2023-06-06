//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de ticketCtrl
router.get('/', ticketCtrl.getTickets); //se va a llamar-> http://localhost:3000/api/producto/
router.post('/', ticketCtrl.createTicket);
router.get('/:id', ticketCtrl.getTicket);
router.put('/:id', ticketCtrl.editTicket); // cuando quiero modificar, y saco el id del body en postman, me sale que se actualizo pero cuando hago el GET de traer todos los productos, me sale que no se cambio nada. (SI O SI TIENE QUE ESTAR EL ID para que se modifique correctamente dentro del body)
router.delete('/:id', ticketCtrl.deleteTicket);
router.get('/categoria/:cat', ticketCtrl.getEspectadoresPorCategoria); //preguntar porque funciona si le agrego /categoria/ antes
//exportamos el modulo de rutas
module.exports = router;