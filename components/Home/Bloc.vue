<script setup>
const { t } = useI18n()
const { hand, cube, seven, key } = useShape()
const list = [
  { 
    id: 1,
    title: t('index.bloc.1.title'),
    txt: t('index.bloc.1.txt'),
    icon: hand
  },
  { 
    id: 2,
    title: t('index.bloc.2.title'),
    txt: t('index.bloc.2.txt'),
    icon: cube
  },
  { 
    id: 3,
    title: t('index.bloc.3.title'),
    txt: t('index.bloc.3.txt'),
    icon: seven
  },
  { 
    id: 4,
    title: t('index.bloc.4.title'),
    txt: t('index.bloc.4.txt'),
    icon: key
  }
]

</script>

<template>
  <div class="bloc">
    <Bloc v-for="bloc in list" :bloc="bloc" />
  </div>
</template>