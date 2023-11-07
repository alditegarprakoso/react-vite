import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemExist = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemExist) {
        itemExist.qty += 1;
      } else {
        state.data.push({ ...action.payload, qty: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    deleteCart: (state, action) => {
      const newCart = [...state.data];
      newCart.splice(action.payload.index, 1);
      state.data = newCart;
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
  },
});

export const { addToCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
