import  mongoose from 'mongoose'
const {Schema,model} = mongoose;

const proyectoSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    objetivosGenerales:{
        type:String,
        required:true
    },
    objetivosEspecificos:{
        type:[String],
        required:true
    },
    presupuesto:{
        type:Number,
        required:true
    },
    fechaInicio:{
        type:Date,
        required:true
    },
    fechaFin:{
        type:Date,
        required:true
    },
    estado:{
        type:String,
        enum: ["ACTIVO", "INACTIVO"],
        default: "INACTIVO",
    },
    fase:{
        type:String,
        enum: ["INICIADO", "DESARROLLO", "TERMINADO", "NULO"],
        default: "NULO",
    },
    lider:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required:true
    }
});

const ProyectoModel = model('Proyecto',proyectoSchema);

export default ProyectoModel;