<script lang="ts" setup>
import useStore from './store'
import type { Locals } from './emoji-picker.d'
import { STORE_KEY } from './emoji-picker.d'

const props = withDefaults(defineProps<{
  locals?: Locals
}>(), {
  locals: 'zh_CN',
})

const emits = defineEmits(['select'])

function onSelect(emoji: any) {
  emits('select', emoji)
}

const store = useStore(props.locals)
provide(STORE_KEY, store)

</script>

<template>
  <div ref="picker" class="emoji-picker">
    <EmojiHeader />
    <EmojiBody @select="onSelect" />
    <EmojiFooter />
  </div>
</template>
<style lang="scss" scoped>
  .emoji-picker{
    width: 22rem;
    padding: 1rem 1.5rem;
  }
</style>
