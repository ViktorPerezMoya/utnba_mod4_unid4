const express = require('express');
var path = require('path');

const rutas = require('./rutas');

const app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use('/',rutas);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})