import HomePage from "@/pages/HomePage";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
];
export default routes;
