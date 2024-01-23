import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    // Fetch trailer video && updating the store with tariler video data

    useEffect(() => {
        getMovieData();
    }, []);

    const getMovieData = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTION);
        // const data = await fetch("https://api.themoviedb.org/3/movie/955916/videos?language=en-US", API_OPTION);
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    };
}

export default useMovieTrailer;