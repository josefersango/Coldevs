const express = require('express');
const UsuarioModel = require('../models/Usuario.models');
const {crearUsuario}= require('../controllers/usuario.controllers')


let api=express.Router();

//Crear usuarios
api.post('/api/usuarios/',crearUsuario)
//Consultar todos los usuarios
api.get('/api/usuarios/',async(req,res)=>{
    try {
        let usuarios = await  UsuarioModel.find();
        res.status(200).send({
            usuarios
        })
    } catch (error) {
        console.log(`Error al consultar los usuarios en la BD: ${error}`)
    }
   
})
//Actualizar usuarios
api.put('/api/usuarios/:id',async(req,res)=>{
    let clienteId=req.params.id;
    let datosNuevos=req.body
    let usuarioActualizado= await UsuarioModel.findByIdAndUpdate(clienteId,datosNuevos,{new:true});

    res.status(200).send({
        usuarioActualizado
    })
})

module.exports=api;