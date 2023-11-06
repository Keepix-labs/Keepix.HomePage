<script setup>
  const billing = ref('')
</script>

<template>
  <h3 class="modal-subtitle">{{ $t('modal.deliveryAddress') }}</h3>
  <BuyFormAddress />
  <label for="different" class="different">
    <input v-model="billing" type="checkbox" id="different" /> 
    {{ $t('modal.form.different') }}
  </label>
  <template v-if="billing">
    <h3 class="modal-subtitle">{{ $t('modal.billingAddress') }}</h3>
    <BuyFormAddress />
  </template>
</template>