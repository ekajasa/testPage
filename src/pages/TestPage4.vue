<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
       <p style="font-size:22px; font-weight:bold">Brojač:</p> {{ brojac }}
      </q-card-section>
      <q-card-actions>
        <q-btn label="Uvećaj za 1" color="blue" @click="uvecaj()" />
        <q-btn label="Resetiraj" color="negative" @click="resetiraj()" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const brojac = ref(0)

function uvecaj() {
  console.log('uvecaj')
  brojac.value++
}

function resetiraj() {
  console.log('resetiraj')
  brojac.value = 0
}
</script>