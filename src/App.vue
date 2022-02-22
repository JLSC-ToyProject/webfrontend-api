<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

const buildEnv = import.meta.env.VITE_BUILD_ENV
const apiUrl = import.meta.env.VITE_API_URL

</script>

<template>
  <h1>빌드 환경 {{ buildEnv }}</h1>
  <h1>API URL {{ apiUrl }}</h1>
</template>

<style>
</style>
