import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
        
      const id = action.payload.id;
      const existingItem = state.items.find(item => item.item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ item: action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const item = action.payload;

      const existing = state.items.find(i => i.item.id === item.id) ; 


      if(existing && existing.quantity > 1){
        existing.quantity -= 1;
      } else{
        state.items = state.items.filter(i => i.item.id !== item.id) ;
      }
    },

    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
