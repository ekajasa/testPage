<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Aplikacija </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> TEST </q-item-label>

        <EssentialLink
  v-for="link in linksList"
  :key="link.label"
  v-bind="link"
/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from '../components/EssentialLink.vue'

const linksList = [
  {
    title: 'Index',
    caption: 'Početna stranica',
    icon: 'home',
    to: '/'
  },
  {
    label: 'Test page',
    caption: 'Primjeri iz slajdova',
    icon: 'science',
    to: '/test'
  },
  {
    label: 'Test page2',
    caption: 'Zadatak',
    icon: 'science',
    to: '/test2'
  },
  {
    label: 'Test page3',
    caption: 'Zadatak',
    icon: 'science',
    to: '/test3'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>