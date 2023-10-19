<template>
  <NuxtLayout name="setup">
    <h1 class="setup-title">{{ $t('setup.success.title') }}</h1>
    <div class="message">
    <p v-html="$t('setup.success.desc')"></p>
  </div>
    <Btn :to="localePath('/list')" :text="$t('setup.success.btn')" icon="material-symbols:arrow-forward-rounded" />
  </NuxtLayout>
</template>

<script setup>
  const localePath = useLocalePath()
</script>