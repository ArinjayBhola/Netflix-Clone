import { useEffect } from "react"
import { API_OPTION } from "../utils/constant"
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovie } from '../utils/movieSlice'

const useNowPlayingMovies = () => {

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch()

    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);

    const getNowPlayinMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1", API_OPTION)
        const json = await data.json();

        dispatch(addNowPlayingMovie(json.results));
    }
    useEffect(() => {
        !nowPlayingMovies && getNowPlayinMovie();
    }, []);

}

export default useNowPlayingMovies;