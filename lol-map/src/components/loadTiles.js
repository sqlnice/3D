import * as THREE from 'three'
const imageUrl1 = '/images/tiles/terrain_z1.jpg'
const imageUrl2 = '/images/tiles/terrain_z2_0.jpg'
export default scene => {
  const loader = new THREE.TextureLoader()
  const texture1 = loader.load(imageUrl1)
  const geometry = new THREE.PlaneGeometry(100, 100)
  const material = new THREE.MeshBasicMaterial({
    map: texture1,
    transparent: true
  })
  const plane = new THREE.Mesh(geometry, material)
  plane.position.set(0, 0, 0)
  scene.add(plane)
}
