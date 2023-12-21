<template>
  <NuxtLayout name="setup">
    <h1 class="setup-title">{{ $t('setup.success.title') }}</h1>
    <div class="message" v-if="currentKeepix">
      <p v-html="$t('setup.success.desc', { name: currentKeepix.name })"></p><br>
      <p>{{ $t('setup.success.desc2') }}</p>
      <a href="{{ currentKeepix.url }}" class="setup-title">{{ currentKeepix.url }}</a>
      <p>{{ $t('setup.success.desc3') }}</p>
    </div>
    <Btn :to="localePath('/list')" :text="$t('setup.success.btn')" icon="material-symbols:arrow-forward-rounded" />
  </NuxtLayout>
</template>

<script setup>
import { set } from "@vueuse/core";

const localePath = useLocalePath();
const { getAllSetupKeepix } = useKeepix();

const list = ref([]);

const currentKeepix = computed(() => list.value.length ? list.value[list.value.length - 1] : null);

onMounted(() => {
  set(list, getAllSetupKeepix());
});
</script>

<style lang="scss" scoped>
.message a {
  display: block;
  margin: 1em 0;
}
</style>