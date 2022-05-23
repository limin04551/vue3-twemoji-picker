<script setup>
import groups from '~/assets/json/emojis/zh-CN_bak.json'

const imageArr = []
let index = 0
groups.forEach((g) => {
  g.emojis.forEach((e) => {
    // if (imageArr.length > 200)
    //   return
    const cols = 50
    imageArr.push(`/src/assets/img/svg/${e.u}.svg`)
    const xAxis = parseInt(index % cols)
    const yAxis = parseInt(index / cols)
    index++
    e.u = {
      u: e.u,
      x: xAxis,
      y: yAxis,
    }
    if (e.v) {
      const arr = []
      e.v.forEach((v) => {
        imageArr.push(`/src/assets/img/svg/${v}.svg`)
        const xAxis = parseInt(index % cols)
        const yAxis = parseInt(index / cols)
        index++
        arr.push({
          u: v,
          x: xAxis,
          y: yAxis,
        })
      })
      e.v = arr
    }
  })
})

// console.log('groups', JSON.stringify(groups))

const src = ref('')

onMounted(() => {
  drawImage(imageArr, 50, (data) => {
    src.value = data
  })
})

/**
* 合并图片
* @param images 图片路径数组
* @param callback
*/
function drawImage(images, cols, callback) {
  if (!images || images.length === 0)
    return false

  const option = {
    width: 40, // 每个图片的宽
    height: 40, // 每个图片的高
    cols, // 每行几张图片
    encoderOptions: 1, // 拼出来的图片的质量，0-1之间，越大质量越好
    backgroundColor: null,
  }

  const imageCount = images.length // 图片数量

  const rows = Math.ceil(imageCount / option.cols) // 行数
  // console.log(`${rows}行`)

  const canvas = document.createElement('canvas') // 创建canvas元素
  canvas.width = option.width * option.cols // canvas宽度
  canvas.height = rows * option.height // canvas的高度
  const context = canvas.getContext('2d') // 创建渲染
  // 设置背景为白色
  // context.fillStyle = '#fff'
  context.fillStyle = 'rgba(255, 255, 255, 0)'
  context.fillRect(0, 0, canvas.width, canvas.height)

  // 已绘制的图片数(onload和onerror为异步)
  let drawCount = 0

  // 遍历图片路径数组
  images.forEach((img, index) => {
    const imageItem = new Image()
    imageItem.src = img
    // 跨域
    imageItem.crossOrigin = 'Anonymous'

    // 计算图片x坐标
    const xAxis = parseInt(index % cols) * option.width
    // 计算图片y坐标
    const yAxis = parseInt(index / cols) * option.height
    // 图片加载成功，绘制图片
    imageItem.onload = function () {
      context.drawImage(imageItem, xAxis, yAxis, option.width, option.height)
      drawCount++

      if (drawCount === imageCount) {
        // canvas返回base64数据
        callback(canvas.toDataURL('image/png', option.encoderOptions))
      }
    }
    // 图片加载失败，绘制空白
    imageItem.onerror = function () {
      drawCount++
      if (drawCount === imageCount) {
        // canvas返回base64数据
        callback(canvas.toDataURL('image/png', option.encoderOptions))
      }
    }
  })
}
</script>
<template>
  <!-- <div>123</div> -->
  <!-- <div :style="'background-image:url(/src/assets/img/twemoji.png);'" h510px w500px /> -->
  <img ref="imgDom" :src="src">
</template>
