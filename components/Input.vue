<script setup>
  defineProps({
    label: String,
    small: String,
    name: String,
    icon: String
  })
</script>

<template>
  <label class="label" :for="name">{{ label }}: <small v-if="small">{{ small }}</small></label>
  <div class="input">
    <Icon v-if="icon" :name="icon" />
    <slot />
    <span></span>
  </div>
</template>