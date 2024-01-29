import { useEffect } from "react"
import { API_OPTION } from "../utils/constant"
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovie } from '../utils/movieSlice'

const useTopRatedMovies = () => {

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch()

    const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

    const fetchData = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?&page=1", API_OPTION)
        const json = await data.json();

        dispatch(addTopRatedMovie(json.results));
    }
    useEffect(() => {
        !topRatedMovies && fetchData();
    }, []);

}

export default useTopRatedMovies;