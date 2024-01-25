import { useEffect } from "react"
import { API_OPTION } from "../utils/constant";
import { POPULAR_MOVIE_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        const data = await fetch(POPULAR_MOVIE_API, API_OPTION);
        const json = await data.json();

        dispatch(addPopularMovie(json.results))
    }
    useEffect(() => {
        fetchData();
    }, []);
}

export default usePopularMovies;