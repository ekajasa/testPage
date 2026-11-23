<template>
  <q-page padding>
    <h4>Zadatak 1.</h4>
    <!-- QBadge -->
<div class="q-pa-md q-gutter-sm">
<q-btn push color="white" text-color="primary" label="Unread Mails">
<q-badge color="orange" v-model="readmsg" floating>{{ readmsg }}</q-badge>
</q-btn>
<q-btn dense color="purple" round icon="email" class="q-ml-md">
<q-badge color="red" v-model="delmsg" floating>{{ delmsg }}</q-badge>
</q-btn>
</div>

<!-- QCard -->
<div class="q-pa-md row items-start q-gutter-md">
<q-card class="my-card bg-secondary text-white">
<q-card-section>
<div class="text-h6">Our Changing Planet</div>
<div class="text-subtitle2">by John Doe</div>
</q-card-section>
<q-card-section>
{{ lorem }}
</q-card-section>
<q-separator dark />
<q-card-actions>
<q-btn flat @click="openMsg()">Open</q-btn>
<q-btn flat @click="deleteMsg()">Delete</q-btn>
</q-card-actions>
</q-card>
</div>

<h4>Zadatak 2.</h4>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const readmsg = ref(22)
const delmsg = ref(4)

function openMsg() {
readmsg.value -= 1
console.log("read " + readmsg.value)
 }
function deleteMsg() {
delmsg.value -= 1
console.log("delete " + delmsg.value)
 }


</script>
