<script setup>
  const { socials } = useSocial()
</script>

<template>
  <ul>
    <li v-for="social in socials">
      <a :href="social.ul" :title="social.title" :aria-label="social.title" rel="noopener noreferrer">
        <Icon :name="social.icon" />
      </a>
    </li>
  </ul>
</template>