import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openAi from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
//direct access of this {lang.langKey.gptSearchPlaceholder} will not work we have to do {lang[langKey].gptSearchPlaceholder
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch=useDispatch();
  const searchText = useRef(null);
  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json=await data.json();
    return json.results;

  };
  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as Movie Recomendation System and suggest some movies for the query " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seprated like the example given ahead. Example Result: Gadar,Sholay,Don,GolMaal,Koi Mil gaya.";
    //make an api call to get the moview results
    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    //if(!gptResults.choices) //toDo Error handling;
    console.log(gptResults.choices?.[0]?.message?.content);
    //ra Pheri, Andaz Apna Apna, Chupke Chupke, Welcome, 3 Idiots
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(","); //it gives the array of movies
    //for each movie i will seacrh TMDB API.
    const promiseArray =gptMovies.map((movie)=>searchMovieTMDB(movie));
    //Result we get it over here are array of promise.
    //[promise,promise,promise,promise,promise,promise]
    //get the data from promise array
    const tmdbResults= await Promise.all(promiseArray); //takes the array of promises
    console.log("tmdb results"+tmdbResults);
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));

    
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-8"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-2 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
