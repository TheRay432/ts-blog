import { Post } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  posts: Post[];
  isFetch: boolean;
  postErrMsg: string;
  searchPath: string;
}

const initialState: InitialState = {
  posts: [],
  isFetch: false,
  postErrMsg: "",
  searchPath: "",
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    fetchPostData: (state, action) => {
      state.isFetch = true;
    },
    fetchMyPostData: (state, action) => {
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
    addPath: (state, action) => {
      state.searchPath = action.payload;
    },
  },
});

export const {
  fetchPostData,
  showPostData,
  showErrMsg,
  hideErrMsg,
  addPostData,
  fetchMyPostData,
  addPath,
} = postSlice.actions;
export default postSlice.reducer;
