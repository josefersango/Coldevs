import {gql} from '@apollo/client';

const REGISTRO_USUARIO=gql`
mutation RegistroUsuario($nombre: String!, $apellidos: String!, $identificacion: String!, $correo: String!, $rol: Enum_Rol!, $password: String!) {
  registroUsuario(nombre: $nombre, apellidos: $apellidos, identificacion: $identificacion, correo: $correo, rol: $rol, password: $password) {
    token
    error
  }
}
`;
export {REGISTRO_USUARIO}