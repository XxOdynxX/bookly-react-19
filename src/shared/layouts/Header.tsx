import { NavLink } from "react-router"

export const Header = () => {
  return (
    <header className="w-full z-20 bg-white flex flex-row justify-between fixed items-center px-20 py-5">
      <h1 className="text-4xl text-gray-700">Book<span className="text-emerald-700">ly</span></h1>
      <nav className="flex items-center justify-center">
        <ul className="flex flex-row items-center gap-5 text-xl">
          <NavLink to={'/'} className="hover:text-gray-600 duration-300 transition-all font-medium cursor-pointer">INICIO</NavLink>
          <NavLink to={'/books'} className="hover:text-gray-600 duration-300 transition-all font-medium cursor-pointer">LIBROS</NavLink>
        </ul>
      </nav>
    </header>
  )
}
