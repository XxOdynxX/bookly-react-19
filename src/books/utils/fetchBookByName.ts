import { BookResponse } from "../models/Book"

export const fetchBookByName = async(name:string) => {
  const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(name)}`)
  if(!res) throw new Error('error al obtener el libro')
  
  const data = await res.json()
  return data as BookResponse
}