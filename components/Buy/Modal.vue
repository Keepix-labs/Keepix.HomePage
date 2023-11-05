<script lang="ts" setup>
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

const setStep = (id: number) => set(stepNumber, id)
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
        <template #action>
          <Btn @click="setStep(0)" :text="$t('modal.back')" attr="grey" />
          <Btn @click="setStep(2)" :text="$t('modal.next')" icon="ph:arrow-right" attr="secondary" />
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