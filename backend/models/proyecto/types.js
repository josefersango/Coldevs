import { gql } from "apollo-server-core";

const typeProyectos = gql`
  
  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }
  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }

  scalar Date

 
  type Proyecto{
    _id:ID!
    nombre:String!
    presupuesto:Float!
    fechaInicio:Date!
    fechaFin:Date!
    estado:Enum_EstadoProyecto
    fase: Enum_FaseProyecto!
    lider:Usuario!
    objetivosGenerales: String
    objetivosEspecificos: [String!]!

  }

  type Query {
    Proyectos:[Proyecto]!
  }

  type Mutation {
    

    crearProyecto(
      nombre:String!
      presupuesto:Float!
      fechaInicio:Date!
      fechaFin:Date!
      estado:Enum_EstadoProyecto
      fase: Enum_FaseProyecto!
      lider:String! 
      objetivosGenerales: String!
      objetivosEspecificos: [String!]!
    ):Proyecto

    editarProyecto(
      _id:ID!
      nombre:String
      presupuesto:Float
      fechaInicio:Date
      fechaFin:Date
      estado:Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider:String
      objetivosGenerales: String
      objetivosEspecificos: [String]
    ):Proyecto

    eliminarProyecto(_id:String!):Proyecto

  }
`;

export { typeProyectos };
