<p align='center'>

  <img src='https://s1.ax1x.com/2022/05/24/XPBPIO.png' alt='vue3 twemoji picker' width='800'/>
  <img src='https://s1.ax1x.com/2022/05/24/XPBZQA.png' alt='vue3 twemoji picker' width='800'/>
</p>

<h6 align='center'>
<a href="https://vue3-twemoji-picker.netlify.app/">在线 Demo</a>
</h6>

<br>

<p align='center'>
<a href="https://github.com/limin04551/vue3-twemoji-picker/blob/main/README.md">English</a> |<b> 简体中文</b>
<!-- Contributors: Thanks for geting interested, however we DON'T accept new transitions to the README, thanks. -->
</p>
<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - 就是快!

- 😃 [Twitter-Emoji](https://github.com/twitter/twemoji)

- 🔥 使用 [新 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, 当然
<br>

## 安装:
```bash
npm install vue3-twemoji-picker-final
// or
pnpm install vue3-twemoji-picker-final
// or
yarn add vue3-twemoji-picker-final
```

## 使用:
你需要把图片复制到自己的项目中,然后'imgSrc'参数填写自己的图片路径,否则打包后将会访问不到图片

<p align='center'>
  <img src='https://s1.ax1x.com/2022/05/25/XkdwCD.png' alt='vue3 twemoji picker' width='800'/>
</p>
```bash
<script setup lang="ts">
// 导入组件
import { EmojiPicker } from 'vue3-twemoji-picker-final'

// 导入样式
import 'node_modules/vue3-twemoji-picker-final/dist/style.css'

const selectEmoji = (e) => {
  console.log(e, 'e')
//   {
//     "n": [
//         "penguin" //描述信息
//     ],
//     "u": {
//         "u": "1f427", //无皮肤信息
//         "x": 12, // 所有图片的聚合图中的x坐标
//         "y": 31  //所有图片的聚合图中的y坐标
//     },
//     "r": {
//         "u": "1f427",//有皮肤信息
//         "x": 12,
//         "y": 31
//     },
//     "t": "neutral", 皮肤颜色
//     "i": "🐧", // emoji unicode
//     "imgSrc": "/img/1f427.svg" //图片地址,可以替换为CDN
// }
}
</script>

<template>
  <div flex="~ col" items-center>
    <div flex h120>
      <EmojiPicker @select="selectEmoji" />
      <EmojiPicker :options="{'locals':'en'}" @select="selectEmoji" />
      <EmojiPicker
        :options="{imgSrc:'/img/',native:true,locals:'en',hasGroupIcons:true,hasSearch:false,
                   hasGroupNames:false,stickyGroupNames:false,hasSkinTones:false,
                   recentRecords:false,}"
        @select="selectEmoji"
      />
    </div>
    <Footer />
  </div>
</template>

```


## 现在可以试试!
### 这是我第一个typescript项目,如果对您有帮助,请给我个start~⭐️

### GitHub 

[https://github.com/limin04551/vue3-twemoji-picker](https://github.com/limin04551/vue3-twemoji-picker).




