<script setup>
import { set } from '@vueuse/core' 

const { price_dollar, price_btc, price_eth, round } = useProduct()

const qty = ref(1)
const qty_min = 1
const qty_max = 999

watch(qty, (newQty) => {
  if (newQty < qty_min) {
    set(qty, qty_min)
  }
  else if (newQty > qty_max) {
    set(qty, qty_max)
  }
})

const rounded = price => {
  return price.toFixed(round.value)
} 

const subTotal_dollar = computed(() => price_dollar.value * qty.value)
const subTotal_btc = computed(() => rounded(price_btc.value * qty.value))
const subTotal_eth = computed(() => rounded(price_eth.value * qty.value))

const total_dollar = computed(() => subTotal_dollar.value)
const total_btc = computed(() => subTotal_btc.value)
const total_eth = computed(() => subTotal_eth.value)
</script>

<template>
  <div class="modal-table">
    <table>
      <thead>
        <tr>
          <th width="1"></th>
          <th><span>{{ $t('modal.product') }}</span></th>
          <th width="100"><span>{{ $t('modal.price') }}</span></th>
          <th width="100"><span>{{ $t('modal.qty') }}</span></th>
          <th width="120" class="right"><span>{{ $t('modal.subtotal') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <tr class="sep"><td></td></tr>
        <tr>
          <td>
            <picture>
              <img src="/img/keepix-v1.png" :alt="$t('site')" loading="lazy" width="566" height="347" />
            </picture>
          </td>
          <td><strong>Keepix v1</strong></td>
          <td>${{ price_dollar }}</td>
          <td>
            <input 
              v-model="qty" 
              type="number" 
              :min="qty_min" 
              :max="qty_max" 
              step="1"
              class="qty"
              />
          </td>
          <td class="right"><strong>${{ subTotal_dollar }}</strong></td>
        </tr>
        <tr class="sep"><td></td></tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="space"></td>
          <td>{{ $t('modal.subtotal') }}:</td>
          <td colspan="2" class="right"><strong>${{ subTotal_dollar }}</strong></td>
        </tr>
        <tr class="total">
          <td colspan="2" class="space"></td>
          <td>
            <strong>{{ $t('modal.total') }}:</strong>
            <small>{{ $t('modal.total') }} BTC:</small>
            <small>{{ $t('modal.total') }} ETH:</small>
          </td>
          <td colspan="2" class="right">
            <strong>${{ total_dollar }}</strong>
            <small><Icon name="mdi:bitcoin" /><strong>{{ total_btc }}</strong></small>
            <small><Icon name="mdi:ethereum" /><strong>{{ total_eth }}</strong></small>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>