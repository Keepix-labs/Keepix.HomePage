export const useReveal = () => {

  const reveal = () => {
    const elementsToObserve = qsa('[data-reveal]')
    const each = 200
    const observer = new IntersectionObserver((entries, observer) => {
      let delay = 0
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          useTimeoutFn(() => entry.target.classList.add('reveal'), delay)
          delay += each
          observer.unobserve(entry.target)
        }
      })
    })
    elementsToObserve.forEach(element => {
      observer.observe(element)
    })
 }

  return {
    reveal
  }

}