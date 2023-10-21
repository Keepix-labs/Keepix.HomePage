<script setup>
  import { set } from '@vueuse/core'
  
  const localePath = useLocalePath()
  const keepix = useKeepix()
  const list = ref(null)
  const selectedKeepix = ref(null)
  const search = ref(true)
  const config = ref(false)
  const ssidOptions = ref([])
  const name = ref('Keepix')
  const ssid = ref('')
  const password = ref('')
  const hidePassword = ref(true)
  const error = ref(null)
  const loading = ref(false)

  const startDetection = async () => {
    set(loading, true);
    const tempList = await keepix.getAll();
    set(loading, false);
    set(list, tempList);
    set(search, !tempList.length)
  }

  const setup = async (ip) => {

    set(selectedKeepix, ip)

    let request

    set(loading, true)

    try {

      request = await fetch(`http://${selectedKeepix.value}:9000/app/wifi/list`, { 
        signal: AbortSignal.timeout(1000) 
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
      set(list, null)

    } else {

      set(search, false)
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

      request = await fetch(`http://${selectedKeepix.value}:9000/app/wifi/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          ssid: ssid,
          password: password
        }),
        signal: AbortSignal.timeout(1000)
      })

      if (request.status == 200) {

        const result = await request.json()

        if (result == false) {
          return set(error, 'setup.form.password.incorrect')
        } else {
          keepix.setSetupKeepix(selectedKeepix.value);
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
      <Btn :text="$t('setup.ethernet.detection')" icon="ph:gear" @click="startDetection()" />
    </template>
    <template v-if="list">
      <p v-html="$t('setup.ethernet.choice')"/>
      <ul class="setup-list">
      <li v-for="keepix in list" v-if="list.length">
        <div @click="() => setup(keepix.ip)" target="_blank" class="keepix">
          <div class="illu">
            <Logo :white="true" />
          </div>
          <div>
            <strong>{{ keepix.name }}</strong>
            <small>{{ keepix.ip }}</small>
            <p>TEMP isAlreadySetup : {{ keepix.alreadySetup }}</p>
          </div>
        </div>
      </li>
      <li v-else class="message">
        <Icon name="ph:smiley-sad-light" /> {{ $t('list.no_keepix') }}
      </li>
    </ul>
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