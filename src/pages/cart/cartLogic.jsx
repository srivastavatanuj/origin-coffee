import React from "react";
import { useMutation, useQuery } from "react-query";
import useApi from "../../APIs/useApi";

function cartLogic() {
  const {
    removeItemFromCart,
    getCartItems,
    modifycartItem,
    createPaymentLinkView,
  } = useApi();

  const { mutate: ModifyCart } = useMutation(
    () => {
      (data) => modifycartItem(data);
    },
    {
      onSuccess: (response) => {
        console.log(res);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: GetPaymentLink } = useMutation(
    createPaymentLinkView,

    {
      onSuccess: (response) => {
        window.open(response.payment_url);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: RemoveCartItem } = useMutation(
    () => {
      (data) => removeItemFromCart(data);
    },
    {
      onSuccess: (response) => {
        console.log(res);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { refetch: FetchCartItem, data: cartItems = [] } = useQuery({
    queryKey: ["fetchItems"],
    queryFn: () =>
      getCartItems().then((res) => {
        return res;
      }),
  });

  return {
    ModifyCart,
    FetchCartItem,
    RemoveCartItem,
    cartItems,
    GetPaymentLink,
  };
}

export default cartLogic;
