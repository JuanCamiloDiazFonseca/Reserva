<template>
  <ion-page :translucent="true">
    <ion-header>
      <ion-toolbar>
        <ion-title>Reservas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="r in reservas" :key="r.id">
          <ion-label>
            <h2>{{ r.cliente }}</h2>
            <p>{{ r.fechaHora }} - Mesa {{ r.mesa }}</p>
          </ion-label>
        </ion-item>
      </ion-list>

     <ion-item>
        <ion-input v-model="nuevaReserva.cliente" placeholder="Cliente"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="nuevaReserva.telefono" placeholder="Teléfono"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="nuevaReserva.fechaHora" placeholder="Fecha y hora"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="nuevaReserva.mesa" placeholder="Mesa"></ion-input>
      </ion-item>
      <ion-button expand="full" @click="guardarReserva">Guardar Reserva</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'

const reservas = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/reservas')
    reservas.value = response.data
  } catch (error) {
    console.error('Error al obtener reservas:', error)
  }
})
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
