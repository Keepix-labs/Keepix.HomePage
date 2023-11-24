<script setup>
  import { set } from '@vueuse/core'

  const { t } = useI18n()
  const { state } = useModal()

  const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
  })

  const color = 'rgb(0 0 0)'
  const url = "https://keepix.org"
  const thumbnail = `${url}/img/thumbnail.jpg`

  useHead({
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        property: "og:title",
        content: t('seo.index.title'),
      },
      {
        property: "og:description",
        content: t('seo.index.description'),
      },
      {
        property: "og:image",
        content: thumbnail,
      },
      {
        property: "og:url",
        content: url,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:image",
        content: thumbnail,
      },
      {
        name: "theme-color",
        content: color,
      }
    ],
    link: [],
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
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ $t('seo.index.title') }}</Title>
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