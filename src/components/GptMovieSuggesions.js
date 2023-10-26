import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggesions = () => {
  const  {movieResults,movieNames}=useSelector((store)=>store.gpt);
  if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white  bg-opacity-90'>
      <div>
     { movieNames.map( (movie,index)=>   <MovieList key={movieNames[index]} title={movieNames[index]} movies={movieResults[index]}></MovieList>
      )}
     </div>
    </div>
  )
}

export default GptMovieSuggesions