<template>
  <div class="appli-hero">
    <div class="content">
      <Heading tag="h1" :small="$t('application.hero.title.small')" :strong="$t('application.hero.title.strong')" />
      <div class="intro" data-reveal>
        <p>{{ $t('application.hero.intro') }}</p>
      </div>
      <div class="appli-hero-bottom">
        <ApplicationDownloadButton data-reveal="bottom" />
        <ApplicationDownloadList data-reveal="bottom" class="list" />
      </div>
    </div>
  </div>
</template>