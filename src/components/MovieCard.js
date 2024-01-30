/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { MOVIE_LOGO_URL } from '../utils/constant'
import { Link } from 'react-router-dom'

const MovieCard = ({ posterPath, id }) => {
    const [isHover, setIsHover] = useState(false)

    if (!posterPath) return null;

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
