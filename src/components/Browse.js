import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        //without fragment like like normally we can not put two components so we have to keep react gragments
        //it gives on error like it should have single parent
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
      MainContainer
          -videoBackGround
          -videoTitle
          SecondaryContainer
          - MovieList * n
          - cards * n
      */}
    </div>
  );
};

export default Browse;
