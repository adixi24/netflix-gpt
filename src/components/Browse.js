import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";

const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcommingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    {
      /*
      MainContainer
          -videoBackGround
          -videoTitle
          SecondaryContainer
          - MovieList * n
          - cards * n
      */
    }
    </div>
  );
};

export default Browse;
