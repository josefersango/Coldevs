const express = require('express');
const connectDB = require('./db/db');
let bodyParser = require('body-parser');
var cors = require('cors');

let app = express();

//Rutas
const usuarioRuta=require('./routes/usuario.route');


app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());

//Usuario
app.use('/api/v1/usuario',usuarioRuta)

const main=async ()=>{
    await connectDB();

    app.listen(5000,()=>{
        console.log(`Servidor corriendo`);
    })
    
};
main();