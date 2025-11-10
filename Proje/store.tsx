import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/TodoSlice";
import AuthReducer from "./slice/AuthSlice";

const store = configureStore({
    reducer: {
        todoSlice: todoReducer,
        AuthSlice: AuthReducer,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;