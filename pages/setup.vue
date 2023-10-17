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

  const setup = async () => {

    AbortSignal.timeout ??= function timeout(ms) {
      const ctrl = new AbortController()
      setTimeout(() => ctrl.abort(), ms)
      return ctrl.signal
    }

    let request = undefined

    try {

      request = await fetch('http://192.168.1.1:9000/app/wifi/list', { 
        signal: AbortSignal.timeout(5000) 
      })

    } catch (e) {

      console.error(e)

    }

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
      return set(error, 'list.form.name.error')
    }
    if (ssid.value == '' || ssid.value == undefined) {
      return set(error, 'list.form.ssid.error')
    } 
    if (password.value == undefined) {
      return set(error, 'list.form.password.error')
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
          return set(error, 'list.form.password.incorrect')
        } else {
          window.location = '/list'
        }

      }

    } catch (e) {

      if (e.message.includes('aborted')) {
        window.location = '/list'
      } else {
        return set(error, 'list.unknow_error')
      }

    }
  }
</script>

<template>
  <NuxtLayout name="setup">
    <NuxtLink :to="localePath('/list')" class="back">
      <Icon name="ph:arrow-circle-left" />
      {{ $t('list.back_list') }}
    </NuxtLink>
    <h1 class="setup-title">{{ $t('list.add_keepix') }}</h1>
    <div v-if="error" class="message error">{{ $t(error) }}</div>
    <template v-if="search">
      <div class="message">
        <Icon name="ph:wifi-high" />
        <p v-html="$t('list.wifi')"></p>
      </div>
      <Btn :text="$t('list.setup')" icon="ph:gear" @click="setup()" />
    </template>
    <template v-if="config">
      <div class="form">
        <Input icon="ph:pencil-simple" :label="$t('list.form.name.label')" name="name">
          <input v-model="name" type="text" id="name" :placeholder="$t('list.form.name.placeholder')" />
        </Input>
        <Input icon="ph:wifi-high" :label="$t('list.form.ssid.label')" :small="$t('list.form.ssid.placeholder')" name="ssid">
          <select v-model="ssid" id="ssid">
            <option value="" disabled selected hidden>{{ $t('list.form.ssid.placeholder') }}</option>
            <option v-for="option in ssidOptions" :value="option">{{ option }}</option>
          </select>
        </Input>
        <Input icon="ph:lock-simple" :label="$t('list.form.password.label')" name="password">
          <input v-model="password" :type="hidePassword ? 'password' : 'text'" id="password" :placeholder="$t('list.form.password.placeholder')" />
          <Icon class="show" :name="hidePassword ? 'ph:eye' : 'ph:eye-closed'" @click="hidePassword = !hidePassword" />
        </Input>
      </div>
      <Btn :text="$t('list.apply')" icon="ph:check-circle" @click="apply()" />
    </template>
  </NuxtLayout>
</template>