import {React,useEffect} from 'react';
import {useQuery} from '@apollo/client'
import { toast } from 'react-toastify';
import { GET_USUARIOS_PENDIENTES } from '../../graphql/usuarios/queries';
import { Link } from 'react-router-dom';

const UsuariosPendientes= ()=>{
    const {data,error,loading} = useQuery(GET_USUARIOS_PENDIENTES);
    useEffect(() => {
        console.log("datos servidor ",data);
    }, [data]);

    useEffect(()=>{
        if(error){
            toast.error("Error al consultar los usuarios")
        }
    })

    if(loading) return <div>Cargando...</div>
    return (
        <div>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Identificacion</th>
                <th scope="col">Correo</th>
                <th scope="col">Rol</th>
                <th scope="col">Estado</th>
                <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                {data && data.UsuariosPendientes.map((usuario)=>{
                    return(
                        <tr key={usuario._id}>
                            <td>{usuario.nombre} {usuario.apellidos}</td>
                            <td>{usuario.identificacion}</td>
                            <td>{usuario.correo}</td>   
                            <td>{usuario.rol}</td>
                            <td>{usuario.estado}</td>
                            <td>
                                
                            </td>

                        </tr>
                    )
                })}
            </tbody>
            
            </table>
        </div>
    );
};

export default UsuariosPendientes;