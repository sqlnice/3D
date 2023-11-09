<script setup>
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted } from 'vue'
import devTool from './devTool'
import loadTiles from './loadTiles'
onMounted(() => {
  const maxBounds = L.latLngBounds(L.latLng(0, 0), L.latLng(128, 128))
  const center = maxBounds.getCenter()
  const map = L.map('map', {
    attributionControl: false,
    crs: L.CRS.Simple,
    minZoom: 2,
    maxBounds
  })
  loadTiles(map, maxBounds)
  map.setView(center, 4)
  devTool(map)
})
</script>

<template>
  <div id="zoom"></div>
  <div id="map"></div>
</template>

<style scoped>
#map {
  height: 100vh;
  width: 100vw;
  background-color: black;
}
</style>
