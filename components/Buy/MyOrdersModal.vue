<script setup>
import { set } from '@vueuse/core'

const { t } = useI18n();
const { getOrderById, isLoading, error, getLastOrders } = useShopAPI();

const state = inject('myOrdersModalState');
const orderId = ref(null);
const orderStatus = ref(null);
const mail = "contact@keepix.org";
const lastOrders = ref([]);
const orderIframe = ref(null);

const handleChange = (evt) => {
    set(orderId, evt.target.value);
}

const getOrder = async () => {
    if (!orderId.value) {
        return;
    }

    const data = await getOrderById(orderId.value);
    if (data.status) {
        set(orderStatus, data.status);

        if (data.status === 'pending') {
            set(orderIframe, data.payment_url);
        }
    }
}

const handleLastOrder = (id) => {
    document.getElementById('order_nb').value = id;
    set(orderId, id);
    getOrder();
}

const close = (evt) => {
    state.value = false;
}

watch(state, () => {
    set(orderId, null);
    set(orderStatus, null);
    set(lastOrders, getLastOrders());
    set(orderIframe, null);
})

onMounted(() => {
    lastOrders.value = getLastOrders();
});
</script>

<template>
    <div class="modal myorders" :class="{ open: state }">
        <div class="modal-wrapper">
            <Btn @click="close" text="Close" icon="ph:x" attr="grey close" rounded />
            <div class="modal-title">{{ t('myOrdersModal.title') }}</div>

            <template v-if="!orderIframe">
                <p v-if="lastOrders.length" class="myorders-lastorders">{{ $t('myOrdersModal.lastOrders') }} :
                    <span v-for="orderId in lastOrders.reverse()" @click="() => handleLastOrder(orderId)">
                        <b>{{ orderId }}</b>
                    </span>
                </p>

                <form class="modal-form">
                    <div class="max">
                        <Input icon="ph:order" :label="$t('myOrdersModal.form.orderNb')" name="orderNb" required>
                        <input type="number" id="order_nb" required @input="handleChange" />
                        </Input>
                    </div>
                    <Btn @click="getOrder" :disabled="!orderId" :text="$t('myOrdersModal.form.submit')"
                        icon="ph:arrow-right" attr="secondary" />
                </form>

                <Loader v-if="isLoading">Checking order ...</Loader>
                <div v-if="error" class="message error">{{ error }}</div>

                <div class="message success" v-if="orderStatus">Your order status is : <b>{{ orderStatus }}</b></div>
            </template>


            <iframe v-if="orderIframe" :src="orderIframe" frameborder="0"></iframe>

            <div class="message info">If you need more information about your order : <b><a :href="`mailto:${mail}`">{{
                mail }}</a></b></div>
        </div>
    </div>
</template>