const API_URL = 'http://localhost:3000/api/reservas';

export const obtenerReservas = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const crearReserva = async (reserva: any) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reserva),
  });
  return res.json();
};

export const actualizarReserva = async (id: number, reserva: any) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reserva),
  });
  return res.json();
};

export const eliminarReserva = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return res.text(); // o res.json() si lo prefieres
};

export const obtenerReserva = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};
