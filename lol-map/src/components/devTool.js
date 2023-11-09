// 展示经纬度
export default map => {
  map.on('mousemove', e => {
    const zoomDiv = document.getElementById('zoom')
    zoomDiv.style.position = 'absolute'
    zoomDiv.style.top = '10px'
    zoomDiv.style.left = '50px'
    zoomDiv.style.color = 'black'
    zoomDiv.style.backgroundColor = 'white'
    zoomDiv.style.padding = '5px'
    zoomDiv.style.borderRadius = '5px'
    zoomDiv.style.zIndex = 1000
    zoomDiv.innerHTML = `zoom: ${map.getZoom()}<br>lat: ${e.latlng.lat}<br>lng: ${e.latlng.lng}`
  })
}
