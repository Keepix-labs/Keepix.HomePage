<script setup>
  const { $gsap: gsap } = useNuxtApp()

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
      <NuxtPicture class="interface-mockup-mac" src="/img/macbook.png" :alt="$t('site')" />
      <NuxtPicture class="interface-mockup-bg" src="/img/bg-holo.jpg" :alt="$t('site')" />
    </div>
  </div>
</template>