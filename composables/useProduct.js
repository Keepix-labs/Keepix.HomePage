import { useShopAPI } from "./useShopAPI";

export const useProduct = () => {
  const { data: btc } = useFetch(
    "https://api.pro.coinbase.com/products/BTC-USD/ticker"
  );
  const { data: eth } = useFetch(
    "https://api.pro.coinbase.com/products/ETH-USD/ticker"
  );

  const { productPrice } = useShopAPI();

  const price_dollar = computed(() => productPrice.value);
  const round = ref(6);

  const price_btc = computed(() =>
    (price_dollar.value / parseFloat(btc.value.price)).toFixed(round.value)
  );
  const price_eth = computed(() =>
    (price_dollar.value / parseFloat(eth.value.price)).toFixed(round.value)
  );

  return {
    price_dollar,
    price_btc,
    price_eth,
    round,
  };
};
