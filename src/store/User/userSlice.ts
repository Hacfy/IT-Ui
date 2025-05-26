import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_id: null,
  user_email: null,
  user_type: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user_id = action.payload.user_id;
      state.user_email = action.payload.user_email;
      state.user_type = action.payload.user_type;
    },
    clearUser(state) {
      state.user_id = null;
      state.user_email = null;
      state.user_type = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
