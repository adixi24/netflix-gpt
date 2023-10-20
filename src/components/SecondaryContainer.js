import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upCommmingMovies = useSelector(
    (store) => store.movies?.upCommingMovies
  );

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        {nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        )}
        {popularMovies && (
          <MovieList title={"Popular"} movies={popularMovies} />
        )}
        {topRatedMovies && (
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
        )}
        {upCommmingMovies && (
          <MovieList title={"Up Comming Movies"} movies={upCommmingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
