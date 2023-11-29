<script setup>
const { platform } = usePlatform()
</script>

<template>
  <Btn 
    :href="platform.link" 
    :text="$t('index.hero.download', {name: platform.name})" 
    :icon="platform.icon" 
    download />
</template>