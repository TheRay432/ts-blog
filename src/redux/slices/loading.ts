import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isShow = true;
    },
    closeLoading: (state) => {
      state.isShow = false;
    },
  },
});

export const { showLoading, closeLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
