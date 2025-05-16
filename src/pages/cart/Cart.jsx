import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import cartLogic from "./cartLogic";

function Cart() {
  const {
    ModifyCart,
    FetchCartItem,
    RemoveCartItem,
    cartItems,
    GetPaymentLink,
  } = cartLogic();

  const items = cartItems.cart_items;
  const price = cartItems.total_price;

  return (
    <div>
      <div className="pt-[150px] bg-[#333232] h-20"></div>

      <div className="flex flex-col md:flex-row gap-10 px-12 py-10 min-h-[100vh] bg-gray-100">
        {/* LEFT - Cart Items */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>

          {items?.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            items?.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
              >
                <img
                  src={item.image}
                  alt={item.product_name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.product_name}</h3>
                  <p className="text-sm text-gray-500">
                    Size: {item.variant_size}
                  </p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  {/* <div className="flex gap-3 mt-5">
                    <button
                      className="w-[20px] h-[20px] border p-1 rounded-full flex items-center justify-center"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="w-[20px] h-[20px] border p-1 rounded-full flex items-center justify-center"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div> */}
                </div>
                <div className="font-bold text-lg">
                  ${parseFloat(item.price).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT - Summary */}
        <div className="w-full md:w-[30%] bg-white p-6 rounded-xl shadow space-y-4 h-fit mt-12">
          <h2 className="text-xl font-bold">Summary</h2>

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${price?.price__sum.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax </span>
            <span>${0}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${price?.price__sum.toFixed(2)}</span>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={GetPaymentLink}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
