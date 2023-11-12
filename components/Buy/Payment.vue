<script setup>
const { orderUrl } = useShopAPI();
</script>

<template>
  <div class="iframe">
    <iframe :src="orderUrl" frameborder="0"></iframe>
  </div>
</template>