import { gql } from "apollo-server-core";

const typeUsuario = gql`
  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }
 

  scalar Date

  type Usuario {
    _id: ID!
    nombre: String!
    apellidos: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario
    rol: Enum_Rol!
  }

  

  type Query {
    Usuarios: [Usuario]
    Usuario(_id:String!):Usuario
    
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellidos: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
      rol: Enum_Rol!
    ): Usuario

    
    editarUsuario(
      _id:String!
      nombre:String
      apellidos:String
      identificacion: String
      correo: String
      estado:Enum_EstadoUsuario
      rol:Enum_Rol
    ):Usuario

    eliminarUsuario(_id:String correo:String):Usuario

    

  }
`;

export { typeUsuario };
