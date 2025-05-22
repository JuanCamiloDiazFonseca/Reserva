<template>
  <div class="p-4">
    <label>Nombre:</label>
    <input type="text" :value="nombre" @input="e => emit('update:nombre', e.target.value)" />

    <label class="ml-4">Teléfono:</label>
    <input type="text" :value="telefono" @input="e => emit('update:telefono', e.target.value)" />

    <p class="mt-2">Cliente: {{ nombre }} - {{ telefono }}</p>
  </div>
</template>

<script setup>
const { nombre, telefono } = defineProps(['nombre', 'telefono'])


const emit = defineEmits(['update:nombre', 'update:telefono'])
</script>
