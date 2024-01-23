import { useEffect } from "react"
import { API_OPTION } from "../utils/constant"
import { useDispatch } from 'react-redux'
import { addNowPlayingMovie } from '../utils/movieSlice'
import { MOVIE_API } from '../utils/constant'

const useNowPlayingMovies = () => {

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch()

    const getNowPlayinMovie = async () => {
        const data = await fetch(MOVIE_API, API_OPTION)
        const json = await data.json();

        dispatch(addNowPlayingMovie(json.results));
    }
    useEffect(() => {
        getNowPlayinMovie();
    }, []);

}

export default useNowPlayingMovies;