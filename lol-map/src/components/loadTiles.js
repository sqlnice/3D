import * as L from 'leaflet'
export default (map, maxBounds) => {
  // 根据同一张图模拟 2-4 级的贴图
  for (let i = 2; i <= 4; i++) {
    L.tileLayer('/images/tiles/terrain_z1.jpg', {
      minZoom: i,
      maxZoom: i,
      bounds: maxBounds,
      tileSize: 256 * Math.pow(2, i - 1)
    }).addTo(map)
  }
  // 从左上角开始放置贴图
  // 8 x 8
  for (let i = 1; i <= 64; i++) {
    const row = Math.floor((i - 1) / 8)
    const col = (i - 1) % 8
    const startLat = 128 - row * 16
    const startLng = col * 16
    const imageIndex = (i + '').padStart(2, '0')
    L.tileLayer(`/images/tiles/terrain_z2_${imageIndex}.jpg`, {
      minZoom: 5,
      maxZoom: 5,
      bounds: L.latLngBounds(L.latLng(startLat, startLng), L.latLng(startLat - 16, startLng + 16)),
      tileSize: 256 * 2
    }).addTo(map)
  }
}
