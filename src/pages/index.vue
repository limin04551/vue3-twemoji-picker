<script setup lang="ts">
// import { EmojiPicker } from '/dist/vue3-twemoji-picker.es.js'
// import '/dist/style.css'

const selectEmoji = (e) => {
  console.log(e, 'e')
}
</script>

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
