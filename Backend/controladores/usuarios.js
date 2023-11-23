let usuarios = [
    {
        id : 1,
        nombre :"Alice",
        saldo : 40000
    },
    {
        id : 2,
        nombre :"Donal",
        saldo : 50000
    },
    {
        id: 3,
        nombre :"Jesus",
        saldo : 30000
    },
    {
        id: 4,
        nombre :"Carlos",
        saldo : 10000
    },
]


const GET_ALL = (req,res)=>{
    return res.status (200).json(usuarios);
}

const NEW = (req,res)=>{
    const {nombre,saldo} = req.body;
    if(!nombre || !saldo) return res.status (404).json({mensaje: "Faltan parametros"});
    const id = usuarios[usuarios.length-1].id +1;
    const user = {
        id: id,
        nombre : nombre,
        saldo: saldo
    }
    usuarios.push(user)
    return res.status (200).json({mensaje: "Creado"});
}

const GET_BY_ID = (req,res)=>{
    const id = req.params.id;
    let usuario;
    for(let u of usuarios){
        if(u.id == id) usuario = u
    }
    if(!usuario) return res.status (404).json({mensaje: "Usuario no encontrado"});
    return res.status (200).json(usuario);
}

const PATCH = (req,res)=>{
    const id = req.params.id;
    const {nombre,saldo} = req.body;
    if(!nombre || !saldo) return res.status (404).json({mensaje: "Faltan parametros"});
    let encontrado = false;
    for(let u of usuarios){
        if(u.id == id) {
            encontrado = true
            u.nombre = nombre
            u.saldo = saldo
        }
    }
    if(!encontrado) return res.status (404).json({mensaje: "Usuario no encontrado"});

    return res.status (200).json({mensaje: "Actualizado"});
}


export {
    GET_ALL,
    NEW,
    GET_BY_ID,
    PATCH
}