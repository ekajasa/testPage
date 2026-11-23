<template>
  <q-page padding>
    <h4>Zadatak</h4>
    <br />
    <q-input color="red" v-model="text" label="Napiši nešto" />
    <p>Upisano: {{ text }}</p>

    <h5>Niz imena</h5>
    <p v-for="item in name" :key="item">
      <p v-if="item == 'Ana'">{{ item }} *</p>
      <p v-else-if="item != 'Ivan'">{{ item }}</p>
    </p>
    <p style="color: blue;">Ime Ivan se ne prikazuje (v-else-if="item != 'Ivan'")</p>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
text.value = 'Pozdrav'

const name = ['Ana', 'Marko', 'Ivan', 'Sven', 'Marija', 'Nika', 'Nikola']
</script>