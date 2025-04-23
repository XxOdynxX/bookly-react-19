export const fetchBooksByName = async (q:string, limit=3, offset=0) => {
  const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=${limit}&offset=${offset}`)
  if(!res) throw new Error('error al hacer fetch de la busqueda de ' + q)
  
  const data = res.json()
  return data
}