<p align='center'>

  <img src='https://s1.ax1x.com/2022/05/24/XCPNcT.png' alt='vue3 twemoji picker' width='600'/>
  <img src='https://s1.ax1x.com/2022/05/24/XCnHoT.png' alt='vue3 twemoji picker' width='600'/>
</p>

<h6 align='center'>
<a href="https://vue3-twemoji-picker.netlify.app/">Live Demo</a>
</h6>

<br>

<p align='center'>
<b>English</b> | <a href="https://github.com/limin04551/vue3-twemoji-picker/blob/main/README.zh-CN.md">简体中文</a>
<!-- Contributors: Thanks for geting interested, however we DON'T accept new transitions to the README, thanks. -->
</p>
<br>

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 😃 [Twitter-Emoji](https://github.com/twitter/twemoji)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, 当然
<br>

## Installation:
```bash
npm install vue3-emoji-picker
// or
pnpm install vue3-emoji-picker
// or
yarn add vue3-emoji-picker
```

## Usage:
```bash
// import picker compopnent
import EmojiPicker from 'vue3-twemoji-picker-final'

// import css
import 'node_modules/vue3-twemoji-picker-final/dist/style.css'

<template>
  <div flex="~ col" items-center>
    <div flex>
      <EmojiPicker @select="handleSelectEmoji"/>
      <EmojiPicker locals="en" @select="handleSelectEmoji" />
    </div>
    <Footer />
  </div>
</template>
```


## Try it now!

### GitHub 

[](https://github.com/limin04551/vue3-twemoji-picker).




