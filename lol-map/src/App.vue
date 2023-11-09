<script setup>
import { onMounted } from 'vue'
import Map from './components/Map.vue'
onMounted(() => {
  window.done()
})
</script>

<template>
  <div class="splash"></div>
  <Map></Map>
</template>
<style scoped></style>
