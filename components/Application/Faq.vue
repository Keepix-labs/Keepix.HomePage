<template>
  <div class="appli-faq">
    <div class="content">
      <div class="appli-faq-left">
        <Heading :small="$t('application.faq.title.small')" :strong="$t('application.faq.title.strong')" />
        <div class="intro" data-reveal>
          <p v-html="$t('application.chains.txt')"></p>
        </div>
      </div>
      <div class="appli-faq-right">

      </div>
    </div>
  </div>
</template>