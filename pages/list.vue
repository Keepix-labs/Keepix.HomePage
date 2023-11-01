<script lang="ts" setup>
import { set } from "@vueuse/core";

const localePath = useLocalePath();
const { getAll: getAllKeepix } = useKeepix();

const detectedKeepix = ref<Keepix[]>([]);
const loading = ref(false);

const init = async () => {
  set(loading, true);
  const list = await getAllKeepix();
  set(loading, false);

  set(detectedKeepix, list);
};

onMounted(() => {
  init();
})
</script>

<template>
  <NuxtLayout name="setup">
    <h1 class="setup-title">{{ $t('list.title') }} ({{ detectedKeepix.length }})</h1>
    <Loader v-if="loading">Loading...</Loader>
    <ul class="setup-list" v-if="!loading">
      <li v-for="keepix in detectedKeepix" v-if="detectedKeepix.length">
        <a :href="keepix.url" target="_blank" class="keepix">
          <div class="illu">
            <Logo :white="true" />
          </div>
          <div>
            <strong>{{ keepix.name }}</strong>
            <small>{{ keepix.url }}</small>
          </div>
        </a>
      </li>
      <li v-else class="message">
        <Icon name="ph:smiley-sad-light" /> {{ $t('list.no_keepix') }}
      </li>
    </ul>
    <Btn :to="localePath('/setup')" :text="$t('list.add_keepix')" icon="ph:plus-circle" />
  </NuxtLayout>
</template>