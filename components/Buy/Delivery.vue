<script setup>
const differentAddress = inject('differentAddress');
</script>

<template>
  <h3 class="modal-subtitle">{{ $t('modal.deliveryAddress') }}</h3>
  <BuyFormAddress type="shipping" />
  <label for="different" class="different">
    <input v-model="differentAddress" type="checkbox" id="different" />
    {{ $t('modal.form.different') }}
  </label>
  <template v-if="differentAddress">
    <h3 class="modal-subtitle">{{ $t('modal.billingAddress') }}</h3>
    <BuyFormAddress type="billing" />
  </template>
</template>