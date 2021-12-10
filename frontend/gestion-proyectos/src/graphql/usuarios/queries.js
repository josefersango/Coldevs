import {gql} from '@apollo/client';

const GET_USUARIOS=gql`
    query Usuarios {
  Usuarios {
  _id
  nombre
  apellidos
  identificacion
  estado 
  correo
  rol
  }
}
`
export {GET_USUARIOS}