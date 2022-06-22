import { User } from "@/interfaces";
import axios from "axios";

const AuthRequest = axios.create({
  baseURL: "http://localhost:5050/api/auth",
});

export const apiRegisterRequest = (user: User) =>
  AuthRequest.post("/register", user);
