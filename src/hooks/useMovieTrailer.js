import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/redux/movieSlice";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    useEffect(() => {
        !trailerVideo && getMovieData();
    }, []);

    const getMovieData = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTION);
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    };
}

export default useMovieTrailer;