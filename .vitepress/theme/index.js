import DefaultTheme from 'vitepress/theme'
import './style.css'
import LanguageDropdown from '../components/LanguageDropdown.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LanguageDropdown', LanguageDropdown)
  }
}
