<script setup lang="ts">
const buildEnv = import.meta.env.VITE_BUILD_ENV
const apiUrl = import.meta.env.VITE_API_URL
</script>

<template>
  <div>
    <div>
      <h1>빌드 환경</h1>
      <h3>{{ buildEnv }}</h3>
    </div>
    <div>
      <h1>API URL</h1>
      <h3>{{ apiUrl }}</h3>
    </div>
  </div>
</template>

<style></style>
