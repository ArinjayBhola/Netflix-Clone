import React from 'react'
import { MOVIE_LOGO_URL } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-40 pr-4'>
            <img src={MOVIE_LOGO_URL + posterPath} alt='Error' />
        </div>
    )
}

export default MovieCard
