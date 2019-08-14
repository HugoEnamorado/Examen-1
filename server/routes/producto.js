const express = require('express');

const Producto = require('../models/producto');

const app = express();

app.get('/', (req, res) => {
    res.json('Examen 1 Programación 4');
});

// Deberá hacer aquí el método get para producto (Valor 5 puntos)


app.get('/producto', (req,res) =>{
  

    ProductoDB = Producto.model;
    nombre = ProductoDB,
    precio = ProductoDB,
    creando_en = ProductoDB
    res.json(' Examen de programacion 4 ');


    Producto.save((err,Producto) => {
    
        if(err){
            res.json(400);
                ok: false,
                err
            }
        
});
});

// Deberá hacer aquí el método post para producto (Valor 5 puntos)

app.post('/producto',(req,res) => {
    let body = req.body;

    let producto = new Producto({ 
        nombre: body.nombre,
        precio: body.precio,
        creando_en: body.creando_en
    })

    producto.save((err,ProductoDB) => {
        // Validar si hubo error.
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            Producto: ProductoDB
        })
    });
});

module.exports = app; 
