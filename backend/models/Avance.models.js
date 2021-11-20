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
        ref:'Proyecto',
        required:true
    },
    usuarioCreador:{
        type:Schema.Types.ObjectId,
        ref:'Usuario'
    }
    
    
});

const AvanceModel = model('Avance',avanceSchema);

module.exports=AvanceModel;