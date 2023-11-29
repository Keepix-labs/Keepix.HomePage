<script setup>
const video = ref(null)

onMounted(() => {
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
        <ApplicationDownloadButton bordered />
      </div>
      <ApplicationDownloadList data-reveal />
    </div>
    <div class="hero-illu">
      <video ref="video" autoplay muted loop>
        <source src="/media/hero.webm" type="video/webm" />
      </video>
    </div>
  </div>
</template>