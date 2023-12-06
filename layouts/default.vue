<script setup>
const { reveal } = useReveal()

onMounted(() => {
  reveal()
})

provide('myOrdersModalState', ref(false))
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