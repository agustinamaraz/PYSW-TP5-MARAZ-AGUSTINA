// Dar de alta un ticket (POST), enviar el espectador como 
// propiedad.
// - - Recuperar TODOS los ticket (GET) incluyendo la 
// información de los espectadores.
// - - Eliminar un ticket (DELETE)
// - - Modificar un ticket (PUT)
// - -Recuperar SOLO los espectadores que tienen una 
// determinada categoría de espectador //extranjero-local.

const Ticket = require('../models/ticket');
const ticketCtrl = {}


ticketCtrl.getTickets = async (req, res) => {
    var tickets = await Ticket.find().populate("espectador");
    res.json(tickets);
}
ticketCtrl.createTicket = async (req, res) => {
    console.log(req.body);
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

ticketCtrl.getTicket = async (req, res) => {
    //no pide esta pero igual la pongo, para recordar
    const ticket = await Ticket.findById(req.params.id).populate("espectador");
    res.json(ticket);
}

ticketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.body._id }, vticket);
        console.log(vticket);
        res.json({
            'status': '1',
            'msg': 'Ticket updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.getEspectadoresPorCategoria = async (req, res) => {
    const { cat } = req.params;
    
    try {
        const tickets = await Ticket.find({
            categoriaEspectador: cat
        }).populate("espectador");

        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los tickets por categoria del espectador' })
    }
}


module.exports = ticketCtrl;