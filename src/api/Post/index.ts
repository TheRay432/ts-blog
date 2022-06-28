import axios from "axios";

const PostRequest = axios.create({
  baseURL: "http://localhost:5050/api",
});

export const apiGetPostRequest = async () => {
  try {
    return await PostRequest.get("/posts");
  } catch (error) {
    return error;
  }
};
