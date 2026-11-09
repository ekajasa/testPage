<template>
  <q-item clickable :to="to" :href="link" :target="link ? '_blank' : undefined">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  caption: { type: String, default: '' },
  link: { type: String, default: undefined },
  to: { type: [String, Object], default: undefined },
  icon: { type: String, default: '' }
})
</script>