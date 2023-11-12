import { set } from "@vueuse/core";

export const useShopAPI = () => {
  const WooCommerceApiKey = "ck_1e5523e41a7691c8bbc04e143bc8ed19d4803ede";
  const WooCommerceApiSecret = "cs_d769a96929ec5c5ed5e4ca44cfd507c882c1cc4c";

  const productPrice = ref(0);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchProductPrice = async () => {
    set(isLoading, true);
    set(error, null);

    try {
      const response = await fetch(
        "https://admin.keepix.org/wp-json/wc/v3/products/20",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(
              `${WooCommerceApiKey}:${WooCommerceApiSecret}`
            )}`,
          },
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      set(productPrice, responseData.price);
    } catch (e) {
      set(error, e);
    }

    set(isLoading, false);
  };

  onMounted(() => {
    fetchProductPrice();
  });

  return {
    productPrice,
    isLoading,
    error,
    fetchProductPrice,
  };
};
