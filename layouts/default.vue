<script setup>
const { reveal } = useReveal()

onMounted(() => {
  reveal()
})
</script>

<template>
  <Header />
  <main class="main">
    <slot />
  </main>
  <BuyModal />
  <BuyMyOrdersModal />
  <Footer />
</template>