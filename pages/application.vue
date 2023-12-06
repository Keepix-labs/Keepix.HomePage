<script setup>
const { t } = useI18n()

const title = t('seo.application.title')
const description = t('seo.application.description')

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})
</script>

<template>
  <NuxtLayout>
    <ApplicationHero />
    <ApplicationChains />
    <ApplicationInfos />
    <ApplicationBloc />
    <ApplicationFaq />
    <HomeMarquee />
  </NuxtLayout>
</template>

<style lang="scss">
  @import '/assets/css/pages/application';
</style>