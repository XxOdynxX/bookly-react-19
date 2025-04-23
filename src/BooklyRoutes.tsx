import { Outlet, RouteObject } from "react-router";
import { authRoutes } from "./auth/routes/AuthRoutes";
import { homeRoutes } from "./home/routes/HomeRoutes";
import { Footer, Header } from "./shared";
import { booksRoutes } from "./books/routes/BooksRoutes";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export const booklyRoutes:RouteObject[] = [
  {
    path:'/',
    element: <Layout />,
    children:[
      authRoutes,
      homeRoutes,
      booksRoutes
    ]
  }
]