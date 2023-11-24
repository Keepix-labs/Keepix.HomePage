<script setup>
import { set } from '@vueuse/core'
const { $gsap: gsap } = useNuxtApp()

const video = ref(null)

const listPlatform = {
  win: {
    name: "Windows",
    url: "",
    icon: "mdi:windows"
  },
  mac: {
    name: "macOS",
    url: "",
    icon: "mdi:apple"
  },
  linux: {
    name: "Linux",
    url: "",
    icon: "mdi:linux"
  }
}
const platformUser = ref('win')
const platform = computed(() => listPlatform[platformUser.value])

const getPlatform = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  if (userAgent.includes('mac')) {
    set(platformUser, 'mac')
  } else if (userAgent.includes('win')) {
    set(platformUser, 'win')
  } else if (userAgent.includes('linux')) {
    set(platformUser, 'linux')
  }
}

onMounted(() => {

  getPlatform()

  gsap.fromTo(video.value, {
    y: '0%',
    opacity: 1
  }, {
    y: '20%', 
    opacity: 0, 
    duration: 1, 
    scrollTrigger: {
      trigger: 'html',
      start: 'top top',
      endTrigger: '.hero',
      end: 'bottom top',
      scrub: true
    }
  })

})
</script>

<template>
  <div class="hero selection-white">
    <div class="content">
      <Heading tag="h1" :small="$t('index.hero.h1.small')" :strong="$t('index.hero.h1.strong')" />
      <div class="intro" data-reveal>
        <p v-html="$t('index.hero.txt')"></p>
        <p><strong v-html="$t('index.hero.txtDownload')"></strong></p>
      </div>
      <div class="button" data-reveal>
        <Start />
        <Btn 
          :href="platform.link" 
          :text="$t('index.hero.download', {name: platform.name})" 
          bordered 
          :icon="platform.icon" 
          download />
      </div>
      <div class="mention" data-reveal>
        {{ $t('index.hero.available') }}
        <a v-for="platform in listPlatform" :href="platform.link" :aria-label="platform.name" download>
          <Icon :name="platform.icon" />
        </a>
      </div>
    </div>
    <div class="hero-illu">
      <video ref="video" autoplay muted loop>
        <source src="/media/hero.webm" type="video/webm" />
      </video>
    </div>
  </div>
</template>