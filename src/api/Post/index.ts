import { Post } from "@/interfaces";
import axios from "axios";

const PostRequest = axios.create({
  baseURL: "https://tsblog-project.herokuapp.com/api/posts",
});

export const apiGetPostRequest = async (search: string) => {
  try {
    return await PostRequest.get("/" + search);
  } catch (error) {
    return error;
  }
};

export const apiAddPostRequest = async (post: Post) => {
  try {
    return await PostRequest.post("/", post);
  } catch (error) {
    return error;
  }
};

export const apiGetMyPostRequest = async (id: string) => {
  try {
    return await PostRequest.get(`/userEmail/${id}`);
  } catch (error) {
    return error;
  }
};
