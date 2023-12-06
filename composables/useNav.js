import { set } from '@vueuse/core'

export const useNav = () => {

  const state = useState('nav', () => false)

  const open = () => set(state, true)
  const close = () => set(state, false)
  const toggle = () => set(state, !state.value)

  return {
    state,
    open,
    close,
    toggle
  }

}