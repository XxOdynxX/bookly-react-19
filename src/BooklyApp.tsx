import { createBrowserRouter, RouterProvider } from "react-router";
import { booklyRoutes } from "./BooklyRoutes";

export const BooklyApp = () => {
  const routes = createBrowserRouter(booklyRoutes);
  
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}
