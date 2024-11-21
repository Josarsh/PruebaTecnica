import { configureStore } from "@reduxjs/toolkit";
import { Api } from "@/redux/services/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from './features/UserBuscar'
export const store = configureStore({
    reducer:{
        ['Api']: Api.reducer,
        user:userReducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat([Api.middleware])
})
setupListeners(store.dispatch)
export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch