<script setup lang="ts">
// import { EmojiPicker } from '/dist/vue3-twemoji-picker.es.js'
// import '/dist/style.css'
// console.log(EmojiPicker, 'EmojiPicker')

const selectEmoji = (e: any) => {
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
      <EmojiPicker :options="{imgSrc:'/img/','locals':'en'}" @select="selectEmoji" />
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
