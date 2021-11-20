const {Schema,model}= require('mongoose');

const avanceSchema = new Schema({
    fecha:{
        type: Date,
        required:true
    },
    descripciones:{
        type:String,
        required:true
    },
    observaciones:{
        type:[String]
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProjectModel,
        required:true
    },
    usuarioCreador:{
        type:Schema.Types.ObjectId,
        ref:UsuarioModel
    }
    
    
});

const ProjectModel = model('Avance',projectSchema);

module.exports=ProjectModel;