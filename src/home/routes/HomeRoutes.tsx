import { RouteObject } from "react-router";
import { HomePage } from "../pages/HomePage";

export const homeRoutes: RouteObject = {
  index:true,
  path:'/',
  element:<HomePage />
}