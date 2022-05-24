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
```bash
// import picker compopnent
import EmojiPicker from 'vue3-twemoji-picker-final'

// import css
import 'node_modules/vue3-twemoji-picker-final/dist/style.css'

const selectEmoji = (e) => {
  console.log(e, 'e')
//   {
//     "n": [
//         "penguin" //desc name
//     ],
//     "u": {
//         "u": "1f427", //without tone
//         "x": 12, // All pictures of a picture of a picture of the x coordinates
//         "y": 31  //All pictures of a picture of a picture of the y coordinates
//     },
//     "r": {
//         "u": "1f427",//with skin tone
//         "x": 12,
//         "y": 31
//     },
//     "t": "neutral", skin tone
//     "i": "🐧", // emoji unicode
//     "imgSrc": "/img/1f427.svg" //img path ,you can use cdn
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

### GitHub 

[https://github.com/limin04551/vue3-twemoji-picker](https://github.com/limin04551/vue3-twemoji-picker).




