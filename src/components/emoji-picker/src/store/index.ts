import { DEFAULT_EMOJI, SKIN_TONE_NEUTRAL } from './../emoji-picker.d'
import type { EmojiInfo, Options, SkinTone, State, Store } from './../emoji-picker.d'
import emojiGroupsEn from '~/assets/json/emojis/emojis-en.json'
import emojiGroupsZhCN from '~/assets/json/emojis/emojis-zh_CN.json'
import textInfoEn from '~/assets/json/emojis/text-en.json'
import textInfoZhCn from '~/assets/json/emojis/text-zh_CN.json'
// import emojiGroups from '~/assets/json/emojis/zh-CN.json'

export default function useStore(options: Options): Store {
  const defaultOptions: Record<string, any> = {
    locals: 'zh_CN',
    native: false,
    hasSearch: true,
    hasGroupIcons: true,
    hasGroupNames: true,
    hasSkinTones: true,
    stickyGroupNames: true,
    recentRecords: true,
    imgSrc: import.meta.env.DEV ? '/img/' : '/node_modules/vue3-twemoji-picker-final/dist/img/',
    disabledGroups: [],
  }

  options = {
    ...defaultOptions,
    ...options,
  }

  const staticText = options.locals === 'zh_CN' ? textInfoZhCn : textInfoEn
  let emojiGroups = options.locals === 'zh_CN' ? emojiGroupsZhCN : emojiGroupsEn
  if (options.recentRecords) {
    const str = localStorage.getItem('recentEmojis')
    const recentEmojis = JSON.parse(str || '[]')
    emojiGroups[0].emojis = recentEmojis
  }
  else {
    emojiGroups = emojiGroups.slice(1)
  }
  const state = reactive<State>({
    emojiGroups,
    search: '',
    activeGroup: '',
    currentEmoji: DEFAULT_EMOJI,
    skinTone: 'neutral',
    staticText,
    options,
  })

  /**
   * Update search text.
   * @param value - string.
   */
  const updateSearch = (value: string) => {
    state.search = value
    if (state.search === '') {
      if (state.emojiGroups[0].emojis.length > 0)
        state.activeGroup = state.emojiGroups[0].key
      else
        state.activeGroup = state.emojiGroups[1].key
    }
  }

  /**
   * Update currently selected emoji.
   * @param value - Emoji.
   */
  const updateEmoji = (value: EmojiInfo) => {
    state.currentEmoji = value
  }

  /**
   * Update active emoji group/category.
   * @param group - GroupName
   */
  const updateActiveGroup = (group: string) => {
    state.activeGroup = group
  }

  const updateCurrentEmojiSkinTone = (skinTone: SkinTone) => {
    let result = state.currentEmoji.u
    if (
      skinTone !== SKIN_TONE_NEUTRAL
      && Array.isArray(state.currentEmoji.v)
    ) {
      const v_index
        = state.currentEmoji.v?.findIndex(v =>
          v.u.includes(skinTone),
        ) || -1
      if (v_index !== -1 && state.currentEmoji.v)
        result = state.currentEmoji.v![v_index]
    }

    state.currentEmoji.r = result
  }
  /**
   * Update emoji skin tone
   * @param tone - skin tone value
   */
  const updateSkinTone = (tone = SKIN_TONE_NEUTRAL) => {
    state.skinTone = tone
    updateCurrentEmojiSkinTone(tone)
  }

  /**
   * Update/merge options.
   * @param options
   */
  const updateOptions = (options: Record<string, any>) => {
    state.options = Object.assign(state.options, options)
  }

  const clearRecentEmoji = () => {
    state.emojiGroups[0].emojis = []
    localStorage.setItem('recentEmojis', JSON.stringify(state.emojiGroups[0].emojis))
    if (state.activeGroup === state.emojiGroups[0].key)
      state.activeGroup = state.emojiGroups[1].key
  }

  const saveRecentEmoji = (emoji: EmojiInfo) => {
    if (!options.recentRecords)
      return
    const recentEmojis = state.emojiGroups[0].emojis.filter((e: EmojiInfo) => {
      return e.r!.u !== emoji.r!.u
    })
    state.emojiGroups[0].emojis = recentEmojis
    state.emojiGroups[0].emojis.unshift(emoji)
    localStorage.setItem('recentEmojis', JSON.stringify(state.emojiGroups[0].emojis))
  }

  return {
    state: readonly(state) as State,
    updateSearch,
    updateEmoji,
    updateActiveGroup,
    updateSkinTone,
    updateOptions,
    saveRecentEmoji,
    clearRecentEmoji,
  }
}
