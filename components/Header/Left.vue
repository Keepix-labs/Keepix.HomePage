<script setup>
  import { set } from '@vueuse/core'

  const hover = ref(false)
  const hoverLogo = () => {
    if (!hover.value) {
      set(hover, true)
      useTimeoutFn(() => {
        set(hover, false)
      }, 1600)
    }
  }
</script>

<template>
  <div class="header-left">
    <a class="header-logo" :class="{ hover: hover }" @mouseenter="hoverLogo" :aria-label="$t('site')">
      <Logo class="header-logo-sigle" :white="true" :animation="true" />
      <svg class="header-logo-txt" viewBox="0 0 431.8 114.9">
        <title>{{ $t('site') }}</title>
        <use xlink:href="/img/sprite.svg#logo"/>
      </svg>
    </a>
  </div>
</template>