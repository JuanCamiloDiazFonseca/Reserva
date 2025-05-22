<template>
 <div class="min-h-screen bg-gray-100 p-6 max-w-2xl mx-auto text-gray-800">
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-8">

      <!-- Título -->
     <h1 class="text-4xl font-bold text-center text-green-400">📅 Pilla Tu Cupo</h1>

      <!-- Componentes de Entrada -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FechaHoraReserva
          v-model:fecha="reserva.fecha"
          v-model:hora="reserva.hora"
        />
        <DatosCliente
          v-model:nombre="reserva.nombre"
          v-model:telefono="reserva.telefono"
        />
        <SeleccionMesa
          v-model:mesaSeleccionada="reserva.mesa"
        />
      </div>

      <!-- Resumen -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
          📝 Resumen de la Reserva
        </h2>
        <div class="grid gap-2 text-sm">
          <p><strong>👤 Nombre:</strong> {{ reserva.nombre }}</p>
          <p><strong>📞 Teléfono:</strong> {{ reserva.telefono }}</p>
          <p><strong>📆 Fecha:</strong> {{ reserva.fecha }}</p>
          <p><strong>⏰ Hora:</strong> {{ reserva.hora }}</p>
          <p><strong>🍽️ Mesa:</strong> {{ reserva.mesa }}</p>
        </div>
      </div>

      <!-- Botón -->
      <div class="text-center">
        <button
          @click="confirmarReserva"
          class="w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow transition duration-200"
        >
          ✅ Confirmar Reserva
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import FechaHoraReserva from '@/components/FechaHoraReserva.vue'
import DatosCliente from '@/components/DatosCliente.vue'
import SeleccionMesa from '@/components/SeleccionMesa.vue'
import { crearReserva } from './service/reservasService.js'

const reserva = reactive({
  fecha: '',
  hora: '',
  nombre: '',
  telefono: '',
  mesa: '',
})

async function confirmarReserva() {
  if (reserva.nombre && reserva.telefono && reserva.fecha && reserva.hora && reserva.mesa) {
    try {
      await crearReserva(reserva)
      alert(`✅ ¡Reserva registrada para ${reserva.nombre} el ${reserva.fecha} a las ${reserva.hora} en la mesa ${reserva.mesa}!`)
      reserva.fecha = ''
      reserva.hora = ''
      reserva.nombre = ''
      reserva.telefono = ''
      reserva.mesa = ''
    } catch (error) {
      console.error(error)
      alert('❌ Ocurrió un error al guardar la reserva.')
    }
  } else {
    alert('⚠️ Por favor, completa todos los campos antes de confirmar la reserva.')
  }
}
</script>

<style scoped>
/* Puedes dejar esto si tus componentes aún no están totalmente con Tailwind */
input, select {
  border: 1px solid #ccc;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 6px;
}
</style>
