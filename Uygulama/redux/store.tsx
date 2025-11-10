import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
});
// RootState tipini store'un kendi getState metodu üzerinden türetiyoruz
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch tipini store'un kendi dispatch metodu üzerinden türetiyoruz
export type AppDispatch = typeof store.dispatch;