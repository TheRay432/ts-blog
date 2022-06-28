import HomePage from "@/pages/HomePage";
import PostPage from "@/pages/PostPage";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/postData",
    element: <PostPage />,
    children: [],
  },
];
export default routes;
