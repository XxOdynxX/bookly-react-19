export const fetchBooksBySubjects = async (subject:string, limit=3, offset=0) => {
  const res = await fetch(`https://openlibrary.org/subjects/${subject}.json?limit=${limit}&offset=${offset}`)
  if(!res){
    throw new Error('XD')
  }
  const data = res.json()
  return data
}