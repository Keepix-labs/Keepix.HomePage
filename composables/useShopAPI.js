import { set } from "@vueuse/core";

const apiBase = "https://admin.keepix.org/wp-json/wc/v3";
const apiKey = "ck_1e5523e41a7691c8bbc04e143bc8ed19d4803ede";
const apiSecret = "cs_d769a96929ec5c5ed5e4ca44cfd507c882c1cc4c";

const productPrice = ref(0);
const orderUrl = ref(null);
const isLoading = ref(false);
const error = ref(null);

export const useShopAPI = () => {
  const fetchProductPrice = async () => {
    set(isLoading, true);
    set(error, null);

    try {
      const response = await fetch(`${apiBase}/products/20`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
        },
      });

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

  const createOrder = async (formData) => {
    set(isLoading, true);
    set(error, null);

    try {
      const response = await fetch(`${apiBase}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok || !responseData.payment_url) {
        if (
          responseData.data.params &&
          (responseData.data.params.billing ||
            responseData.data.params.shipping)
        ) {
          throw new Error(
            responseData.data.params.billing ||
              responseData.data.params.shipping
          );
        }

        throw new Error(`HTTP error ${response.status}`);
      }

      set(orderUrl, responseData.payment_url);
    } catch (e) {
      set(error, e);
    }

    set(isLoading, false);
  };

  return {
    isLoading,
    error,
    fetchProductPrice,
    productPrice,
    createOrder,
    orderUrl,
  };
};
