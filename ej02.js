import fs from "fs"

function agregarProducto(nombre, precio){
    try {
        const data = fs.readFileSync("productos.json", "utf-8")
    
        const productos = JSON.parse(data)

        const productoNuevo = {
            nombre: nombre,
            precio: precio,
        }

        productos.push(productoNuevo)
    
        fs.writeFileSync("productos.json", JSON.stringify(productos, null, 2))
        console.log("Producto agregado")
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

agregarProducto("Monitor", 12000)