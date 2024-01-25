import { useEffect } from "react"
import { API_OPTION, UPCOMING_MOVIE_API } from "../utils/constant"
import { useDispatch } from 'react-redux'
import { addUpcomingMovie } from '../utils/movieSlice'

const useUpcomingMovies = () => {

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch()

    const fetchData = async () => {
        const data = await fetch(UPCOMING_MOVIE_API, API_OPTION)
        const json = await data.json();

        dispatch(addUpcomingMovie(json.results));
    }
    useEffect(() => {
        fetchData();
    }, []);

}

export default useUpcomingMovies;