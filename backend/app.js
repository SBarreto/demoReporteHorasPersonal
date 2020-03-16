const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

const app = express();

mongoose.connect('mongodb://localhost:27017/reporteshorasextra')
.then(() => {
  console.log('Connected to database')
})
.catch(() => {
  console.log('Connection error');
})
;

const ReporteHorasExtra = require('./model/reporteHorasExtra');
const JsonPosts = require('./model/jsonPost');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/reportes", (req, res, next) => {
  console.log('Haciendo posteo de horas extra');

  const reportenuevo = new ReporteHorasExtra({
    documento: req.body.documento,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fechaInicio: req.body.fechaInicio,
    fechaFin: req.body.fechaFin,
    horarioInicioTurno: req.body.horarioInicioTurno,
    horarioFinTurno: req.body.horarioFinTurno,
    horarioInicioHorasExtra: req.body.horarioInicioHorasExtra,
    horarioFinHorasExtra: req.body.horarioFinHorasExtra,
    motivoHorasExtra: req.body.motivoHorasExtra
  });
  reportenuevo.save().then(createdReporte => {
    console.log(createdReporte);
    res.status(201).json({
    message:'Post added succesfully',
    });
  });

});

app.get('/api/reportes', (req, res, next) => {
  ReporteHorasExtra.find()
  .then(documents => {
    console.log(documents);
    res.status(200).json(documents);
  });

});

app.get('/api/jsonholders', (req, res, next) => {
  console.log('Trayendo posts JSON');
  const JsonPosts = [];
  res.json(fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json)));
});


module.exports = app;
