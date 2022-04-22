'use strict'

const express = require('express');
const app = express();
const router = require('./routes/routes');
const { sequelize } = require('./models/index')

const HOST = process.env.HOST;
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(router);

app.listen(PORT, function () {
  console.log(`Example app listening on http://${HOST}:${PORT}`);

  sequelize.authenticate().then(() => {
      console.log('Nos hemos conectado a la base de datos!!!!!');
  })
});