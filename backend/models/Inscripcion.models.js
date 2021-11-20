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
        ref:'Proyecto',
        required:true
    },
    estudiante:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:true
    }
    
});

const InscripcionModel = model('Inscripcion',inscripcionSchema);

module.exports=InscripcionModel;