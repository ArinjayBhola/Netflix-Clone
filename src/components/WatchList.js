import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';
import { BG_IMAGE } from '../utils/constant';

const WatchList = () => {

    const watchList = useSelector((store) => store.movies.movieData);

    return (
        <div className='relative'>
            <div className="fixed -z-10">
                <img src={BG_IMAGE} alt='Error' className="h-screen w-screen object-cover" />
            </div>
            <div className='flex flex-wrap relative top-20 opacity-85 m-2'>
                {
                    watchList.map((movie) =>
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            posterPath={movie.poster_path}
                        />)
                }
            </div>
        </div>
    )
}

export default WatchList
