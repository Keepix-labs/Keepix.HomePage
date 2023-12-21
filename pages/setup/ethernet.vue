<script lang="ts" setup>
import { set } from "@vueuse/core";

const router = useRouter();
const localePath = useLocalePath();
const { getAll: getAllKeepix, setSetupKeepix } = useKeepix();
const { reveal } = useReveal();

const step = ref<'START' | 'CHOICE' | 'SETUP' | 'SUCCESS'>('START');

const detectedKeepix = ref<Keepix[]>([]);
const selectedKeepix = ref<Keepix | null>(null);

const name = ref(selectedKeepix.value ? selectedKeepix.value.name : 'Keepix');
const error = ref(null);
const loading = ref(false);

const startDetection = async () => {
  set(loading, true);
  const list = await getAllKeepix();
  set(loading, false);

  set(detectedKeepix, list);
  set(step, 'CHOICE');
};

const setup = async (keepix: Keepix) => {
  set(selectedKeepix, keepix);
  set(error, null);
  set(detectedKeepix, []);

  set(step, 'SETUP');
};

const submit = async () => {
  if (name.value == "" || name.value == undefined) {
    return set(error, "setup.form.name.error");
  }

  let request;

  set(loading, true);

  try {
    request = await fetch(`${selectedKeepix.value?.url}:9000/settings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
      }),
      signal: AbortSignal.timeout(3000),
    });

    if (request.status == 201) {
      const result = await request.json();

      if (result == false) {
        return set(error, "setup.form.password.incorrect");
      } else {
        if (selectedKeepix.value?.url) {
          setSetupKeepix({
            ...selectedKeepix.value,
            name: name.value
          });
        }

        router.push("/setup/success");
      }
    }
  } catch (e: any) {
    if (e.message.includes("aborted")) {
      router.push("/setup/ethernet");
    } else {
      return set(error, "list.unknow_error");
    }
  }

  set(loading, false);
};

watch(step, (newStep) => {
  reveal();
}, {
  flush: "post"
})
</script>

<template>
  <NuxtLayout name="setup">
    <NuxtLink :to="localePath('/setup/choice')" class="back">
      <Icon name="ph:arrow-circle-left" />
      {{ $t("setup.ethernet.back") }}
    </NuxtLink>
    <h1 class="setup-title">{{ $t("setup.ethernet.title") }}</h1>
    <Loader v-if="loading">Loading...</Loader>
    <div v-if="error" class="message error">{{ $t(error) }}</div>

    <template v-if="step === 'START'">
      <div class="message" data-reveal>
        <Icon name="material-symbols:settings-ethernet" />
        <p v-html="$t('setup.ethernet.desc')"></p>
      </div>
      <Btn :text="$t('setup.ethernet.detection')" icon="ph:gear" @click="startDetection()" data-reveal />
    </template>

    <template v-if="step === 'CHOICE'">
      <p v-html="$t('setup.ethernet.choice')" data-reveal />
      <ul class="setup-list" data-reveal>
        <li v-for="keepix in detectedKeepix" v-if="detectedKeepix.length">
          <div @click="() => setup(keepix)" target="_blank" class="keepix">
            <div class="illu">
              <Logo :white="true" />
            </div>
            <div>
              <strong>{{ keepix.name }}</strong>
              <small>{{ keepix.ip }}</small>
            </div>
            <div class="keepix-setup">
              <p :data-setup="keepix.alreadySetup">{{ $t(`setup.ethernet.${keepix.alreadySetup ? 'isSetup' :
                'notSetup'}`)
              }}</p>
            </div>
          </div>
        </li>
        <li v-else class="message">
          <Icon name="ph:smiley-sad-light" /> {{ $t("list.no_keepix") }}
        </li>
      </ul>
    </template>

    <template v-if="step === 'SETUP'">
      <div class="form" data-reveal>
        <Input icon="ph:pencil-simple" :label="$t('setup.form.name.label')" name="name">
        <input v-model="name" type="text" id="name" :placeholder="$t('setup.form.name.placeholder')" />
        </Input>
      </div>
      <Btn :text="$t('setup.form.submit')" icon="ph:check-circle" @click="submit()" data-reveal />
    </template>
  </NuxtLayout>
</template>
