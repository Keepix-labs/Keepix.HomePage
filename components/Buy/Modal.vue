<script setup>
import { set } from '@vueuse/core'

const { t } = useI18n()
const { state, close } = useModal()

const steps = [
  {
    id: "cart",
    title: t('modal.cart')
  },
  {
    id: "delivery",
    title: t('modal.delivery')
  },
  {
    id: "payment",
    title: t('modal.payment')
  }
]

const stepNumber = ref(0)
const stepActive = computed(() => steps[stepNumber.value])

const setStep = (id) => set(stepNumber, id)

const formData = reactive({
  "payment_method": "mycryptocheckout",
  "payment_method_title": "Cryptocurrency",
  "set_paid": false,
  "billing": {
    "first_name": "",
    "last_name": "",
    "address_1": "",
    "city": "",
    "postcode": "",
    "country": "",
    "email": "",
    "phone": ""
  },
  "shipping": {
    "first_name": "",
    "last_name": "",
    "address_1": "",
    "city": "",
    "postcode": "",
    "country": "",
    "email": "",
    "phone": ""
  },
  "line_items": [
    {
      "product_id": 20,
      "quantity": 1
    }
  ]
});
provide('formData', formData);
provide('differentAddress', ref(false));
const paymentIframeUrl = ref(null);
provide('paymentIframeUrl', paymentIframeUrl);

const isSubmitDisable = computed(() => {
  return (
    Object.keys(formData.shipping).some((key) => formData.shipping[key] === '') ||
    Object.keys(formData.billing).some((key) => formData.billing[key] === '')
  );
});

const { fetchProductPrice, createOrder, isLoading, error, orderUrl } = useShopAPI();

watch(orderUrl, (newOrderUrl) => {
  if (newOrderUrl) {
    setStep(2);
  }
});

onMounted(() => {
  fetchProductPrice();
});

</script>

<template>
  <div class="modal" :class="{ open: state }">
    <div class="modal-wrapper">
      <Btn @click="close" text="Close" icon="ph:x" attr="grey close" rounded />
      <div class="modal-title">{{ stepActive.title }}</div>
      <ul class="modal-step" :data-active="stepNumber">
        <template v-for="step, index in steps">
          <li :class="stepNumber > index ? 'ok' : undefined">
            <span>{{ step.title }}</span>
          </li>
        </template>
      </ul>
      <BuyContent v-if="stepNumber === 0">
        <BuyCart />
        <template #action>
          <Btn @click="setStep(1)" :text="$t('modal.checkout')" icon="ph:arrow-right" attr="secondary" />
        </template>
      </BuyContent>
      <BuyContent v-else-if="stepNumber === 1">
        <BuyDelivery />
        <Loader v-if="isLoading">Creating order ...</Loader>
        <div v-if="error" class="message error">{{ error }}</div>
        <template #action>
          <Btn @click="setStep(0)" :text="$t('modal.back')" attr="grey" />
          <Btn @click="!isSubmitDisable ? createOrder(formData) : null" :text="$t('modal.goPayment')"
            icon="ph:arrow-right" attr="secondary" :disabled="isSubmitDisable" />
        </template>
      </BuyContent>
      <BuyContent v-else-if="stepNumber === 2">
        <BuyPayment />
        <template #action>
          <Btn @click="setStep(1)" :text="$t('modal.back')" attr="grey" />
        </template>
      </BuyContent>
    </div>
  </div>
</template>