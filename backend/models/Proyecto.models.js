const {Schema,model}= require('mongoose');

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
        enum:['','Activo','Inactivo'],
        default:''
    },
    fase:{
        type:String,
        enum:['Inicio','Desarrollo','Terminado'],
        default:''
    },
    lider:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required:true
    }
});

const ProyectoModel = model('Proyecto',proyectoSchema);

module.exports=ProyectoModel;