<script setup>
  const { $gsap: gsap } = useNuxtApp()
  
  onMounted(() => {
    gsap.fromTo('.default-bg > div', {
      y: '0%',
    }, {
      y: '25%',
      scrollTrigger: {
        trigger: '.default-bg',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
  })
</script>

<template>
  <NuxtLayout>
    <div class="default">
      <div class="content count">
        <slot />
      </div>
      <div class="default-bg">
        <div></div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
  @import '/assets/css/pages/default';
</style>