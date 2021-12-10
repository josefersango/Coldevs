import {React,useEffect} from 'react';
import {useQuery} from '@apollo/client'
import { GET_USUARIOS } from '../../graphql/usuarios/queries';

const IndexUsuario= ()=>{
    const {data,error,loading} = useQuery(GET_USUARIOS);
    useEffect(() => {
        console.log("datos servidor ",data);
    }, [data])

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
                {data && data.Usuarios.map((usuario)=>{
                    return(
                        <tr key={usuario._id}>
                            <td>{usuario.nombre} {usuario.apellidos}</td>
                            <td>{usuario.identificacion}</td>
                            <td>{usuario.correo}</td>
                            <td>{usuario.rol}</td>
                            <td>{usuario.estado}</td>

                        </tr>
                    )
                })}
            </tbody>
            
            </table>
        </div>
    );
};

export default IndexUsuario;