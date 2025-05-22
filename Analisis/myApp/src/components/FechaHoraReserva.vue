<template>
  <div class="p-4">
    <label>Fecha:</label>
    <input type="date" :value="fecha" @input="e => emit('update:fecha', e.target.value)" />

    <label class="ml-4">Hora:</label>
    <input type="time" :value="hora" @input="e => emit('update:hora', e.target.value)" />

    <p class="mt-2">Seleccionaste: {{ fecha }} a las {{ hora }}</p>
  </div>
</template>

<script setup>
const { fecha, hora } = defineProps(['fecha', 'hora'])
const emit = defineEmits(['update:fecha', 'update:hora'])
</script>

  