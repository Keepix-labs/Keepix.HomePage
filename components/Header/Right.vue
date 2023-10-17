<script setup>
  const { locale, setLocale } = useI18n()
  const { reveal } = useReveal()

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
  </div>
</template>