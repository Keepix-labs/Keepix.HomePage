<script setup>
  defineProps({
    tag: {
      type: String,
      default: 'h2'
    },
    small: {
      type: String,
      required: true
    },
    strong: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <component :is="tag" class="heading">
    <small class="heading-small" data-reveal="top" v-html="small"></small>
    <strong class="heading-strong" data-reveal v-html="strong"></strong>
  </component>
</template>