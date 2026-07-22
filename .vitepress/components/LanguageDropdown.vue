<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Check, Languages } from '@lucide/vue'
import { useData, withBase } from 'vitepress'

const { lang, page } = useData()
const open = ref(false)
const root = ref(null)
const isEnglish = computed(() => lang.value.startsWith('en'))

const localizedPath = (locale) => {
  const path = (page.value.relativePath || 'index.md')
    .replace(/^en\//, '')
    .replace(/\.md$/, '')
    .replace(/(^|\/)index$/, '$1')
  const prefix = locale === 'en' ? '/en/' : '/'
  return withBase(`${prefix}${path}`.replace(/\/{2,}/g, '/'))
}

const items = computed(() => [
  { flag: '🇻🇳', text: 'Tiếng Việt', href: localizedPath('vi'), active: !isEnglish.value },
  { flag: '🇺🇸', text: 'English', href: localizedPath('en'), active: isEnglish.value }
])

const close = () => { open.value = false }
const onDocumentClick = (event) => {
  if (root.value && !root.value.contains(event.target)) close()
}
const onKeydown = (event) => {
  if (event.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="root" class="language-dd" :class="{ open }">
    <button
      class="language-dd-btn"
      type="button"
      :aria-expanded="open"
      :aria-label="isEnglish ? 'Change language' : 'Đổi ngôn ngữ'"
      aria-haspopup="menu"
      @click="open = !open"
    >
      <Languages :size="17" :stroke-width="1.75" />
      <svg class="language-dd-caret" width="14" height="14" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    <Transition name="language-dd">
      <div v-if="open" class="language-dd-menu" role="menu">
        <a
          v-for="item in items"
          :key="item.text"
          class="language-dd-item"
          :class="{ active: item.active }"
          role="menuitem"
          :aria-current="item.active ? 'page' : undefined"
          :href="item.href"
          @click="close"
        >
          <span class="language-dd-item-label">
            <span class="language-dd-flag" aria-hidden="true">{{ item.flag }}</span>
            <span>{{ item.text }}</span>
          </span>
          <Check v-if="item.active" :size="15" :stroke-width="1.75" />
        </a>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.language-dd {
  position: relative;
  display: inline-flex;
  align-items: center;
  align-self: stretch;
  height: var(--vp-nav-height);
  margin: 0 4px;
}

.language-dd-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  height: 36px;
  padding: 0 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: transparent;
  font-family: inherit;
  line-height: 1;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition:
    color var(--tea-motion-fast) ease,
    background-color var(--tea-motion-fast) ease,
    border-color var(--tea-motion-fast) ease,
    transform var(--tea-motion-base) var(--tea-ease-out);
}

.language-dd-btn:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-default-soft);
  transform: translateY(-1px);
}

.language-dd-btn:active {
  transform: scale(0.96);
}

.language-dd-caret {
  display: block;
  flex: 0 0 auto;
  opacity: 0.7;
  transition: transform var(--tea-motion-base) var(--tea-ease-spring);
}

.language-dd.open .language-dd-caret {
  transform: rotate(180deg);
}

.language-dd-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 100;
  min-width: 168px;
  padding: 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: color-mix(in srgb, var(--vp-c-bg) 80%, transparent);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
  transform-origin: top right;
}

.language-dd-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none !important;
  transition:
    color var(--tea-motion-fast) ease,
    background-color var(--tea-motion-fast) ease,
    transform var(--tea-motion-base) var(--tea-ease-out);
}

.language-dd-item:hover,
.language-dd-item.active {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.language-dd-item:hover {
  transform: translateX(3px);
}

.language-dd-item-label {
  display: inline-flex;
  align-items: center;
  gap: 9px;
}

.language-dd-flag {
  font-size: 1rem;
  line-height: 1;
}

.language-dd-enter-active {
  animation: language-dd-in var(--tea-motion-base) var(--tea-ease-out);
}

.language-dd-leave-active {
  animation: language-dd-in var(--tea-motion-fast) ease-in reverse;
}

@keyframes language-dd-in {
  from {
    opacity: 0;
    transform: translateY(-7px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .language-dd-caret {
    transition: none;
  }

  .language-dd-enter-active,
  .language-dd-leave-active {
    animation: none;
  }
}
</style>
