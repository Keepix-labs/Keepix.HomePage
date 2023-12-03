<script setup>
const { t } = useI18n()
const { hand, cube, key } = useShape()

const list = [
  { 
    id: 1,
    title: t('application.bloc.1.title'),
    txt: t('application.bloc.1.txt'),
    icon: key
  },
  { 
    id: 2,
    title: t('application.bloc.2.title'),
    txt: t('application.bloc.2.txt'),
    icon: cube
  },
  { 
    id: 3,
    title: t('application.bloc.3.title'),
    txt: t('application.bloc.3.txt'),
    icon: hand
  }
]
</script>

<template>
  <div class="bloc appli-bloc">
    <Bloc v-for="bloc in list" :bloc="bloc" />
  </div>
</template>