import { Post } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  posts: Post[];
  onePost: Post;
  isFetch: boolean;
  postErrMsg: string;
  searchPath: string;
  isErr: boolean;
  isSuccess: boolean;
}

const initialState: InitialState = {
  posts: [],
  onePost: { title: "", desc: "", postPhoto: "", username: "", email: "" },
  isFetch: false,
  postErrMsg: "",
  searchPath: "",
  isErr: false,
  isSuccess: false,
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
    addPostDataSuccess: (state, action) => {
      state.posts = action.payload;
      state.isSuccess = true;
    },
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
      state.isSuccess = true;
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
    initState: (state) => {
      state.isSuccess = false;
    },
  },
});

export const {
  fetchPostData,
  showPostData,
  showErrMsg,
  hideErrMsg,
  addPostData,
  addPostDataSuccess,
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
  initState,
} = postSlice.actions;
export default postSlice.reducer;
