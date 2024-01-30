import { useEffect } from "react"
import { API_OPTION } from "../utils/constant"
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovie } from '../utils/redux/movieSlice'

const useUpcomingMovies = () => {

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch()

    const upcomingMovie = useSelector((store) => store.movies?.upcomingMovie);

    const fetchData = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?&page=1", API_OPTION)
        const json = await data.json();

        dispatch(addUpcomingMovie(json.results));
    }
    useEffect(() => {
        !upcomingMovie && fetchData();
    }, []);

}

export default useUpcomingMovies;