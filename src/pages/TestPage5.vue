<template>
  <q-page padding>
    <h5>Zbroj dva broja </h5><br><br>
    <q-card style="width: 300px">
      <q-card-section>
        <q-input v-model.number="broj1" type="number" label="Prvi broj" outlined floating/>
        <q-input v-model.number="broj2" type="number" label="Drugi broj" outlined class="q-mt-md" floating/>
      </q-card-section>

      <q-card-actions>
        <q-btn label="Zbroji" color="blue" @click="zbroji()" />
      </q-card-actions>

      <q-card-section>
        Rezultat: {{ rezultat }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const broj1 = ref(0)
const broj2 = ref(0)
const rezultat = ref(0)

function zbroji() {
  rezultat.value = Number(broj1.value) + Number(broj2.value)
}
</script>