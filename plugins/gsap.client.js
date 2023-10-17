import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {

  if (process.client) {

    gsap.registerPlugin(ScrollTrigger)
    
    gsap.defaults({
      ease: 'none'
    })

    gsap.config({
      nullTargetWarn: false
    })

  }

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }

})