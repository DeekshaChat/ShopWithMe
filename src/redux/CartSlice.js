import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const obj = action.payload;
      const existedItem = state.items.find((item) => item.id === action.payload.id);
      if (existedItem) {
        existedItem.quantity += 1;
      } else {
        const newItem = {...obj, quantity: 1};
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const existedItem = state.items.find((item) => item.id === action.payload.id);
      if (existedItem?.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        existedItem.quantity -= 1;
      }
    }
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;