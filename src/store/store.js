import { create } from "zustand";

const useStore = create((set) => ({
  loginStatus: false,
  cartItems: 0,
  userName: "",

  userLoggedIn: () => {
    set({ loginStatus: true });
  },
  userLoggedOut: () => {
    set({ loginStatus: false });
  },

  setCartItems: (count) => {
    set({ cartItems: count });
  },

  setUserName: (name) => {
    set({ userName: name });
  },
}));

export { useStore };
