import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-600 flex py-5 flex-col gap-10">
      <section className="px-5 flex flex-row justify-between items-center">
        <div className="w-40 flex flex-col gap-2 py-5">
          <h1 className="text-4xl text-white">
            Book<span className="text-emerald-900">ly</span>
          </h1>
          <p className="italic text-white">El arte de la lectura en un solo lugar</p>
        </div>
        <div className="flex flex-row gap-30">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-white">Enlaces</h3>
            <nav>
              <ul className="flex flex-col gap-2 text-lg text-white">
                <NavLink to={'/'} className="hover:text-yellow-400 hover:underline duration-300 transition-all font-medium cursor-pointer">INICIO</NavLink>
                <NavLink to={'/books'} className="hover:text-yellow-400 hover:underline duration-300 transition-all font-medium cursor-pointer">LIBROS</NavLink>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2 text-white text-lg">
            <h3 className="text-2xl">Contacto</h3>
            <p>Calle xxx - xxx</p>
            <p>xxxx@xxx.com</p>
            <p>+xx x xxxxxxxxxx</p>
          </div>
        </div>
      </section>
      <hr className="text-white" />
      <section className="flex justify-center items-center pb-5 text-white">© 2025 Bookly. Todos los derechos reservados</section>
    </footer>
  );
};
