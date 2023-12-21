<script setup>
const nbrQuestion = 6
</script>

<template>
  <div class="appli-faq">
    <div class="content">
      <div class="appli-faq-left">
        <Heading :strong="$t('application.faq.title.strong')" />
        <div class="intro" data-reveal>
          <p v-html="$t('application.faq.intro')"></p>
        </div>
      </div>
      <div class="appli-faq-right" data-reveal>
        <details v-for="n in nbrQuestion">
          <summary>
            {{ $t(`application.faq.list.${n}.question`) }}
            <Icon name="carbon:chevron-down" />
          </summary>
          <div class="p" v-html="$t(`application.faq.list.${n}.answer`)"></div>
        </details>
      </div>
    </div>
  </div>
</template>