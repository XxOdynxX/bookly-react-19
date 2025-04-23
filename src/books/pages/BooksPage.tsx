import { useEffect, useState } from "react";
import { fetchBooksByName } from "../utils/fetchBooksByName";
import { useNavigate, NavLink } from 'react-router';
import { BookResponse } from "../models/Book";


export const BooksPage = () => {
  
  const [response, setResponse] = useState<BookResponse>()
  const [loading, setIsLoading] = useState(false)
  const [search, setSearch] = useState<string>('')
  const navigate = useNavigate()
  
  const searchBooks = () => {
    const newSearch = document.getElementById('search') as HTMLInputElement
    const value = newSearch.value
    navigate(`?q=${encodeURIComponent(value)}`)
    setSearch(value)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
    const getResponse = async() => {
      setIsLoading(true)
      const response = await fetchBooksByName(search) as BookResponse
      setResponse(response)
      setIsLoading(false)
    }
    getResponse();
  },[search])

  return (
    <div className="w-full min-h-screen flex flex-row justify-center pt-30">
      <div className="w-full flex flex-row md:w-4/5 gap-2">
        <section className="w-full md:w-1/2 h-[450px]">
          <form onSubmit={(e)=>{e.preventDefault(); searchBooks()}} className="w-full flex flex-col items-start px-5 py-10 gap-5">
            <input id="search" className="w-full border-2 border-gray-300 focus:outline-gray-400 px-2 py-3 rounded-lg" type="text" placeholder="Inserta un libro para buscar" />
            <button className="bg-blue-700 text-white rounded-lg px-3 py-2 hover:bg-blue-500 cursor-pointer duration-300 transition-all">Buscar</button>
          </form>
        </section>
        <section className="w-full md:w-1/2 h-[450px] overflow-y-scroll px-5 py-3 flex flex-col gap-5">
         { loading && <p>Cargando..</p> }
         { !loading && response?.numFound == 0 && <p>Realiza una busqueda / No existe un libro con ese nombre</p>}
         {
          response && !loading && response?.numFound > 0 && (
            response?.docs.map((item)=>(
              <div key={item.title} className="flex flex-row gap-2 items-center border-2 border-gray-300">
                <img className="h-36 w-24" src={item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg` : ""} alt={item.title} />
                <div className="flex flex-col gap-2 px-5">
                  <p>{item.title}</p>
                  <div>{item.author_name!.map((author, index)=>(
                    <p key={author + index}>{author}</p>
                  ))}</div>
                  <NavLink to={`/books/details/${encodeURIComponent(item.title)}`} className="text-blue-900 hover:text-blue-600">Quieres ver mas detalles?</NavLink>
                </div>
              </div>
            ))
          )
         }
        </section>
      </div>
    </div>
  );
};
