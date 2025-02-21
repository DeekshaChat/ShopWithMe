import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], changed: false },
  reducers: {
    addItem: (state, action) => {
      const obj = action.payload;
      const existedItem = state.items?.find((item) => item.id === action.payload.id);
      state.changed = true;
      if (existedItem) {
        existedItem.quantity += 1;
      } else {
        const newItem = {...obj, quantity: 1};
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const existedItem = state.items.find((item) => item.id === action.payload.id);
      state.changed = true;
      if (existedItem?.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        existedItem.quantity -= 1;
      }
    },
    replaceCart: (state, action) => {
      state.items = action.payload.items;
    }
  },
});

export const { addItem, removeItem, replaceCart } = cartSlice.actions;
export default cartSlice.reducer;