<script setup>
  const props = defineProps({
    tag: {
      type: String,
      default: 'nuxt-link'
    },
    attr: {
      type: String,
      default: ''
    },
    text: String,
    to: String,
    icon: String | Boolean,
    rounded: Boolean,
    bordered: Boolean
  })

  const roundedClass = computed(() => props.rounded ? 'rounded ' : '')
  const borderedClass = computed(() => props.bordered ? 'bordered ' : '')
  const classList = computed(() => {
    return `btn ${roundedClass.value}${borderedClass.value}${props.attr}`
  })

  const ariaLabel = computed(() => {
    if (props.rounded) 
      return props.text
  })
</script>

<template>
  <NuxtLink
    v-if="tag === 'nuxt-link'"
    :class="classList"
    :aria-label="ariaLabel"
    :title="text"
    :to="to">
    <span v-if="text && !rounded" v-html="text"></span>
    <Icon v-if="icon" :name="icon" />
  </NuxtLink>
  <component
    v-else
    :is="tag"
    :class="classList"
    :aria-label="ariaLabel"
    :title="text">
    <span v-if="text && !rounded" v-html="text"></span>
    <Icon v-if="icon" :name="icon" />
  </component>
</template>