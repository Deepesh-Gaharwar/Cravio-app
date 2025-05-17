import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, 
  },
  
  reducers: {
    setUser: (state, action) => {
      
      const { uid, email, displayName, photoURL } = action.payload;
      state.user = { uid, email, displayName, photoURL }; 
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
