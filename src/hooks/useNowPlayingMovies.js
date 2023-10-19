import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const useNowPlayingMovies = () =>{
    const dispatch=useDispatch();
    const getNowPlayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json= await data.json();
     dispatch(addnowPlayingMovies(json.results));
    }
    useEffect(()=>{
      getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;