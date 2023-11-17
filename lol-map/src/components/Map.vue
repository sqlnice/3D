<script setup>
import { onMounted } from 'vue'
import InitMap from './initMap.js'
import loadTiles from './loadTiles'
onMounted(() => {
  const { scene, camera, renderer } = InitMap()
  loadTiles(scene)
  // 在屏幕上展示 camera 的层级
  const zoom = document.getElementById('zoom')
  zoom.innerHTML = camera.zoom
  camera.addEventListener('zoom', () => {
    zoom.innerHTML = camera.zoom
  })

  window.done()
})
</script>

<template>
  <canvas id="map"></canvas>
  <div id="zoom"></div>
</template>

<style scoped></style>
