import { SKIN_TONE_NEUTRAL } from './emoji-picker.d'
import type { EmojiGroup, EmojiInfo } from './emoji-picker.d'

/**
 * Convert unicode to native emoji
 *
 * @param unicode - emoji unicode
 */
export function unicodeToEmoji(unicode: string) {
  return unicode
    .split('-')
    .map(hex => parseInt(hex, 16))
    .map(hex => String.fromCodePoint(hex))
    .join('')
}

/**
 * Filter emoji by search keyword
 *
 * @param emojiGroups - Emoji data
 * @param keyword - filter keyword
 * @param skinTone - current skin tones
 */
export function filterEmojis(
  emojiGroups: EmojiGroup[],
  keyword: string,
  skinTone: string,
): EmojiGroup[] {
  const _emojiGroups: EmojiGroup[] = []
  for (const group of emojiGroups) {
    const _emojiInfos: EmojiInfo[] = []
    for (const emojiInfo of group.emojis) {
      if (emojiInfo.n.join('').includes(keyword.toLocaleLowerCase())) {
        let result = emojiInfo.u

        if (
          skinTone !== SKIN_TONE_NEUTRAL
          && Array.isArray(emojiInfo.v)
        ) {
          const v_index
            = emojiInfo.v?.findIndex(v =>
              v.u.includes(skinTone),
            )
          if (v_index !== -1 && emojiInfo.v)
            result = emojiInfo.v![v_index]
        }

        _emojiInfos.push({
          ...emojiInfo,
          r: result,
        })
      }
    }
    if (_emojiInfos.length)
      _emojiGroups.push({ ...group, emojis: _emojiInfos })
  }

  return _emojiGroups
}

/**
 * Check if userAgent is mac.
 *
 * @return boolean;
 */
export function isMac() {
  const platform
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    = navigator?.userAgentData?.platform || navigator?.platform || 'unknown'
  return platform.toUpperCase().includes('MAC')
}
