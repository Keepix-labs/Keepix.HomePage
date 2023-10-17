<template>
  <footer class="setup-footer" data-reveal>
    <p v-html="$t('footer.copyright')"></p>
    <Btn to="/" :text="$t('list.back_home')" icon="ph:arrow-circle-left" attr="secondary" />
  </footer>
</template>