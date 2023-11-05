import { set } from '@vueuse/core'

export const useModal = () => {

  const state = useState('modal', () => true)

  const open = () => set(state, true)
  const close = () => set(state, false)

  return {
    state,
    open,
    close
  }

}