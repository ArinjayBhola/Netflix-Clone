import { useEffect } from "react"
import { API_OPTION, TOP_RATED_MOVIE_API } from "../utils/constant"
import { useDispatch } from 'react-redux'
import { addTopRatedMovie } from '../utils/movieSlice'

const useTopRatedMovies = () => {

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch()

    const fetchData = async () => {
        const data = await fetch(TOP_RATED_MOVIE_API, API_OPTION)
        const json = await data.json();

        dispatch(addTopRatedMovie(json.results));
    }
    useEffect(() => {
        fetchData();
    }, []);

}

export default useTopRatedMovies;