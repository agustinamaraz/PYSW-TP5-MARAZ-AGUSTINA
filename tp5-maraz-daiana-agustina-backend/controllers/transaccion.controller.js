const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}


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
    const {email} = req.params;

    try{
        const transacciones = await Transaccion.find({emailCliente: email});
        res.json(transacciones);
    }catch(error){
        res.status(500).json({error: 'Error al obtener el histórico de transacciones del cliente'})
    }
    
}

transaccionCtrl.getTransaccionesPorMonedas = async (req,res) => {
    const {monedaO, monedaD } = req.params; //se tienen que llamar tal cual como estan en transaccion.route

    try{
        const transacciones = await Transaccion.find({
            monedaOrigen: monedaO,
            monedaDestino: monedaD
        });
        res.json(transacciones);
    }catch(error){
        res.status(500).json({error: 'Error al obtener las transacciones'})
    }
}

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