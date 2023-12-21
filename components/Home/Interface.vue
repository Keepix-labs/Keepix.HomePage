<script setup>
onMounted(() => {

  gsap.fromTo('.interface-mockup-logo svg', {y: '50%'}, {y: '-50%', duration: 1, scrollTrigger: {
    trigger: '.interface-mockup-logo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }})

  gsap.fromTo('.interface-mockup-mac img', {y: '-10%'}, {y: '15%', duration: 1, scrollTrigger: {
    trigger: '.interface',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }})

  gsap.fromTo('.interface-mockup-bg img', {y: '-10%'}, {y: '15%', duration: 1, scrollTrigger: {
    trigger: '.interface',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }})

})
</script>

<template>
  <div class="interface selection-white">
    <div class="content">
      <Heading :small="$t('index.interface.title.small')" :strong="$t('index.interface.title.strong')" />
      <div class="intro" data-reveal>
        <p>{{ $t('index.interface.txt') }}</p>
      </div>
    </div>
    <div class="interface-mockup">
      <div ref="logo" class="interface-mockup-logo">
        <svg ref="logoSvg" viewBox="0 0 431.8 114.9">
          <title>{{ $t('site') }}</title>
          <use xlink:href="/img/sprite.svg#logo"/>
        </svg>
      </div>
      <picture class="interface-mockup-mac">
        <div class="interface-mockup-mac-video">
           <!-- Video player element -->
          <video style="width:100%;height:100%;" autoplay muted loop>
            <source src="/keepix.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <img src="/img/macbook.webp" :alt="$t('site')" loading="lazy" width="1800" height="1530" />
      </picture>
      <picture class="interface-mockup-bg">
        <img src="/img/bg-holo.webp" :alt="$t('site')" loading="lazy" width="2400" height="1800" />
      </picture>
    </div>
  </div>
</template>