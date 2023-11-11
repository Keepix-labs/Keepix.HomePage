<script setup>
const paymentIframeUrl = inject('paymentIframeUrl');
</script>

<template>
  <div class="iframe">
    <iframe :src="paymentIframeUrl" frameborder="0"></iframe>
  </div>
</template>