import { gql } from "apollo-server-core";
import {typeUsuario} from "../models/usuario/types.js";
import {typeProyectos} from "../models/proyecto/types.js";
import { typeAvance } from "../models/avance/types.js";

const typeGlobales = gql`
  scalar Date

  

  
`;

export const tipos=[typeGlobales,typeUsuario,typeProyectos,typeAvance]