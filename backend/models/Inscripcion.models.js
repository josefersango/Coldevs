const {Schema,model}= require('mongoose');

const inscripcionSchema = new Schema({
    estado:{
        type:String,
        enum:['Aceptada','Rechazada'],
        required:true
    },
    fechaIngreso:{
        type:Date,
        required:true
    },
    fechaEgreso:{
        type:Date,
        required:true
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProjectModel,
        required:true
    },
    estudiante:{
        type:Schema.Types.ObjectId,
        ref:UsuarioModel,
        required:true
    }
    
});

const ProyectoModel = model('Inscripcion',inscripcionSchema);

module.exports=ProyectoModel;