<script setup>
const { locale, setLocale } = useI18n()
const { reveal } = useReveal()
const { state: stateNav, toggle } = useNav()

watch(locale, () => useTimeoutFn(() => reveal(), 100))
</script>

<template>
  <div class="header-right">
    <Social class="header-social" />
    <!--<div class="header-lang">
      <ul :style="`--n: ${$i18n.locales.length}`">
        <li 
          v-for="locale in $i18n.locales" 
          :key="locale.code" 
          :class="{selected: locale.code === $i18n.locale}">
          <button @click.prevent.stop="setLocale(locale.code)" :aria-label="locale.name" type="button">
            <Icon :name="`circle-flags:${locale.code}`" />
          </button>
        </li>
      </ul>
    </div>-->
    <Start :icon="false" />
    <button 
      class="header-nav-button" 
      :class="{ open: stateNav }" 
      :aria-label="$t('header.nav.title')"
      @click="toggle">
      <svg viewBox="0 0 100 100">
        <title>{{ $t('header.nav.title') }}</title>
        <path class="l-1" d="M0,42h62c13,0,6,26-4,16L35,35" />
        <path class="l-2" d="M0,50h70" />
        <path class="l-3" d="M0,58h62c13,0,6-26-4-16L35,65" />
      </svg>
    </button>
  </div>
</template>