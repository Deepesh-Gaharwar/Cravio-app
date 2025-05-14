import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [], // [{ item: {...}, quantity: 2 }]
  },

  reducers: {
    addItem: (state, action) => {
       // console.log("Items:", JSON.parse(JSON.stringify(state.items)));
      
     // console.log(action.payload) ; 
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

     // console.log(existing) ;

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
