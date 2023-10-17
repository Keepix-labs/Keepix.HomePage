<script setup>
  const { reveal } = useReveal()

  onMounted(() => {
    reveal()
  })
</script>

<template>
  <main class="setup">
    <div class="content">
      <SetupHeading />
      <div class="setup-wrapper" data-reveal>
        <slot />
      </div>
      <SetupFooter />
    </div>
  </main>
  <div class="setup-back animated-logo">
    <Logo />
  </div>
</template>

<style lang="scss">
  @import '/assets/css/pages/setup';
</style>