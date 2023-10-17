<script setup>
  const { $gsap: gsap } = useNuxtApp()

  const x = 156
  const y = 91
  const list = [
    { 
      id: 1,
      icon: {
        posX: 0,
        posY: 0,
        shape: [
          [2,0],
          [1,1],
          [0,2],
          [3,1],
          [2,2],
          [1,3],
          [6,0],
          [5,1],
          [4,2],
          [3,3],
          [2,4],
          [5,3],
          [4,4],
          [3,5],
          [6,4],
          [5,5],
          [4,6]
        ]
      }
    },
    { 
      id: 2,
      icon: {
        posX: 1,
        posY: 0,
        shape: [
          [0,4],
          [1,5],
          [4,4],
          [3,5],
          [2,6],
          [2,0],
          [1,1],
          [0,2],
          [3,1],
          [4,2],
        ]
      }
    },
    { 
      id: 3,
      icon: {
        posX: 1,
        posY: 0,
        shape: [
          [2,0],
          [3,1],
          [4,2],
          [3,3],
          [2,4],
          [1,5],
          [0,6],
        ]
      }
    },
    { 
      id: 4,
      icon: {
        posX: 0,
        posY: 0,
        shape: [
          [2,0,true],
          [3,1],
          [2,2],
          [0,2],
          [1,3],
          [3,3],
          [4,4],
          [6,4],
          [5,5],
          [6,6],
        ]
      }
    }
  ]

  onMounted(() => {

    const items = qsa('.bloc-item')

    items.forEach((item, index) => {
      const use = qsa('use', item)
      const delay = index / 3
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
          trigger: item,
          start: 'top bottom'
        },
        delay: delay
      })
    })

  })
</script>

<template>
  <div class="bloc">
    <div v-for="bloc in list" class="bloc-item">
      <svg viewBox="0 0 1270 930">
        <title>{{ $t('site') }} | {{ $t(`index.bloc.${bloc.id}.title`) }} {{ $t(`index.bloc.${bloc.id}.txt`) }}</title>
        <use 
          v-for="shape in bloc.icon.shape"
          :xlink:href="shape[2] ? `#cube-a-secondary` : `#cube-a`"
          :x="(shape[0] + bloc.icon.posX) * x"
          :y="(shape[1] + bloc.icon.posY) * y"
          />
      </svg>
      <div data-reveal>
        <h2>{{ $t(`index.bloc.${bloc.id}.title`) }}</h2>
        <p>{{ $t(`index.bloc.${bloc.id}.txt`) }}</p>
      </div>
    </div>
  </div>
</template>