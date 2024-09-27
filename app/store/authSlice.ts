import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    username: string | null;
}

interface LoginPayload {
    token: string;
    userId: string;
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
    username: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginPayload>) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.username = action.payload.userId;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.username = null;
        },
    }
});

export const { login, logout} = authSlice.actions;
export default authSlice.reducer;