const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./db/db');
const cors = require('cors');

dotenv.config();

const app = express();

//Rutas
const usuarioRuta=require('./routes/usuario.route');


app.set('port', process.env.PORT || 5000);

app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Usuario
app.use('/api/v1/usuario',usuarioRuta)

const main=async ()=>{
    await connectDB();

    app.listen(app.get('port'),()=>{
        console.log(`Servidor corriendo`);
    })
    
};
main();