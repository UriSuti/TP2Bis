import fs from "fs"

function generarCSV() {
    try {
        const data = fs.readFileSync("productos.json", "utf-8")
        const productos = JSON.parse(data)

        let csv = "nombre,precio\n"

        productos.forEach(p => {
            csv += `${p.nombre},${p.precio}\n`
        })

        fs.writeFileSync("productos.csv", csv)

        console.log("Archivo productos.csv generado correctamente")
    } catch (error) {
        console.error("Error:", error.message)
    }
}

generarCSV()