import { set } from '@vueuse/core'

export const useModal = () => {

  const state = useState('modal', () => false)

  const open = () => set(state, true)
  const close = () => set(state, false)

  return {
    state,
    open,
    close
  }

}