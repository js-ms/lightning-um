import { model, Schema } from "mongoose";


const UserSchema = new Schema({
    nombre: String,
    saldo: Number,

})

export default model('Usuario', UserSchema, 'usuarios');