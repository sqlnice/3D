import * as L from 'leaflet'
export default map => {
  const fogMaskImage = '/images/fx/fog-mask.jpg'
  const bounds = L.latLngBounds(L.latLng(0, -31), L.latLng(128, 158))
  L.imageOverlay(fogMaskImage, bounds, { opacity: 0.3 }).addTo(map)
}
