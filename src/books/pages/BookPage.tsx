import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchBookByName } from "../utils/fetchBookByName";
import { BookResponse, Doc } from "../models/Book";

export const BookPage = () => {
  const { q } = useParams();
  const [book, setBook] = useState<Doc>();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const goBack = ()=> {
    navigate(-1)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const getBook = async (book: string) => {
      const response = (await fetchBookByName(book)) as BookResponse;
      console.log(response.docs[0])
      setBook(response.docs[0]);
    };
    getBook(q as string);
    setLoading(false);
  }, [q]);
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {loading && <p>cargando..</p>}
      {!loading && (
        <div
          key={book?.title}
          className="w-full h-full md:w-4/5 flex flex-col md:flex-row gap-5"
        >
          <div className="w-1/2 h-[450px] px-5 py-2 overflow-hidden flex justify-center items-center">
            <img
              className={`h-full bg-gray-300  object-contain rounded-lg ${
                imageLoaded ? "blur-none" : "blur-sm"
              }`}
              src={
                book?.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : ""
              }
              alt=""
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold mb-1">{book?.title}</div>
            <div className="text-xl text-gray-600 mb-1">{book?.subtitle}</div>
            <div className="flex flex-col gap-2 mb-1">
              <span>
                <strong>Author:</strong> {book?.author_name?.map((author)=>(<span>{author}</span>))}
              </span>
              <span>
                <strong>First Published:</strong> {book?.first_publish_year}
              </span>
              <span>
                <strong>Edition Count:</strong> {book?.edition_count}
              </span>
            </div>
            <button onClick={goBack} className="bg-blue-800 text-white font-bold w-30 px-5 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">Volver</button>
          </div>
        </div>
      )}
    </div>
  );
};
