<template>
  <q-page padding>
    <!-- Slajd 34: {{ }} i v-text -->
    <h5>Data binding</h5>
    <p>{{ msg }}</p>
    <p v-text="msg"></p>

    <!-- Slajd 35 i 36: v-text i v-html -->
    <h5>v-text i v-html</h5>
    <p v-text="htmlText"></p>
    <p v-html="htmlText"></p>

    <!-- Slajd 37 i 38: v-for, v-if / v-else -->
    <h5>v-for, v-if i v-else</h5>
    <p v-for="item in days" :key="item">
      <button v-if="item == 'Ponedjeljak'">{{ item }} *</button>
      <button v-else>{{ item }}</button>
    </p>

    <!-- Slajd 39: v-show -->
    <h5>v-show</h5>
    <p v-for="item in days" :key="item">
      <button v-if="item == 'Ponedjeljak'">{{ item }} *</button>
      <button v-else v-show="false">{{ item }}</button>
    </p>

    <!-- Slajd 40: v-once i v-bind -->
    <h5>v-once i v-bind</h5>
    <p v-once>Ovo se renderira samo jednom: {{ counter }}</p>
    <p>Ovo je reaktivno: {{ counter }}</p>
    <q-btn label="Povećaj" color="primary" @click="counter++" />
    <p>
      <a :href="link.url" :target="link.target">{{ link.text }}</a>
    </p>

    <!-- Slajd 41 i 43: v-model i ref -->
    <h5>v-model i ref</h5>
    <q-input color="purple-12" v-model="text" label="Item name" />
    <p>Upisano: {{ text }}</p>

    <!-- Slajd 44 i 45: :props i QTable sa slikom -->
    <h5>QTable (:rows, :columns, slika)</h5>
    <q-table flat bordered :rows="rows" :columns="columns" row-key="name">
      <template v-slot:body-cell-myimage="props1">
        <q-td :props="props1">
          <img :src="props1.row.slika" width="100px" />
        </q-td>
      </template>
    </q-table>

    <!-- Slajd 46 i 47: događaji -->
    <h5>Događaji</h5>
    <q-btn color="primary" label="Show all" v-on:click="showAll()" />
    <q-btn color="secondary" label="Show all (@click)" class="q-ml-md" @click="showAll()" />
    <p>{{ poruka }}</p>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import earth from '../assets/earth.jpg'
import images from '../assets/images.jpg'
import quasarLogo from '../assets/quasar-logo-vertical.svg'

const msg = 'Hello!'
const htmlText = '<p><b>Formatirani</b> tekst</p>'
const days = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja']

const counter = ref(0)

const link = {
  url: 'http://www.google.com',
  target: '_blank',
  text: 'Google'
}

const text = ref('')
text.value = 'Hello'

// Slajd 44 i 45
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Naziv',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'myimage',
    label: 'Slika',
    field: 'slika'
  }
]

const rows = [
  { name: 'Planet', slika: earth },
  { name: 'Mountains', slika: images },
  { name: 'Quasar', slika: quasarLogo }
]

// Slajd 46 i 47
const poruka = ref('')

function showAll() {
  poruka.value = 'Kliknuto na gumb Show all'
  console.log(poruka.value)
}
</script>