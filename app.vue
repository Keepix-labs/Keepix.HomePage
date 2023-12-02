<script setup>
import { set } from '@vueuse/core'

const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()
const { state } = useModal()
const { getPlatform } = usePlatform()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const title = t('seo.index.title')
const description = t('seo.index.description')
const url = runtimeConfig.public.urlBase
const thumbnail = `${url}/img+thumbnail.jpg`

useSeoMeta({
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: thumbnail,
  ogUrl: url,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: thumbnail,
  twitterCard: "summary",
  themeColor: "#000"
})

const { y } = useWindowScroll()
const up = ref(false)

watch(y, (newPos, oldPos) => {
  if (newPos > oldPos) {
    set(up, false)
  } else if (newPos < oldPos) {
    set(up, true)
  }
})

onMounted(() => {
  getPlatform()
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
      <Link rel="icon" type="image/x-icon" href="/favicon.png?v=1" />
    </Head>
    <Body :class="{ up: up, overflow: state }">
      <NuxtPage />
      <Sprites />
    </Body>
  </Html>
</template>