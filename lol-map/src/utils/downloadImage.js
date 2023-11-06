const https = require('https')
const fs = require('fs')
const path = require('path')

// 服务器路径
const url = 'https://yz.lol.qq.com/v1/map/images/tiles/zh_cn'
const start = 0
const end = 100

const downloadImage = imagePath => {
  const fileName = path.basename(imagePath)
  const file = fs.createWriteStream(fileName)

  https.get(imagePath, response => {
    response.pipe(file)
  })
}

// 循环下载
for (let i = start; i < end; i++) {
  // 图片地址
  const imagePath = `${url}/terrain_z1_${i}.jpg`
  downloadImage(imagePath)
}
