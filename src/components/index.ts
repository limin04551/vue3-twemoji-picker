import type { App } from 'vue'
import EmojiPicker from './emoji-picker/src/EmojiPicker.vue'
import 'uno.css'

EmojiPicker.name = 'emoji-picker'

const install = (app: App) => {
  app.component(EmojiPicker.name, EmojiPicker)
}

export {
  install,
  EmojiPicker,
}

