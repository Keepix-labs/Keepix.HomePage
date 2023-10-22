<template>
  <NuxtLayout name="setup">
    <h1 class="setup-title">{{ $t('setup.intro.title') }}</h1>
    <div class="message">
      <p v-html="$t('setup.intro.desc')"></p><br>
      <p v-html="$t('setup.intro.desc2')"></p>
    </div>
    <Btn :to="localePath('/setup/choice')" :text="$t('setup.intro.btn')" icon="ph:check-circle" />
  </NuxtLayout>
</template>

<script setup>
  const localePath = useLocalePath()
</script>