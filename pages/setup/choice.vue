<template>
  <NuxtLayout name="setup">
    <h1 class="setup-title">{{ $t('setup.choice.title') }}</h1>
    <div class="choices">
    <ul>
        <li v-for="choice in choices" :style="`--color: ${choice.color}`" data-reveal>
          <div class="logo" data-reveal="top">
            <Icon :name="choice.icon" />
          </div>
          <h3>{{ choice.title }}</h3>
          <p v-html="choice.txt"/>
          <div class="btn-group" data-reveal>
            <Btn :to="choice.to" :text="$t('setup.choice.btn')" icon="material-symbols:arrow-forward-rounded" attr="secondary" bordered />
          </div>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup>
  const localePath = useLocalePath()
  const {t} = useI18n()
  
  const choices = [
    {
      title: "Ethernet",
      txt: t('setup.choice.ethernet'),
      icon: "material-symbols:settings-ethernet",
      color: "#35a8de",
      to: localePath('/setup/ethernet')
    },
    {
      title: "Wifi",
      txt: t('setup.choice.wifi'),
      icon: "ph:wifi-high",
      color: "#8a46ff",
      to: localePath('/setup/wifi')
    }
  ]
</script>