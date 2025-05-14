import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice" ;
import authReducer from "./authSlice" ;

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"

import storage from "redux-persist/lib/storage"

// Step 1 : Create persist config
const persistConfig = {
    key : "cart",
    storage,

} ;

// Step 2 : Wrap cartReducer with persistReducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);


// Step 3 : Create store
const appStore = configureStore({
    reducer : {
       cart : persistedCartReducer,
       auth : authReducer,
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck : {
                ignoreActions : [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


// Step 4 : Export both store and persistor
export const persistor = persistStore(appStore) ;
export default appStore;