import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",

    initialState : {
        items : [],
    },

    reducers : {
        addItem : (state,action) => {

            // Vannila (older) REDUX => Don't MUTATE STATE
            // const newState = [... state];
            // newState.items.push(action.payload);
            // return newState;

           // REDUX TOOLKIT 
           // We HAVE to mutate the state => returning is not mandatory => immer.js library uses(BT Scenes)
           // mutating the state over here  
            state.items.push(action.payload);

        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => { 
            state.items.length = 0;
        }
    }

});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;