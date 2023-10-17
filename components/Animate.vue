<script setup>
  const props = defineProps({
    duration: {
      type: Number,
      default: 3
    },
    x: Number,
    y: Number,
    xTo: Number,
    yTo: Number
  })

  const valueX = computed(() => `${props.x};${props.xTo}`)
  const valueY = computed(() => `${props.y};${props.yTo}`)
</script>

<template>
  <animate attributeType="XML" attributeName="x" :values="valueX" :dur="`${duration}s`" begin="0s" fill="freeze" repeatCount="indefinite" />
  <animate attributeType="XML" attributeName="y" :values="valueY" :dur="`${duration}s`" begin="0s" fill="freeze" repeatCount="indefinite" />
</template>