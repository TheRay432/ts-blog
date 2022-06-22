import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    toRegister: (state, action) => {},
  },
});

export const { toRegister } = UserSlice.actions;
export default UserSlice.reducer;
