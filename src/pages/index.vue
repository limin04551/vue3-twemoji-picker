<script setup lang="ts">
// import { EmojiPicker } from '/dist/vue3-twemoji-picker.es.js'
// import '/dist/style.css'

</script>

<template>
  <div flex="~ col" items-center>
    <div flex>
      <EmojiPicker />
      <EmojiPicker locals="en" />
    </div>
    <Footer />
  </div>
</template>
