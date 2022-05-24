import type { InjectionKey } from 'vue'
export type Locals = 'en' | 'zh_CN'

// export const ALL_EMOJI_IMG_SRC = '/img/twemoji.png'
// export const SVG_EMOJI_IMG_SRC = '/img/svg/'
export const SKIN_TONE_NEUTRAL = 'neutral'
export const SKIN_TONE_LIGHT = '1f3fb'
export const SKIN_TONE_MEDIUM_LIGHT = '1f3fc'
export const SKIN_TONE_MEDIUM = '1f3fd'
export const SKIN_TONE_MEDIUM_DARK = '1f3fe'
export const SKIN_TONE_DARK = '1f3ff'

export const SKIN_TONES = [
  SKIN_TONE_NEUTRAL,
  SKIN_TONE_LIGHT,
  SKIN_TONE_MEDIUM_LIGHT,
  SKIN_TONE_MEDIUM,
  SKIN_TONE_MEDIUM_DARK,
  SKIN_TONE_DARK,
]
export type SkinTone = SKIN_TONE_NEUTRAL | SKIN_TONE_LIGHT | SKIN_TONE_MEDIUM_LIGHT
| SKIN_TONE_MEDIUM | SKIN_TONE_MEDIUM_DARK | SKIN_TONE_DARK

export interface EmojiGroup {
  emojis: EmojiInfo[]
  key: string
  title: string
  u: string
  y?: number
}

export interface Options {
  locals?: Locals
  native?: boolean
  hasSearch?: boolean
  hasGroupIcons?: boolean
  hasGroupNames?: boolean
  hasSkinTones?: boolean
  stickyGroupNames?: boolean
  recentRecords?: boolean
  imgSrc?: string
  disabledGroups?: string[]
}

export const DEFAULT_EMOJI: EmojiInfo = {
  n: [''],
  u: { u: '1f44b', x: 19, y: 27 },
  v: [{ u: '1f44b-1f3fb', x: 20, y: 27 },
    { u: '1f44b-1f3fc', x: 21, y: 27 },
    { u: '1f44b-1f3fd', x: 22, y: 27 },
    { u: '1f44b-1f3fe', x: 23, y: 27 },
    { u: '1f44b-1f3ff', x: 24, y: 27 }],
  r: { u: '1f44b', x: 19, y: 27 },
}

export interface EmojiDetail {
  u: string
  x: number
  y: number
}

export interface EmojiInfo {
  n: string[]
  u: EmojiDetail
  v?: EmojiDetail[]
  r?: EmojiDetail
}

export const EmojiWidth = 20
export const EmojiHeight = 20

export interface State {
  emojiGroups: EmojiGroup[]
  currentEmoji: EmojiInfo
  search: string
  activeGroup: string
  skinTone: string
  staticText: Record<string, string>
  options: Record<string, any>
}

export interface Store {
  state: State
  updateSearch: (v: string) => void
  updateEmoji: (v: EmojiInfo) => void
  updateActiveGroup: (v: string, b?: boolean) => void
  updateSkinTone: (v: string) => void
  updateOptions: (v: Record<string, any>) => void
  saveRecentEmoji: (emoji: EmojiInfo) => void
  clearRecentEmoji: () => void
}

export const STORE_KEY: InjectionKey<Store> = Symbol('')
