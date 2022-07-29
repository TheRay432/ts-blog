import { Post } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  posts: Post[];
  onePost: Post;
  isFetch: boolean;
  postErrMsg: string;
  searchPath: string;
  isErr: boolean;
}

const initialState: InitialState = {
  posts: [],
  onePost: { title: "", desc: "", postPhoto: "", username: "", email: "" },
  isFetch: false,
  postErrMsg: "",
  searchPath: "",
  isErr: false,
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
    clearPath: (state) => {
      state.searchPath = "";
    },
    fetchIdPostData: (state, action) => {
      state.isErr = false;
    },
    fetchIdPostDataError: (state) => {
      state.isErr = true;
    },
    showIdPostData: (state, action) => {
      state.onePost = action.payload;
    },
    updatePostData: (state, action) => {},
    updatePostDataSuccess: (state, action) => {
      state.onePost = action.payload;
    },
    deletePostData: (state, action) => {},
    deletePostDataSuccess: (state) => {
      state.onePost = {
        title: "",
        desc: "",
        postPhoto: "",
        username: "",
        email: "",
      };
    },
    clearOnePost: (state) => {
      state.onePost = {
        title: "",
        desc: "",
        postPhoto: "",
        username: "",
        email: "",
      };
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
  clearPath,
  fetchIdPostData,
  fetchIdPostDataError,
  showIdPostData,
  clearOnePost,
  updatePostData,
  updatePostDataSuccess,
  deletePostData,
  deletePostDataSuccess,
} = postSlice.actions;
export default postSlice.reducer;
