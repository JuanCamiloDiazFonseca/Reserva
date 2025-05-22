<template>
  <div class="p-4">
    <label>Mesa disponible:</label>
    <select :value="mesaSeleccionada" @change="e => emit('update:mesaSeleccionada', e.target.value)">
      <option disabled value="">Selecciona una mesa</option>
      <option v-for="mesa in mesasDisponibles" :key="mesa" :value="mesa">
        Mesa {{ mesa }}
      </option>
    </select>

    <p class="mt-2">Mesa seleccionada: {{ mesaSeleccionada }}</p>
  </div>
</template>

<script setup>
const { mesaSeleccionada } = defineProps(['mesaSeleccionada'])
const emit = defineEmits(['update:mesaSeleccionada'])

const mesasDisponibles = [1, 2, 3, 4, 5]
</script>
