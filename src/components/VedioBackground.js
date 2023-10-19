import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VedioBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  //fetch vedio trailer we need movie id
  //dynamically to make trailer id either we can use state variable and update the state variable inside getmovies onece we get data
  //second option is to store it into redux store

  return (
    <div className="">
      <iframe
         className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
