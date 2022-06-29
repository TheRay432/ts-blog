import { Post } from "@/interfaces";
import axios from "axios";

const PostRequest = axios.create({
  baseURL: "http://localhost:5050/api/posts",
});

export const apiGetPostRequest = async () => {
  try {
    return await PostRequest.get("/");
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
