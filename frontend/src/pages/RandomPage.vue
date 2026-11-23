<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4">Random joke</div>
      </q-card-section>
 
      <q-card-section class="q-pt-none">
        {{ text }}
      </q-card-section>
 
      <q-separator />
 
      <q-card-actions>
        <q-btn flat size="lg" color="primary" label="Nova šala" @click="loadJoke" />
      </q-card-actions>
    </q-card>
 
    <q-card class="my-card q-mt-md">
      <q-card-section>
        <div class="text-h4">Bored</div>
        <div class="text-h6 text-weight-bold">{{ bored.type }}</div>
      </q-card-section>
 
      <q-card-section class="q-pt-none">
        {{ bored.activity }}
      </q-card-section>
 
      <q-separator />
 
      <q-card-actions>
        <q-btn flat size="lg" color="primary" label="Nova aktivnost" @click="loadBored" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card q-mt-md">
      <q-card-section>
        <div class="text-h4">Cat fact</div>
      </q-card-section>
 
      <q-card-section class="q-pt-none">
        {{ cat }}
      </q-card-section>
 
      <q-separator />
 
      <q-card-actions>
        <q-btn flat size="lg" color="primary" label="Nova činjenica" @click="loadCats" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card q-mt-md">
      <q-card-section>
        <div class="text-h4">Backend</div>
      </q-card-section>
 
      <q-card-section class="q-pt-none">
        {{ hello }}
      </q-card-section>
 
      <q-separator />
 
      <q-card-actions>
        <q-btn flat size="lg" color="primary" label="Pozdrav" @click="loadHello" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
 
<script setup>
import { ref, onMounted } from 'vue'
 
// tekst koji se prikazuje u kartici
const text = ref('Učitavanje...')
 
async function loadJoke() {
  try {
    // u razvoju ide preko proxyja iz quasar.config.js (/api-joke -> https://dumbapis.com)
    const response = await fetch('/api-joke/joke')
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const result = await response.json()
    console.log(result) // 4. korak: prvo ispis u konzolu
    text.value = result.joke // zatim prikaz u kartici
  } catch (err) {
    console.error(err)
    text.value = 'Šala se nije učitala.'
  }
}
 
const bored = ref({ activity: 'Učitavanje...', type: '', participants: null })
 
async function loadBored() {
  try {
    const response = await fetch('/bored-api/random')
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const result = await response.json()
    console.log(result)
    bored.value = result
  } catch (err) {
    console.error(err)
    bored.value = { activity: 'Aktivnost se nije učitala.', type: '', participants: null }
  }
}
 
const cat = ref('Učitavanje...')
 
async function loadCats() {
  try {
    const response = await fetch('/api-cats/fact')
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const result = await response.json()
    console.log(result)
    cat.value = result.fact
  } catch (err) {
    console.error(err)
    cat.value = 'Činjenica se nije učitala.'
  }
}
 
const hello = ref('Učitavanje...')
 
async function loadHello() {
  try {
    const response = await fetch('/api/hello')
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const result = await response.text() // poslužitelj šalje običan tekst
    console.log(result)
    hello.value = result
  } catch (err) {
    console.error(err)
    hello.value = 'Poslužitelj nije dostupan.'
  }
}
 
onMounted(() => {
  loadJoke()
  loadBored()
  loadCats()
  loadHello()
})
</script>
 
<style scoped>
.my-card {
  width: 100%;
  max-width: 600px;
  font-size: 22px;
  line-height: 1.5;
}
</style>
 