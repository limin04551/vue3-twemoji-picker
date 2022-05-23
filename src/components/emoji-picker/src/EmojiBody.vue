<script lang="ts" setup>
// import type { Store } from './emoji-picker.d'
import type { EmojiGroup, EmojiInfo } from './emoji-picker.d'
import { ALL_EMOJI_IMG_SRC, EmojiHeight, EmojiWidth, STORE_KEY } from './emoji-picker.d'
import { filterEmojis, isMac, unicodeToEmoji } from './helpers'

const store = inject(STORE_KEY)
const { activeGroup, staticText } = toRefs(store!.state!)
const { updateEmoji, updateActiveGroup, saveRecentEmoji, clearRecentEmoji } = store!
const state = store!.state

const emojiGroups = computed<EmojiGroup[]>(() =>
  filterEmojis(
    state.emojiGroups,
    state.search,
    state.skinTone,
  ),
)
const hasGroupNames = computed(() => state.options.hasGroupNames)
const isSticky = computed(() => state.options.stickyGroupNames)

const hoverEmoji = (emoji: EmojiInfo) => {
  updateEmoji(emoji)
}

const emits = defineEmits(['select'])
const platform = isMac() ? 'is-mac' : ''

const selectEmoji = (emoji: EmojiInfo) => {
  emits('select', {
    ...emoji,
    t: state.skinTone,
    i: unicodeToEmoji(emoji.r!.u),
  })

  saveRecentEmoji(emoji)
}

let doScroll = true

const bodyScroll = (e: any) => {
  for (let i = emojiGroups.value.length - 1; i >= 0; i--) {
    const group = emojiGroups.value[i]
    if (e.target.scrollTop >= group.y!) {
      if (group.key !== activeGroup.value) {
        doScroll = false
        updateActiveGroup(group.key)
        setTimeout(() => {
          doScroll = true
        }, 50)
        break
      }
      else {
        break
      }
    }
  }
}

const emojiBody = ref<HTMLElement>()

watch(
  () => state.activeGroup,
  () => {
    if (doScroll) {
      const target = emojiBody.value
        ?.querySelector(`#${state.activeGroup}`) as HTMLElement
      if (target) {
        const parentNode = target.parentNode as HTMLElement
        parentNode.scrollTop = target.offsetTop
      }
    }
    // parentNode.scrollTop = target.offsetTop - parentNode.offsetTop
  },
)

watchEffect(
  () => {
    for (const group of emojiGroups.value) {
      const target = emojiBody.value
        ?.querySelector(`#${group.key}`) as HTMLElement
      group.y = target.offsetTop
    }
  },
  {
    flush: 'post',
  },
)

onMounted(() => {
  if (emojiGroups.value[0].emojis.length > 0)
    updateActiveGroup(emojiGroups.value[0].key)
  else
    updateActiveGroup(emojiGroups.value[1].key)
})

</script>

<template>
  <div ref="emojiBody" :class="platform" class="emoji-body" @scroll="bodyScroll($event)">
    <template v-if="emojiGroups.length">
      <div v-for="group in emojiGroups" :id="group.key" :key="group.key" class="emoji-group">
        <div v-if="hasGroupNames" class="group-name" :class="isSticky ? `sticky` : ``">
          {{ group.title }}
          <span v-if="group.key==='recent_emojis'" class="c-btn" @click="clearRecentEmoji">
            {{ staticText.clear_button }}
          </span>
        </div>
        <div class="emojis-wrap">
          <div flex="~ wrap">
            <div
              v-for="emoji in group.emojis" :key="emoji.r!.u" class="emoji-block" @click="selectEmoji(emoji)"
              @mouseenter="hoverEmoji(emoji)"
            >
              <span v-if="state.options.native">{{ unicodeToEmoji(emoji.r!.u) }}</span>
              <div
                v-else class="emoji-bg" :style="`background-image: url(${ALL_EMOJI_IMG_SRC});
              background-position: ${emoji.r!.x * -EmojiWidth}px ${emoji.r!.y * -EmojiHeight}px;
              `"
              />
            </div>
          </div>
        </div>
        <div class="emoji-spacing" />
      </div>
    </template>
    <span v-else class="v3-no-result">
      {{ staticText.no_results }}
    </span>
  </div>
  <!-- <div @click="select" /> -->
  <!-- {{ store!.state }} -->
</template>
<style scoped lang="scss">
.emoji-body {

  position: relative;

  $size: 6px;
  scrollbar-color: #393d3f rgba(#000, 0.1);
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: $size;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
    background: rgba(#000, 0.3);
    border-radius: 5px;
  }

  &:hover::-webkit-scrollbar-thumb {
    display: block;
  }

  height: 20rem;
  padding-left: 6px;

  overflow-y: auto;

  .group-name {
    padding: .2rem .3rem;
    backdrop-filter: blur(1px);
    font-weight: bold;
    background-color: #ffffff80;
    display:flex;
    justify-content:space-between;

    .c-btn{
      cursor: pointer;
      color: #00aadd;
      font-size: .9rem;
      padding: .2rem .6rem;
      border-radius:1rem;
      display:flex;
      align-items: center;

      &:hover{
        background-color: #00aadd20;
      }
    }
  }

  .sticky {
    position: sticky;
    top: 0;
  }

   .emoji-spacing {
    height: 1px;
    background-color: #dddddd80;
    margin-bottom: 2px;
  }

  .emojis-wrap {
    padding: .5rem 0;

    .emoji-block {
      padding: 4px 6px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background: #dddddd80;
      }

      .emoji-bg {
        width: 20px;
        height: 20px;
        background-size: 5000% 5300%;
      }
    }

  }

}
</style>
