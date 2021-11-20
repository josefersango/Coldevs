const UsuarioModel = require('../models/Usuario.models');

const crearUsuario=async (req,res)=>{
   
        let usuario=req.body.usuario;
        console.log(usuario)
        try{
            let usuarioModel = new UsuarioModel(usuario);
            let usuarioCreado = await usuarioModel.save();
            res.send({
                usuarioCreado
            })
        }catch(error){
            console.log(`Error al crear el usuario en la BD:  ${error}`)
        }
        
    
}
module.exports={
    crearUsuario
}