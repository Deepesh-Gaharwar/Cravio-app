import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // store Firebase user data here, just the serializable properties
  },
  
  reducers: {
    setUser: (state, action) => {
      // Store only the serializable properties of the Firebase user
      const { uid, email, displayName, photoURL } = action.payload;
      state.user = { uid, email, displayName, photoURL }; // Store these properties instead of the whole user object
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
