import { Post } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  posts: Post[];
  isFetch: boolean;
  postErrMsg: string;
}

const initialState: InitialState = {
  posts: [],
  isFetch: false,
  postErrMsg: "",
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    fetchPostData: (state) => {
      state.isFetch = true;
    },
    showPostData: (state, action) => {
      state.isFetch = false;
      state.posts = action.payload.reverse();
    },
    showErrMsg: (state, action) => {
      state.isFetch = false;
      state.postErrMsg = action.payload;
    },
    hideErrMsg: (state, action) => {
      state.postErrMsg = action.payload;
    },
    addPostData: (state, action) => {},
  },
});

export const {
  fetchPostData,
  showPostData,
  showErrMsg,
  hideErrMsg,
  addPostData,
} = postSlice.actions;
export default postSlice.reducer;
