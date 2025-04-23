import { useState } from "react";
import { Author, Work } from "../models/Book";
import { useNavigate } from "react-router";

interface Props {
  book: Work;
}

export const HomeBookCard = ({ book }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate()
  const goToDetails = (title:string) => {
    navigate(`/books/details/${decodeURIComponent(title)}`,{
      replace:true
    })
  }
  return (
    <div
    key={`${book.title + book.cover_id}`}
    onClick={()=>goToDetails(book.title)}
      className="p-4 bg-white shadow-xl w-64 text-center cursor-pointer hover:bg-gray-300 duration-500 transition-all"
    >
      <div className="w-full h-72 overflow-hidden relative bg-gray-200">
        {
          !loaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-300"></div>
          )
        }
        <img
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          src={
            book.cover_id
              ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
              : ""
          }
          onLoad={() => setLoaded(true)}
          alt={book.title}
        />
      </div>
      <p className="font-bold mt-2">{book.title}</p>
      <p className="text-lg text-gray-600">
        {book.authors.map((author: Author) => (
          <span key={author.key}>{author.name}</span>
        ))}
      </p>
    </div>
  );
};
