import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
    isAuth: boolean;
    email: string;
};

const initialState: AuthState = {
    isAuth: false,
    email: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (
            state,
            { payload: { isAuth, email } }: PayloadAction<AuthState>
        ) => {
            state.isAuth = isAuth;
            state.email = email;
        },
        logout: (state) => {
            state.isAuth = false;
            state.email = '';
        }
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;