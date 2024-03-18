import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../../../utils/localStorageCart";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], payment_methods: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add item to cart list
    addToCart: (state, action) => {
      const { ...product } = action.payload;
      const existProduct = state.cartItems.find(
        (item) => item._id === product._id
      );

      if (existProduct) {
        state.cartItems = state.cartItems.map((item) =>
          item._id === product._id ? product : item
        );
      } else {
        state.cartItems = [...state.cartItems, product];
      }
      return updateCart(state, product);
    },

    // remove item from cart list
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      return updateCart(state);
    },

    // save payment information to the cart list
    setPaymentMethod: (state, action) => {
      state.payment_methods = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    // set the cart list
    setCart: (action) => {
      return action.payload;
    },

    // clear the cart list information
    clearCartItems: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  setCart,
  removeFromCart,
  setPaymentMethod,
  clearCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
