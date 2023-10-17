<script setup>
  const { $gsap: gsap } = useNuxtApp()

  const cryptos = [
    {
      icon: 'cryptocurrency:eth',
      color: "#40ade6",
      duration: 1,
      x: 5,
      y: 1
    },
    {
      icon: 'cryptocurrency:trx',
      color: "#ec162f",
      duration: 2,
      x: 1,
      y: 5
    },
    {
      icon: 'cryptocurrency:sol',
      color: "#2ef9a6",
      duration: 1.5,
      x: 4,
      y: 8
    },
    {
      icon: 'cryptocurrency:matic',
      color: "#864ee6",
      duration: 3,
      x: 8,
      y: 4
    }
  ]

  const lines = [
    {
      cubes: 20,
      y: {
        start: 130,
        from: 0,
        to: -1
      },
      x: {
        start: 210,
        from: 0,
        to: 1
      }
    },
    {
      cubes: 10,
      y: {
        start: 130,
        from: 0,
        to: -1
      },
      x: {
        start: 210,
        from: 0,
        to: 1
      }
    },
    {
      cubes: 10,
      y: {
        start: 130,
        from: 0,
        to: 1
      },
      x: {
        start: -210,
        from: 0,
        to: -1
      }
    },
    {
      cubes: 10,
      y: {
        start: 130,
        from: 0,
        to: -1
      },
      x: {
        start: -210,
        from: 0,
        to: 1
      }
    }
  ]

  onMounted(() => {

    gsap.fromTo('.hero-bg', {
      y: '0%',
      opacity: 1
    }, {
      y: '20%', 
      opacity: 0, 
      duration: 1, 
      scrollTrigger: {
        trigger: 'html',
        start: 'top top',
        endTrigger: '.hero',
        end: 'bottom top',
        scrub: true
      }
    })

  })
</script>

<template>
  <div class="hero selection-white">
    <div class="content">
      <Heading tag="h1" :small="$t('index.hero.h1.small')" :strong="$t('index.hero.h1.strong')" />
      <div class="intro" data-reveal>
        <p>{{ $t('index.hero.txt') }}</p>
      </div>
      <div class="button" data-reveal>
        <Start />
        <Btn href="#discover" :text="$t('index.hero.learn')" bordered />
      </div>
    </div>
    <div class="hero-illu" data-reveal="opacity">
      <div class="hero-illu-logo">
        <Logo class="logo" :white="true" />
        <div class="hero-illu-logo-crypto">
          <div 
            v-for="crypto in cryptos" 
            class="crypto" 
            :style="`
              --x: ${crypto.x};
              --y: ${crypto.y};
              --color: ${crypto.color};
              --duration: ${crypto.duration}`
              ">
            <Icon :name="crypto.icon" />
          </div>
        </div>
        <svg v-for="line, index in lines" class="line" :class="`line-${index}`" viewBox="0 0 335 380">
          <use 
            v-for="cube in line.cubes" 
            xlink:href="#cube-b"
            :y="(line.y.from + cube) * line.y.start" 
            :x="(line.x.from - cube) * line.x.start">
            <Animate 
              :x="(line.x.from - cube) * line.x.start" 
              :y="(line.y.from + cube) * line.y.start" 
              :xTo="(line.x.from - cube + line.x.to) * line.x.start" 
              :yTo="(line.y.from + cube + line.y.to) * line.y.start"
              :duration="1"
              />
          </use>
        </svg>
      </div>
    </div>
  </div>
</template>