import axios from 'axios'

const API_URL = 'http://localhost:3000/api/reservas'

// Crear una reserva
export const crearReserva = (reserva) => {
  return axios.post(API_URL, {
    cliente: reserva.nombre,
    telefono: reserva.telefono,
    fechaHora: `${reserva.fecha}T${reserva.hora}`,
    mesa: reserva.mesa
  })
}
