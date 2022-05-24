<script lang="ts" setup>
import { isMac, unicodeToEmoji } from './helpers'
import type { SkinTone } from './emoji-picker.d'
import { EmojiHeight, EmojiWidth, SKIN_TONES, STORE_KEY } from './emoji-picker.d'
const platform = isMac() ? 'is-mac' : ''
const store = inject(STORE_KEY)
const { currentEmoji, options, skinTone } = toRefs(store!.state!)
const updateSkinTone = store!.updateSkinTone
let skinToneOpen = $ref(false)
const toggleSkinToneState = (tone: SkinTone) => {
  if (skinToneOpen) {
    updateSkinTone(tone)
    skinToneOpen = false
  }
  else {
    skinToneOpen = true
  }
}

</script>
<template>
  <div class="emoji-footer">
    <div class="footer-left">
      <span :class="platform" class="current-emoji">

        <span v-if="options.native">{{ unicodeToEmoji(currentEmoji.r!.u) }}</span>
        <div
          v-else class="emoji-bg" :style="`background-image: url(${options.imgSrc}twemoji.png);
        background-position: ${currentEmoji.r!.x * -EmojiWidth * 1.5}px ${currentEmoji.r!.y * -EmojiHeight * 1.5}px;
        `"
        />
      </span>
      <span v-show="!skinToneOpen" class="emoji-desc">
        {{ currentEmoji.n[0] }}
      </span>
    </div>
    <template v-if="options.hasSkinTones">
      <div class="footer-right">
        <div
          v-for="tone in SKIN_TONES" v-show="skinToneOpen || tone === skinTone" :key="tone"
          :style="`background-color:#${tone}`"
          :class="['toggle-button-' + tone, 'toggle-button', tone === skinTone ? 'toggle-button-select' : '']"
          @click="toggleSkinToneState(tone)"
        >
          <div v-if="tone === skinTone" class="checked" />
        </div>
      </div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.emoji-footer {
  overflow: hidden;
  border-top: 1px solid #dddddd80;
  padding: 10px 14px;
  display: flex;
  justify-content: space-between;

  .footer-left {
    width: 80%;
    display: flex;
    align-items: center;

    .is-mac {
      font-family: 'Apple Color Emoji';
    }

    .current-emoji {
      margin-right: 1rem;

      .emoji-bg {
        width: 30px;
        height: 30px;
        background-size: 5000% 5300%;
      }
    }

    .emoji-desc {
      color: gray;
      opacity: 80;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

  }

  .footer-right {
    display: flex;
    align-items: center;

    .toggle-button {
      cursor: pointer;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-left: 4px;
      box-sizing: border-box;
      position: relative;

      &-neutral {
        color: #ffd225;
        background-color: #ffd225;
      }

      &-1f3fb {
        color: #ffdfbd;
        background-color: #ffdfbd;
      }

      &-1f3fc {
        color: #e9c197;
        background-color: #e9c197;
      }

      &-1f3fd {
        color: #c88e62;
        background-color: #c88e62;
      }

      &-1f3fe {
        color: #a86637;
        background-color: #a86637;
      }

      &-1f3ff {
        color: #60463a;
        background-color: #60463a;
      }

      &-select {
        width: 24px;
        height: 24px;
        border: 2px solid #00aadd;
      }

      .checked {
        width: 20px;
        height: 20px;

        &:after {
          content: "";
          background-color: white;
          width: 6px;
          height: 2px;
          position: absolute;
          top: 12px;
          left: 3px;
          transform: rotate(45deg);
          border-radius: 2px;
        }

        &::before {
          content: "";
          background-color: white;
          width: 14px;
          height: 2px;
          position: absolute;
          top: 10px;
          left: 5px;
          transform: rotate(-45deg);
          border-radius: 2px;
        }

      }

    }
  }
}
</style>
