// store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    loginStart(state) {
      state.loading = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const {
  setUser,
  clearUser,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
