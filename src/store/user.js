import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "Initial username value",
  },
  reducers: {
    setUser(state, action) {
      state.username = action.payload.username;
    },
    userLogout(state, action) {
      state.username = "";
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
