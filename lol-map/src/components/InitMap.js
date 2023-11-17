import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls'
import { resizeRendererToDisplay } from '../utils'
import TWEEN from '@tweenjs/tween.js'
let rafId
export default function InitMap() {
  const canvas = document.querySelector('#map')
  const renderer = new THREE.WebGLRenderer({
    canvas,
    ntialias: true,
    alpha: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  const scene = new THREE.Scene()
  const AxesHelper = new THREE.AxesHelper(3)
  scene.add(AxesHelper)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.update()

  // 点光源
  const point = new THREE.PointLight(0xffffff)
  point.position.set(100, 100, 100)
  scene.add(point)
  // 环境光
  const light = new THREE.AmbientLight(0xcccccc)
  light.position.set(0, 0, 0)
  scene.add(light)

  function render(time) {
    time *= 0.001
    if (resizeRendererToDisplay(renderer)) {
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }
    TWEEN.update()
    renderer.render(scene, camera)
    rafId = requestAnimationFrame(() => render())
  }
  render()
  return {
    scene,
    camera,
    renderer,
    controls,
    rafId
  }
}
