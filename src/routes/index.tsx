import HomePage from "@/pages/HomePage";
import MyPost from "@/pages/MyPost";
import PostPage from "@/pages/PostPage";
import WritePage from "@/pages/WritePage";
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
  {
    path: "/write",
    element: <WritePage />,
    children: [],
  },
  {
    path: "/mypost",
    element: <MyPost />,
    children: [],
  },
];
export default routes;
