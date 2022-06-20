import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isShow: boolean;
  isLogin: boolean;
  isRegister: boolean;
}

const initialState: InitialState = {
  isShow: false,
  isLogin: false,
  isRegister: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isShow = true;
      if (action.payload === "login") {
        state.isLogin = true;
        state.isRegister = false;
      }
      if (action.payload === "register") {
        state.isRegister = true;
        state.isLogin = false;
      }
    },
    closeModal: (state) => {
      state.isShow = false;
      state.isLogin = false;
      state.isRegister = false;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
