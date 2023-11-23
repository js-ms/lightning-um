import express from "express";
import cors from 'cors'
import rUser from './rutas/usuarios.js'
import rProduct from './rutas/productos.js'
import { connect } from "./config/database.js";

const app = express();
app.use(cors())

app.use (express.json())

app.use(express.urlencoded({ extended: true }))



app.get ('/',(req,res)=>{
    return res.status (200).send(`<h1>Bienvenido al Backed</h1>`);
})

app.use('/usuarios', rUser)
app.use('/productos', rProduct)

app.listen (3000,()=>{
    console.log ("servidor encendido");
})

