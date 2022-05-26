<script setup lang="ts">
import { EmojiPicker } from '/dist/vue3-twemoji-picker.es.js'
// import '/dist/style.css'
// console.log(EmojiPicker, 'EmojiPicker')

const selectEmoji = (e: any) => {
  console.log(e, 'e')
//   {
//     "n": [  //desc name
//         "smiling face with heart-shaped eyes",
//         "heart_eyes"
//     ],
//     "u": {
//         "u": "1f60d",//without tone
//         "x": 12,     // All pictures of a picture of a picture of the x coordinates
//         "y": 0       //All pictures of a picture of a picture of the y coordinates
//     },
//     "r": {
//         "u": "1f60d",//with skin tone
//         "x": 12,
//         "y": 0
//     },
//     "t": "neutral", // skin tone
//     "i": "😍",      // emoji unicode
//     "imgSrc": "https://fastly.jsdelivr.net/gh/limin04551/vue3-twemoji-picker/public/img/svg/1f60d.svg"
// }              //img path ,you can use cdn
}
</script>

<template>
  <div flex="~ col" items-center>
    <div flex h120>
      <!-- <EmojiPicker @select="selectEmoji" /> -->
      <EmojiPicker :options="{imgSrc:'https://fastly.jsdelivr.net/gh/limin04551/vue3-twemoji-picker/public/img/','locals':'en'}" @select="selectEmoji" />
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
