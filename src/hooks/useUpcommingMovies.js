import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch,useSelector } from 'react-redux'
import { addUpcommingMovies } from '../utils/movieSlice';

const useUpcommingMovies = () => {
    const dispatch=useDispatch();
    const upCommingMovies=useSelector((store)=>store.movies.upCommingMovies);
    const getUpcommingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcommingMovies(json.results));
    }
    
    useEffect (()=>{
     !upCommingMovies &&   getUpcommingMovies();
    }, []);

  return (
    <div>useUpcommingMovies</div>
  )
}

export default useUpcommingMovies