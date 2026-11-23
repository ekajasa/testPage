<template>
  <q-page padding>
    <h5>Spremanje teksta u niz</h5>
    <q-card style="width: 300px">
      <q-card-section>
        <q-input v-model="tekst" label="Unesi tekst" outlined />
      </q-card-section>

      <q-card-actions>
        <q-btn label="Spremi" color="blue" @click="spremi()" />
      </q-card-actions>

      <q-card-section v-for="t in tekstovi" :key="t">
        {{ t }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const tekst = ref('')
const tekstovi = ref([])

function spremi() {
  if (tekst.value.trim() === '') return
  tekstovi.value.push(tekst.value)
  tekst.value = ''
}
</script>