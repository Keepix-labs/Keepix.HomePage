<script setup>
  import { set } from '@vueuse/core'
  
  const localePath = useLocalePath()
  const search = ref(true)
  const config = ref(false)
  const ssidOptions = ref([])
  const name = ref('Keepix')
  const ssid = ref('')
  const password = ref('')
  const hidePassword = ref(true)
  const error = ref(null)
  const loading = ref(false)

  const setup = async () => {

    AbortSignal.timeout ??= function timeout(ms) {
      const ctrl = new AbortController()
      setTimeout(() => ctrl.abort(), ms)
      return ctrl.signal
    }

    let request = undefined

    set(loading, true)

    try {

      request = await fetch('http://192.168.1.1:9000/app/wifi/list', { 
        signal: AbortSignal.timeout(5000) 
      })

    } catch (e) {

      console.error(e)

    }

    set(loading, false)

    if (request?.status == 200) {

      const ssids = await request.json()

      set(ssidOptions, ssids)
      set(search, false)
      set(config, true)
      set(error, null)

    } else {

      set(search, true)
      set(error, 'list.not_found')
      set(config, false)

    }
  }

  const apply = async () => {

    if (name.value == '' || name.value == undefined) {
      return set(error, 'setup.form.name.error')
    }
    if (ssid.value == '' || ssid.value == undefined) {
      return set(error, 'setup.form.ssid.error')
    } 
    if (password.value == undefined) {
      return set(error, 'setup.form.password.error')
    }

    let request = undefined

    try {

      request = await fetch('http://192.168.1.1:9000/app/wifi', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          ssid: ssid,
          password: password
        }),
        signal: AbortSignal.timeout(5000)
      })

      if (request.status == 200) {

        const result = await request.json()

        if (result == false) {
          return set(error, 'setup.form.password.incorrect')
        } else {
          window.location = '/setup/success'
        }

      }

    } catch (e) {

      if (e.message.includes('aborted')) {
        window.location = '/setup/ethernet'
      } else {
        return set(error, 'list.unknow_error')
      }

    }
  }
</script>

<template>
  <NuxtLayout name="setup">
    <NuxtLink :to="localePath('/setup/choice')" class="back">
      <Icon name="ph:arrow-circle-left" />
      {{ $t('setup.ethernet.back') }}
    </NuxtLink>
    <h1 class="setup-title">{{ $t('setup.ethernet.title') }}</h1>
    <Loader v-if="loading">Loading...</Loader>
    <div v-if="error" class="message error">{{ $t(error) }}</div>
    <template v-if="search">
      <div class="message">
        <Icon name="material-symbols:settings-ethernet" />
        <p v-html="$t('setup.ethernet.desc')"></p>
      </div>
      <Btn :text="$t('setup.ethernet.detection')" icon="ph:gear" @click="setup()" />
    </template>
    <template v-if="config">
      <div class="form">
        <Input icon="ph:pencil-simple" :label="$t('setup.form.name.label')" name="name">
          <input v-model="name" type="text" id="name" :placeholder="$t('setup.form.name.placeholder')" />
        </Input>
        <Input icon="material-symbols:settings-ethernet" :label="$t('setup.form.ssid.label')" :small="$t('setup.form.ssid.placeholder')" name="ssid">
          <select v-model="ssid" id="ssid">
            <option value="" disabled selected hidden>{{ $t('setup.form.ssid.placeholder') }}</option>
            <option v-for="option in ssidOptions" :value="option">{{ option }}</option>
          </select>
        </Input>
        <Input icon="ph:lock-simple" :label="$t('setup.form.password.label')" name="password">
          <input v-model="password" :type="hidePassword ? 'password' : 'text'" id="password" :placeholder="$t('setup.form.password.placeholder')" />
          <Icon class="show" :name="hidePassword ? 'ph:eye' : 'ph:eye-closed'" @click="hidePassword = !hidePassword" />
        </Input>
      </div>
      <Btn :text="$t('setup.form.submit')" icon="ph:check-circle" @click="apply()" />
    </template>
  </NuxtLayout>
</template>