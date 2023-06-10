const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.getTransaccion = async (req, res) => {
    const t = await Transaccion.findById(req.params.id);
    res.json(t);
}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async (req, res) => {
    console.log(req.body);
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getTransaccionesDeUnCliente = async (req, res) => {
    const { email } = req.params;

    try {
        const transacciones = await Transaccion.find({ emailCliente: email });
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el histórico de transacciones del cliente' })
    }

}

transaccionCtrl.getTransaccionesPorMonedas = async (req, res) => {
    criteria = {};
    if (req.query.origen != null && req.query.origen != "") {
        criteria.monedaOrigen = req.query.origen;
    }
    if (req.query.destino != null && req.query.destino != "") {
        criteria.monedaDestino = req.query.destino;
    }

    var transacciones = await Transaccion.find(criteria);
    res.json(transacciones);
};

transaccionCtrl.deleteTransaccion = async (req, res) => {
    try {
        await Transaccion.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Transaccion removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}


module.exports = transaccionCtrl;