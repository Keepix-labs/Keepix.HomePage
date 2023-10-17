<script setup>
  const localePath = useLocalePath()
  const nav = [
    {
      title: 'header.nav.discover',
      ancre: '#discover'
    },
    {
      title: 'header.nav.products',
      ancre: '#product'
    },
    {
      title: 'header.nav.setup',
      page: '/list'
    }
  ]
</script>

<template>
  <nav class="header-nav">
    <ul>
      <li v-for="link in nav">
        <NuxtLink v-if="link.page" :to="localePath(link.page)">{{ $t(link.title) }}</NuxtLink>
        <a v-else :href="link.ancre">{{ $t(link.title) }}</a>
      </li>
    </ul>
  </nav>
</template>