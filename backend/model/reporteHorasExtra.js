const mongoose = require ('mongoose');

const reporteHorasExtraSchema = mongoose.Schema({
  documento: {type: Number, required: true},
  nombre: {type: String},
  apellido: {type: String},
  fechaInicio: {type: String},
  fechaFin: {type: String},
  horarioInicioTurno: {type: String},
  horarioFinTurno: {type: String},
  horarioInicioHorasExtra: {type: String},
  horarioFinHorasExtra: {type: String},
  motivoHorasExtra: {type: String},
})

module.exports = mongoose.model('ReporteHorasExtra', reporteHorasExtraSchema);
