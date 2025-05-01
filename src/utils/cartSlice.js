import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [], // [{ item: {...}, quantity: 2 }]
  },

  reducers: {
    addItem: (state, action) => {
        console.log("Items:", JSON.parse(JSON.stringify(state.items)));

      const id = action.payload.id;
      const existingItem = state.items.find(item => item.item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ item: action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const id = action.payload.id;
      const index = state.items.findIndex(item => item.card.info.id === id);
        console.log(index)
      if (index > -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
