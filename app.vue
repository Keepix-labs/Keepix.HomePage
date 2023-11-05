<script setup>
  import { set } from '@vueuse/core'
  const color = 'rgb(0 0 0)'
  const { state } = useModal()

  const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
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
      <Link rel="icon" type="image/x-icon" href="/favicon.png" />
      <!--
      <meta content="{{host}}assets/img/{{thumb != null ? thumb : 'thumbnail.png'}}" property="og:image">
      <meta content="{{host}}assets/img/{{thumb != null ? thumb : 'thumbnail.png'}}" property="twitter:image">-->
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="theme-color" :content="color" />
    </Head>
    <Body :class="{ up: up, overflow: state }">
      <NuxtPage />
      <Sprites />
    </Body>
  </Html>
</template>