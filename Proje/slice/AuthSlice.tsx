import { createSlice } from '@reduxjs/toolkit';
import store from '../store';

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = AuthSlice.actions;




export default AuthSlice.reducer;