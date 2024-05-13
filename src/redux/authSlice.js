import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userDetails: [],
    isLoggedIn: false
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.userDetails = action.payload;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.userDetails = [];
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;