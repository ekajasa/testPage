<template>
  <q-page padding>
    <q-card class="my-card">
      <img
        alt="dog"
        src="~@/assets/dog.avif"
        style="width: 320px;"
      />

      <q-card-section>
        <div class="text-h6">Naslov kartice</div>
        <div class="text-subtitle2">Podnaslov</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        opis ili neki tekst.
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="primary" label="Detalji" @click="onDetalji" />
        <q-btn flat color="negative" label="Odustani" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
function onDetalji() {
  console.log('Kliknuto na Detalji')
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>