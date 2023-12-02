<script setup>
const bottom = ref(null)
const { height } = useElementBounding(bottom)

onMounted(() => {
  gsap.to('.appli-hero-mockup img', {
    y: '25%',
    scrollTrigger: {
      trigger: '.appli-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })
})
</script>

<template>
  <div class="appli-hero" :style="`--height-bottom:${height.toFixed()}px`">
    <div class="content">
      <ApplicationIcon data-reveal="top" />
      <Heading tag="h1" :small="$t('application.hero.title.small')" :strong="$t('application.hero.title.strong')" />
      <div class="intro" data-reveal>
        <p>{{ $t('application.hero.intro') }}</p>
      </div>
      <div class="appli-hero-mockup">
        <picture data-reveal="bottom">
          <img src="/img/mockup-app.webp" :alt="$t('site')" loading="lazy" width="2256" height="1589" />
        </picture>
      </div>
      <div ref="bottom" class="appli-hero-bottom">
        <ApplicationDownloadButton data-reveal="bottom" />
        <ApplicationDownloadList data-reveal="bottom" class="list" />
      </div>
    </div>
  </div>
</template>