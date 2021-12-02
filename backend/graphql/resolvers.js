import { resolversUsuario } from "../models/usuario/resolvers.js";
import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversInscripcion } from "../models/inscripcion/resolvers.js";

export const resolvers = [
  resolversUsuario,
  resolversProyecto,
  resolversInscripcion,
];
