import dayjs from "dayjs"

function mostrarFechaHora() {
    const ahora = dayjs()
    
    const fechaActual = ahora.format("DD/MM/YYYY")
    const horaActual = ahora.format("HH:mm")

    console.log(`Fecha actual: ${fechaActual}`)
    console.log(`Hora actual: ${horaActual}`)
}

mostrarFechaHora()