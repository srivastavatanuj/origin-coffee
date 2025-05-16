import { useStore } from "../store/store";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const useApi = () => {
  const { userLoggedIn, userLoggedOut, setUserName, setCartItems } = useStore();
  const triggerApi = async (endpoint, type, data = "", token = false) => {
    const body = {
      method: type,
      headers: {
        "content-type": "application/json",
      },
    };

    if (token) {
      const accessToken = localStorage.getItem("access");
      body.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (data) {
      body["body"] = JSON.stringify(data);
    }

    const respond = await fetch(BASE_API_URL + endpoint, body);
    if (!respond.ok) {
      throw new Error(await respond.text());
    }
    return respond.json();
  };

  const getAllProducts = (page = 1) => {
    return triggerApi(`/products/allproducts/?page=${page}`, "GET");
  };

  const sendContactQuery = (data) => {
    return triggerApi("query/contact-us/", "POST", data);
  };

  const logInUser = (data) => {
    return triggerApi("auth/login/", "POST", data);
  };

  const refreshToken = (data) => {
    return triggerApi("auth/refresh/", "POST", data);
  };

  const resetPassword = (data) => {
    return triggerApi("auth/reset/", "POST", data);
  };

  const getMyCatalog = (page = 1) => {
    return triggerApi(`/products/my-cataloge/?page=${page}`, "GET", "", true);
  };

  const getMyCatalogProduct = (product) => {
    return triggerApi(`/products/my-cataloge/${product}/`, "GET", "", true);
  };

  const getBasicProfile = () => {
    triggerApi(`/client/profile/`, "GET", "", true).then((res) => {
      setUserName(res.nick_name);
      setCartItems(res.cartItems);
    });
  };

  const addItemToCart = (data) => {
    return triggerApi(`/orders/cart/`, "POST", data, true);
  };
  const removeItemFromCart = (data) => {
    return triggerApi(`/orders/cart/`, "DELETE", data, true);
  };
  const getCartItems = () => {
    return triggerApi(`/orders/cart/`, "GET", "", true);
  };
  const modifycartItem = (data) => {
    return triggerApi(`/orders/cart/`, "PUT", data, true);
  };

  const createPaymentLinkView = () => {
    return triggerApi(`/orders/create-payment-link/`, "POST", "", true);
  };

  return {
    getAllProducts,
    sendContactQuery,
    getMyCatalog,
    logInUser,
    resetPassword,
    getMyCatalogProduct,
    refreshToken,
    getBasicProfile,
    addItemToCart,
    removeItemFromCart,
    getCartItems,
    modifycartItem,
    createPaymentLinkView,
  };
};
export default useApi;
