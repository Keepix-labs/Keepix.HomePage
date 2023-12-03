<script setup>
const { list } = usePlatform()
const { isDesktop } = useDevice()
</script>

<template>
  <div class="list">
    <template v-if="isDesktop">
      {{ $t('index.hero.available') }}
      <NuxtLink v-for="platform in list" :href="platform.link" :aria-label="platform.name" download>
        <Icon :name="platform.icon" />
      </NuxtLink>
    </template>
    <template v-else>{{ $t('noMobileAppTxt') }}</template>
  </div>
</template>

<style lang="scss" scoped>
.list {
  color: var(--txt-secondary);
  font-size: 1.1em;
  font-weight: bold;

  a {
    transition: color var(--transition-link);
    font-size: 1.5em;
    margin: 0 2px;

    &:hover {
      color: var(--txt-tertiary);
    }
  }
}
</style>