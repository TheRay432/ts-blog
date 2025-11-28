import { User } from "@/interfaces";
import axios from "axios";

const AuthRequest = axios.create({
  baseURL: "https://server-ray-blog.vercel.app/api/auth",
});

export const apiRegisterRequest = (user: User) =>
  AuthRequest.post("/register", user);

export const apiLoginRequest = async (user: any) => {
  try {
    return await AuthRequest.post("/login", user);
  } catch (error) {
    return error;
  }
};
