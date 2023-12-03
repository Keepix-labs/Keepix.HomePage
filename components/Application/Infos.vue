<script setup>
onMounted(() => {
  gsap.fromTo('.appli-infos .bg', {
    y: '-15%'
  }, {
    y: '25%',
    scrollTrigger: {
      trigger: '.appli-infos',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
})
</script>

<template>
  <div class="appli-infos">
    <div class="content">
      <Heading :small="$t('application.infos.title.small')" :strong="$t('application.infos.title.strong')" />
      <div class="intro" data-reveal>
        <p v-html="$t('application.infos.intro')"></p>
      </div>
      <div class="p" v-html="$t('application.infos.txt')" data-reveal></div>
      <div class="button" data-reveal>
        <ApplicationDownloadButton />
        <Start :text="$t('application.infos.order')" bordered />
      </div>
      <ApplicationDownloadList class="list" data-reveal />
    </div>
    <div class="bg"></div>
  </div>
</template>