import  ProyectoModel  from "../proyecto/Proyecto.models.js";


const resolversProyecto = {
  Query: {
    Proyectos: async (parent,args)=>{
      const proyectos = await ProyectoModel.find().populate('lider');
      return proyectos;
    }
  },

  Mutation: {
    
    crearProyecto: async(parent,args)=>{
      const proyectoModel= new ProyectoModel(args);
      const proyecto = await proyectoModel.save();
      return proyecto;
    },
    editarProyecto:async(parent,args)=>{
      let proyectoModel= new ProyectoModel(args);
      const proyecto = ProyectoModel.findByIdAndUpdate(args._id,
        proyectoModel
      ,{new:true})

      return proyecto;
    },
    eliminarProyecto:async(parent,args)=>{
      const proyecto = await ProyectoModel.findByIdAndDelete(args._id);
      return proyecto;
    }
  }
  
 
};

export { resolversProyecto };