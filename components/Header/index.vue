<script setup>
  const header = ref(null)
  const { y } = useElementBounding(header)
</script>

<template>
  <header class="header" ref="header" :class="-1 >= y ? 'fix' : undefined">
    <div class="header-wrapper" :class="-150 >= y ? 'fixer' : undefined">
      <div class="content">
        <HeaderLeft />
        <HeaderNav />
        <HeaderRight />
      </div>
    </div>
  </header>
</template>