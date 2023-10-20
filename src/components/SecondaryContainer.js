import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[0];
  console.log("movies in secondary container" + movies[0]);

  return (
    movies && (
      <div className="bg-black">
        <div  className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Trending"} movies={movies} />
        <MovieList title={"Popular"} movies={movies} />
        <MovieList title={"Upcomming Movies"} movies={movies} />
        <MovieList title={"Horror"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
