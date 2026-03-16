import fs from "fs"

try {
    const data = fs.readFileSync("productos.json", "utf-8")

    const productos = JSON.parse(data)

    productos.forEach(producto => {
        console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`)
    })
} catch (error) {
    console.error(`Error: ${error.message}`)
}