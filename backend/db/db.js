const {connect} = require('mongoose');

const connectDB=async()=>{
   return  await connect('mongodb+srv://adminbd:Admin12345@gestionproyectos.qsg3x.mongodb.net/GestionProyectos?retryWrites=true&w=majority')
   .then(()=>{
       console.log("Conexión exitosa");
   })
   .catch((err)=>{
       console.log(`Error conectando a la Base de Datos ${err}`)
   })
}
module.exports=connectDB;