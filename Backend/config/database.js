import mongoose from 'mongoose'

const URI = "mongodb+srv://bitcoin:Hola12345@cluster0.oe9s8k0.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => {
    await mongoose.connect(URI)
        .then(r => console.log("Connection successful"))
        .catch(e => { throw new Error("Error al conectar a la BBDD: "+e)})
}

export {
    connect
}