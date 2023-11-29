import { set } from '@vueuse/core'

export const usePlatform = () => {

  const list = {
    win: {
      name: "Windows",
      url: "",
      icon: "mdi:windows"
    },
    mac: {
      name: "macOS",
      url: "",
      icon: "mdi:apple"
    },
    linux: {
      name: "Linux",
      url: "",
      icon: "mdi:linux"
    },
    // keepix: {
    //   name: "Keepix",
    //   url: "",
    //   icon: "mdi:linux"
    // }
  }

  const platformUser = useState('platform', () => 'win')
  const platform = computed(() => list[platformUser.value])

  const getPlatform = () => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.includes('mac')) {
      set(platformUser, 'mac')
    } else if (userAgent.includes('win')) {
      set(platformUser, 'win')
    } else if (userAgent.includes('linux')) {
      set(platformUser, 'linux')
    }
  }

  return {
    list,
    getPlatform,
    platform
  }
}
