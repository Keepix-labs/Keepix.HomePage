<script setup>
  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
  const list = 7
  const left = ref(null)
  const { height } = useElementBounding(left)

  onMounted(() => {

    gsap.fromTo('.features-left-content', {
      y: '0%'
    }, {
      y: '100%',
      duration: 1,
      scrollTrigger: {
        trigger: '.features',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true
      }
    })

    gsap.fromTo('.features-logo svg', {
      y: '25%',
    }, {
      y: '-25%',
      scrollTrigger: {
        trigger: '.features',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    gsap.fromTo('.features-logo svg', {
      opacity: 0,
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.features',
        start: 'top bottom',
        end: 'top top',
        scrub: true
      }
    })

  })
</script>

<template>
  <div id="discover" class="features" :style="`--left: ${height.toFixed()}px`">
    <div class="content">
      <div class="features-left">
        <div ref="left" class="features-left-content">
          <Heading :small="$t('index.features.title.small')" :strong="$t('index.features.title.strong')" />
          <div class="features-logo animated-logo">
            <Logo />
          </div>
        </div>
      </div>
      <div class="features-list">
        <ul>
          <li v-for="item in list" class="item" :class="`item-${item}`">
            <h3 data-reveal="top">
              <Logo />
              {{ $t(`index.features.list.${item}.title`) }}
            </h3>
            <p data-reveal v-html="$t(`index.features.list.${item}.txt`)"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>