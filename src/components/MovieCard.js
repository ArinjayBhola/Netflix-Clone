/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { MOVIE_LOGO_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieData, removeMovieData } from '../utils/redux/movieSlice'

const MovieCard = ({ posterPath, id, data }) => {
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()

    if (!posterPath) return null;

    const addMovieWatchlist = () => {
        dispatch(addMovieData(data));
    }

    const removeMovieWatchlist = () => {
        dispatch(removeMovieData());
    }

    const watchListSelector = useSelector((store) => store.movies.watchList)

    return (
        <div
            className='w-32 md:w-48 mr-2 relative transition-transform duration-300 hover:scale-x-125 hover:scale-y-95 hover:z-50'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {
                isHover ? (
                    <div className='relative'>
                        <Link to={`/trailer/${id}`}>
                            <img
                                src={MOVIE_LOGO_URL + posterPath}
                                alt='Error'
                                className='ml-2 rounded-lg'
                            />
                        </Link>
                        {
                            !watchListSelector ? (
                                <button
                                    className='absolute bg-gray-300 bottom-5 left-10 p-2 opacity-75 hover:bg-gray-200 hover:opacity-80 rounded-lg'
                                    onClick={addMovieWatchlist}
                                >Add to Watchlist</button>
                            ) : (
                                <button
                                    className='absolute w-28 bg-gray-300 bottom-5 left-10 p-1 opacity-75 hover:bg-gray-200 hover:opacity-80 rounded-lg'
                                    onClick={removeMovieWatchlist}
                                >Remove from Watchlist</button>
                            )}
                    </div>
                ) : (
                    <img
                        src={MOVIE_LOGO_URL + posterPath}
                        alt='Error'
                        className='ml-2 rounded-lg'
                    />
                )
            }
        </div>
    )
}

export default MovieCard
