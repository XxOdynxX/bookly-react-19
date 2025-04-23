import { RouteObject } from "react-router";
import { BooksPage } from "../pages/BooksPage";
import { BookPage } from "../pages/BookPage";

export const booksRoutes: RouteObject = {
  path:'/books',
  children:[
    {
      path:'',
      element:<BooksPage />
    },
    {
      path:'details/:q',
      element:<BookPage />
    }
  ]
}