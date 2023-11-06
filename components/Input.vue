<script setup>
  defineProps({
    label: String,
    small: String,
    name: String,
    icon: String,
    required: Boolean
  })
</script>

<template>
  <label v-if="label" class="label" :for="name">
    {{ label }}
    <abbr v-if="required" :title="$t('required')">*</abbr>: 
    <small v-if="small">{{ small }}</small>
  </label>
  <div class="input">
    <Icon v-if="icon" :name="icon" />
    <slot />
    <span></span>
  </div>
</template>