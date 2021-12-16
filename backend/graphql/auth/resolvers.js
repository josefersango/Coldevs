import  UsuarioModel  from "../../models/usuario/Usuario.models.js";
import bcrypt from 'bcrypt';
import {generateToken} from '../../jwt/tokensUtil.js';

const resolverAuth={
    Mutation:{
        registroUsuario: async (parent,args)=>{
            console.log("registrar usuario");
            const salt =await bcrypt.genSalt(10);

            const hashPassword = await bcrypt.hash(args.password,salt);

            const usuarioCreado = await  UsuarioModel.create({
                nombre:args.nombre,
                apellidos:args.apellidos,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
                password:hashPassword
            });
            console.log(usuarioCreado)
            return {
                token:generateToken({
                    _id:usuarioCreado._id,
                    nombre:usuarioCreado.nombre,
                    apellidos:usuarioCreado.apellidos,
                    identificacion:usuarioCreado.identificacion,
                    correo:usuarioCreado.correo,
                    rol:usuarioCreado.rol,
                })
            }
        },
    }
};
export {resolverAuth}