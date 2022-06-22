import { User } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  user: User;
  loginErrMsg: string;
}
const initialState: InitialState = {
  user: {
    _id: "",
    username: "",
    email: "",
    profilePicture: "",
  },
  loginErrMsg: "",
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    toLogin: (state, action) => {},
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loginErrMsg = "";
    },
    loginError: (state, action) => {
      state.loginErrMsg = action.payload;
    },
    initErrMsg: (state) => {
      state.loginErrMsg = "";
    },
  },
});

export const { toLogin, loginSuccess, loginError, initErrMsg } =
  UserSlice.actions;
export default UserSlice.reducer;
