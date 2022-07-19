import { Post } from "@/interfaces";
import axios from "axios";

const PostRequest = axios.create({
  baseURL: "http://localhost:5050/api/posts",
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

export const apiGetMyPostRequest = async (email: string) => {
  try {
    return await PostRequest.get(`/userEmail/${email}`);
  } catch (error) {
    return error;
  }
};

export const apiGetIdPostRequest = async (id: string) => {
  try {
    return await (
      await PostRequest.get(`/${id}`)
    ).data;
  } catch (error) {
    return error;
  }
};
