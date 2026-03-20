import fs from "fs"

function buscarProducto(nombre) {
    try {
        const data = fs.readFileSync("productos.json", "utf-8")
            
        const productos = JSON.parse(data)

        const producto = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase())

        if (producto) {
            console.log("Producto encontrado");
            console.log("Nombre:", producto.nombre);
            console.log("Precio:", producto.precio);
        } else {
            console.log("Producto no encontrado");
        }
    } catch (error) {
        console.error(error.message)
    }
}

buscarProducto("Mouse")