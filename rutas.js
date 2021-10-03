const express = require('express');
const fs = require('fs');

const router = express.Router();

const DATA = require('./data.json');

router.get('/', function(req, res) {
    const librosJson = fs.readFileSync('data.json');
    const libros = JSON.parse(librosJson);
  res.render('home',{libros});
});
// define the about route
router.get('/libro/:id', function(req, res) {    

    const id = req.params.id;

    const librosJson = fs.readFileSync('data.json');
    const libros = JSON.parse(librosJson);
    const libro = libros.find((item) => item.id == id);
    res.render('libro', {libro});
});

module.exports = router;