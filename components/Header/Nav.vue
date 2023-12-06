<script setup>
const localePath = useLocalePath()
const state = inject('myOrdersModalState')
const { state: stateNav } = useNav()

const nav = [
  // {
  //   title: 'header.nav.discover',
  //   ancre: '#discover'
  // },
  {
    title: 'header.nav.products',
    ancre: '/#product'
  },
  {
    title: 'header.nav.app',
    page: '/application'
  },
  {
    title: 'header.nav.setup',
    page: '/list'
  },
  {
    title: 'header.nav.myOrders',
    action: () => {
      if (state) {
        state.value = true;
      }
    }
  }
]
</script>

<template>
  <nav class="header-nav" :class="{ open: stateNav }">
    <ul>
      <li v-for="link in nav">
        <NuxtLink v-if="link.page" :to="localePath(link.page)">{{ $t(link.title) }}</NuxtLink>
        <a v-else-if="link.ancre" :href="link.ancre">{{ $t(link.title) }}</a>
        <div v-else-if="link.action" @click="link.action">{{ $t(link.title) }}</div>
      </li>
    </ul>
  </nav>
</template>