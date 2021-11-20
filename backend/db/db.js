require('dotenv').config();
const {connect} = require('mongoose');

const connectDB=async()=>{
   return  await connect(process.env.DB_URI)
   .then(()=>{
       console.log("Conexión exitosa");
   })
   .catch((err)=>{
       console.log(`Error conectando a la Base de Datos ${err}`)
   })
}
module.exports=connectDB;