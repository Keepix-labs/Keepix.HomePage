<script setup>
const props = defineProps({
  bloc: {
    type: Object,
    required: true
  }
})
const x = 156
const y = 91
const item = ref(null)

onMounted(() => {

  const use = qsa('use', item.value)
  const delay = props.bloc.id / 3
  gsap.fromTo(use, { 
    y: -2000,
  }, { 
    y: 0, 
    stagger: {
      each: -.1
    },
    duration: 1.5,
    ease: 'Back.easeOut',
    scrollTrigger: {
      trigger: item.value,
      start: 'top bottom'
    },
    delay: delay
  })

})
</script>

<template>
  <div ref="item" class="bloc-item">
    <svg viewBox="0 0 1270 930">
      <title>{{ $t('site') }} | {{ bloc.title }} {{ bloc.txt }}</title>
      <use 
        v-for="shape in bloc.icon.shape"
        :xlink:href="shape[2] ? `#cube-a-secondary` : `#cube-a`"
        :x="(shape[0] + bloc.icon.posX) * x"
        :y="(shape[1] + bloc.icon.posY) * y"
        />
    </svg>
    <div data-reveal>
      <h2>{{ bloc.title }}</h2>
      <p>{{ bloc.txt }}</p>
    </div>
  </div>
</template>