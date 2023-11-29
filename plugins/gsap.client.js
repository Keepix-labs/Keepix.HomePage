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
})