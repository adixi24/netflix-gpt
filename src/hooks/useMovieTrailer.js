import  { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer =(movieId) =>{
    const dispatch=useDispatch();
    const trailerVideo=useSelector((store)=>store.movies.trailerVideo);
     //fetch the trailer vedio and updating the store with trailer vedio data 
    const getMovieVedios = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
          API_OPTIONS
        );
        const json = await data.json();
        const filterdData = json.results.filter(
          (vedio) => vedio.type === "Trailer"
        );
        const trailer = filterdData.length ? filterdData[0] : json.results[0];
    
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(() => {
       !trailerVideo && getMovieVedios();
      }, []);
}
export default useMovieTrailer;