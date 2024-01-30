import { useEffect } from "react"
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovie } from "../utils/redux/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector((store) => store.movies?.popularMovies);

    const fetchData = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?&page=1", API_OPTION);
        const json = await data.json();

        dispatch(addPopularMovie(json.results))
    }
    useEffect(() => {
        !popularMovies && fetchData();
    }, []);
}

export default usePopularMovies;