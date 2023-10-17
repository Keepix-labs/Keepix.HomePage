<script setup>
  defineProps({
    white: Boolean,
    animation: Boolean
  })

  const y = 90.5
  const x = 156.5
  const cubes = [
    { y: 0, x: 4 },
    { y: 1, x: 3 },
    { y: 2, x: 2 },
    { y: 3, x: 1 },
    { y: 4, x: 0 },
    { y: 3, x: 3, secondary: true },
    { y: 3, x: 5, secondary: true },
    { y: 4, x: 4, secondary: true },
    { y: 5, x: 3, secondary: true },
    { y: 7, x: 3 },
    { y: 3 , x: 7 },
  ]
</script>

<template>
  <svg viewBox="0 0 1437 1020">
    <title>{{ $t('site') }}</title>
    <g v-for="cube, index in cubes">
      <use 
        :xlink:href="cube.secondary ? `#cube-a-secondary` : `#cube-a`"
        :class="`cube-${index}`"
        :y="cube.y * y" 
        :x="cube.x * x"
        :style="animation ? `animation-delay: .${index}s` : undefined" />
    </g>
    <g v-if="white" class="white">
      <use 
        v-for="cube, index in cubes" 
        :xlink:href="cube.secondary ? `#cube-b-secondary` : `#cube-b`"
        :y="cube.y * y"
        :x="cube.x * x"
        :class="`cube-${index}`"
        :style="animation ? `animation-delay: .${index}s` : undefined" />
    </g>
  </svg>
</template>