import { useSelector } from "react-redux";
import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  //or we can do like if(!movies) both one and the same if(movies == null)
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VedioTitle title={original_title} overview={overview} />
      <VedioBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
