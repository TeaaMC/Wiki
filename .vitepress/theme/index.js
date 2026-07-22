import DefaultTheme from 'vitepress/theme'
import './style.css'
import LanguageDropdown from '../components/LanguageDropdown.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // TeaaMC's motion is on by default in every browser. A visitor can opt out
    // for the current tab with ?motion=reduce; either explicit choice survives
    // client-side navigation and reloads without changing every internal link.
    if (typeof window !== 'undefined') {
      const previewKey = 'teaamc-motion-preview'
      const requestedMotion = new URLSearchParams(window.location.search).get('motion')

      if (requestedMotion === 'full' || requestedMotion === 'reduce') {
        window.sessionStorage.setItem(previewKey, requestedMotion)
      }

      const savedMotion = window.sessionStorage.getItem(previewKey)
      const fullMotion = requestedMotion !== 'reduce' && savedMotion !== 'reduce'
      document.documentElement.classList.toggle('motion-full', fullMotion)
    }

    app.component('LanguageDropdown', LanguageDropdown)
  }
}
