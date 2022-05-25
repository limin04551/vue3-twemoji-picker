<script lang="ts" setup>
import { STORE_KEY } from './emoji-picker.d'
import { unicodeToEmoji } from './helpers'

const store = inject(STORE_KEY)
const { options, search, emojiGroups, activeGroup, staticText } = toRefs(store!.state!)
const updateActiveGroup = store!.updateActiveGroup
const updateSearch = store!.updateSearch

const searchValue = computed({
  get: () => search.value,
  set: (value: string) => updateSearch(value),
})

</script>
<template>
  <div v-if="options.hasGroupIcons || options.hasSearch" class="emoji-header">
    <div v-if="options.hasSearch" class="emoji-search">
      <div i-lucide-search c="#88888880" />
      <input ref="searchContainer" v-model="searchValue" type="text" :placeholder="staticText.search_placeholder">
    </div>
    <div v-if="options.hasGroupIcons" class="emoji-groups">
      <div
        v-for="group in emojiGroups" :key="group.key" class="emoji-group"
        @click="group.emojis.length > 0 ? updateActiveGroup(group.key) : ''"
      >
        <span v-if="options.native" :class="group.key === activeGroup && searchValue==''? 'selected' : ''">{{ unicodeToEmoji(group.u) }}</span>
        <img v-else :class="group.key === activeGroup && searchValue==''? 'selected' : ''" :src="`${options.imgSrc}svg/${group.u}.svg`" alt="">
        <div :class="['bottom-block',group.key === activeGroup && searchValue==''?'selected2':'']" />
      </div>
    </div>
    <div v-if="options.hasGroupIcons " class="emoji-spacing" />
  </div>
</template>
<style lang="scss" scoped>
.emoji-header {
  padding: 0 .5rem;

  .emoji-spacing {
    height: 1px;
    background-color: #dddddd80;
    margin-bottom: 2px;
  }

  .emoji-search {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    // border: 1px solid #88888880;
    box-shadow: inset 0 0 0 1px  #88888880;
    border-radius: 100rem;
    box-sizing: content-box;
    &:focus-within {
      box-shadow: inset 0 0 0 2px #00aadd;
      // border: 2px solid #00aadd;
    }

    input {
      margin-left: .25rem;
      flex: 1;
      border:none;
      outline: none;
      caret-color: #00aadd;
      background-color: transparent;
    }
  }

  .emoji-groups {
    padding: .3rem 0;
    display: flex;
    justify-content: space-between;
    ;

    .emoji-group {
      cursor: pointer;
      border-radius: 2px;
      padding: .25rem .4rem;
      position: relative;

      &:hover {
        background-color: #00aadd20;
        img {
          filter: unset;
        }
      }

      span{
        filter: grayscale(100%);
      }

      .selected {
        filter: unset;
      }

      img {
        filter: grayscale(100%);
        width: 20px;
        height: 20px;
      }

      .bottom-block{
        height:4px;
        width: 100%;
        position: absolute;
        bottom:-4px;
        left:0;
        border-radius:2px;
      }

      .selected2{
        background-color: #00aadd;
      }

    }

  }

}
</style>
