import { useState, useEffect } from "react";
import { fetchBooksBySubjects } from "../utils/fetchBookBySubject";
import { Work } from "../models/Book";
import { HomeBookCard } from "../components/HomeBookCard";
import { NavLink } from "react-router";

export const HomePage = () => {
  const [books, setBooks] = useState<Work[]>([]);
  const [genreSelected, setGenreSelected] = useState('romance')

  useEffect(() => {
    window.scrollTo(0,0)
    const getBooks = async () => {
      const books = await fetchBooksBySubjects(genreSelected);
      setBooks(books.works);
    };
    getBooks();
  }, [genreSelected]);
  return (
    <>
      <section className="bg-gray-400 min-h-screen h-[500px] flex relative">
        <img
          className="opacity-30 w-full h-full object-cover absolute"
          src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25832350/257503_e_book_reader_CVirginia_.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100"
          alt="reader"
        />
        <div className="w-full z-10 h-full flex justify-center items-center flex-col gap-2">
          <h1 className="text-6xl text-black font-bold">
            EL placer de lectura
          </h1>
          <h2 className="text-2xl">
            Descubre nuevos titulos y aventurate en este mundo
          </h2>
          <NavLink to={'/books'} className="p-3 bg-amber-500 rounded-xl font-semibold hover:bg-amber-600 duration-300 transition-all">
            Explora con nosotros
          </NavLink>
        </div>
      </section>
      <section className="min-h-screen flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl text-gray-800 font-extrabold italic underline">
          Nuestra selección
        </h1>
        <nav className="flex justify-center items-center">
          <ul className="flex flex-row gap-5 text-lg font-extralight">
            <li onClick={()=>setGenreSelected('romance')} className={`hover:underline hover:text-yellow-700 duration-300 transition-all cursor-pointer ${genreSelected ==='romance' ? 'underline text-yellow-700':'' }`}>
              Romance
            </li>
            <li onClick={()=>setGenreSelected('action')} className={`hover:underline hover:text-yellow-700 duration-300 transition-all cursor-pointer ${genreSelected ==='action' ? 'underline text-yellow-700':'' }`}>
              Acción
            </li>
            <li onClick={()=>setGenreSelected('terror')} className={`hover:underline hover:text-yellow-700 duration-300 transition-all cursor-pointer ${genreSelected ==='terror' ? 'underline text-yellow-700':'' }`}>
              Terror
            </li>
          </ul>
        </nav>
        <div className="flex flex-row gap-2">
        {books.map((item: Work) => (
            <HomeBookCard key={item.title + item.cover_id} book={item} />
          ))}
        </div>
      </section>
      <section className="w-full h-96 flex justify-center items-center flex-col gap-5">
        <h1 className="text-4xl text-gray-800 font-semibold">Mantente informado</h1>
        <p className="text-xl">Suscríbete para recibir noticias y otros</p>
        <form className="flex flex-row gap-5 items-center justify-center">
          <input className="border-2 border-gray-400 px-5 py-3 rounded-lg placeholder:text-gray-500" type="text" placeholder="Correo electrónico"/>
          <button className="px-5 py-3 bg-amber-600 rounded-lg">SUSCRIBIRSE</button>
        </form>
      </section>
    </>
  );
};
