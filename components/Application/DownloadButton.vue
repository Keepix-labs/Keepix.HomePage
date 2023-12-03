<script setup>
const { platform } = usePlatform()
const { isDesktop } = useDevice()
</script>

<template>
  <Btn 
    v-if="isDesktop"
    :href="platform.link" 
    :text="$t('index.hero.download', {name: platform.name})" 
    :icon="platform.icon" 
    download />
  <Btn 
    v-else
    :text="$t('noMobileApp')"  
    disabled="true" />
</template>