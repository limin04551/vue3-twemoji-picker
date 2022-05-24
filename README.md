<p align='center'>

  <img src='https://s1.ax1x.com/2022/05/24/XPKrkV.png' alt='vue3 twemoji picker' width='600'/>
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

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 😃 [Twitter-Emoji](https://github.com/twitter/twemoji)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, of course
<br>

## Installation:
```bash
npm install vue3-twemoji-picker-final
// or
pnpm install vue3-twemoji-picker-final
// or
yarn add vue3-twemoji-picker-final
```

## Usage:
```bash
// import picker compopnent
import EmojiPicker from 'vue3-twemoji-picker-final'

// import css
import 'node_modules/vue3-twemoji-picker-final/dist/style.css'

<template>
  <div flex="~ col" items-center>
    <div flex h120>
      <EmojiPicker @select="selectEmoji" />
      <EmojiPicker
        :options="{native:true,locals:'en',hasGroupIcons:true,hasSearch:false,
                   hasGroupNames:false,stickyGroupNames:false,hasSkinTones:false,
                   recentRecords:false,}"
        @select="selectEmoji"
      />
    </div>
    <Footer />
  </div>
</template>
```


## Try it now!

### GitHub 

[https://github.com/limin04551/vue3-twemoji-picker](https://github.com/limin04551/vue3-twemoji-picker).




