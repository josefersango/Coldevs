import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';

import cors from "cors";
import { ApolloServer } from "apollo-server-express";

import {tipos} from './graphql/types.js';
import {resolvers} from './graphql/resolvers.js';

dotenv.config();

//Definir un servidor de apollo y graphql

const serverApollo = new ApolloServer({
    typeDefs: tipos,
    resolvers:resolvers,
})

const app = express();
app.use(cors())

app.set('port', process.env.PORT || 5000);

//app.use(express.urlencoded({extended:false}));
//app.use(express.json());

//Rutas
/*app.use(require('./routes/usuario.route'));
app.use(require('./routes/proyecto.route'));
app.use(require('./routes/inscripcion.route'));
app.use(require('./routes/avance.route'));*/

app.listen(app.get('port'), async()=>{
    await connectDB();
    //encender servidor de apollo
    await serverApollo.start();
    //midellware para que utilice los midellware de express
    serverApollo.applyMiddleware({app});

    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
})
    
