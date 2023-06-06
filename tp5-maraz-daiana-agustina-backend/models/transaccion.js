const mongoose = require('mongoose');
const { Schema } = mongoose;
const TransaccionSchema = new Schema({
    monedaOrigen: { type: String, required: true },
    cantidadOrigen: { type: Number, required: true },
    monedaDestino: { type: String, required: true },
    cantidadDestino: { type: Number, required: true },
    emailCliente: { type: String, required: true },
    tasaConversion: {type: Number, required:true}
    //Los tipos siempre tienen que ser clases, o sea la primera letra en Mayuscula, sino salta un error con la bd al momento de ejecutar npm run dev
})
module.exports = mongoose.models.Transaccion || mongoose.model('Transaccion', TransaccionSchema);