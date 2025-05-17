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

const persistConfig = {
    key : "cart",
    storage,

} ;

const persistedCartReducer = persistReducer(persistConfig, cartReducer);


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


export const persistor = persistStore(appStore) ;
export default appStore;