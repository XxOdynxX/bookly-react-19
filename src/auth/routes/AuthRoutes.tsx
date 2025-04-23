import { RouteObject } from "react-router";
import { LoginPage } from "../pages/LoginPage";

export const authRoutes: RouteObject = {
  path:'auth',
  children:[
    {
      path:'signin',
      element:<LoginPage />
    }
  ]

}