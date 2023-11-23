let productos = [
    {
      id: 1,
      nombre: 'Expresso',
      descripcion: 'Americano',
      img: 'assets/img/expresso.png',
      precio: 2000,
      cantidad: 5
    },
    {
      id: 2,
      nombre: 'Pan Frances',
      descripcion: '',
      img: 'assets/img/PanFrances.png',
      precio: 3000,
      cantidad: 9
    },
    {
      id: 3,
      nombre: 'Torta',
      descripcion: '',
      img: 'assets/img/torta.png',
      precio: 5000,
      cantidad: 14
    },
  ]


const GET_ALL = (req,res)=>{
    return res.status (200).json(productos);
}

const NEW = (req,res)=>{
    const {nombre,descripcion,precio,cantidad} = req.body;
    if(!nombre || !descripcion || !precio || !cantidad) return res.status (404).json({mensaje: "Faltan parametros"});
    const id = productos[productos.length-1].id +1;
    const product = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad
    }
    productos.push(product)
    return res.status (200).json({mensaje: "Creado"});
}

const GET_BY_ID = (req,res)=>{
    const id = req.params.id;
    let producto;
    for(let p of productos){
        if(p.id == id) producto = p
    }
    if(!producto) return res.status (404).json({mensaje: "Producto no encontrado"});
    return res.status (200).json(producto);
}

const PATCH = (req,res)=>{
    const id = req.params.id;
    let {nombre,descripcion,precio,cantidad} = req.body;
    if(!nombre || !descripcion || !precio || !cantidad) return res.status (404).json({mensaje: "Faltan parametros"});
    let encontrado = false;
    for(let p of productos){
        if(p.id == id) {
            encontrado = true
            p.nombre= nombre
            p.descripcion= descripcion
            p.precio= precio
            p.cantidad= cantidad
        }
    }
    if(!encontrado) return res.status (404).json({mensaje: "Producto no encontrado"});

    return res.status (200).json({mensaje: "Actualizado"});
}


export {
    GET_ALL,
    NEW,
    GET_BY_ID,
    PATCH
}