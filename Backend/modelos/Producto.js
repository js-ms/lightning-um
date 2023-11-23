import { model, Schema } from "mongoose";


const ProductSchema = new Schema({
    nombre: String,
    descripion:String,
    img: String,
    precio: Number,
    cantidad: Number
})

export default model('Producto', ProductSchema, 'productos');