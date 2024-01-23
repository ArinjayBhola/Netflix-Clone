import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { MOVIE_LOGO_URL } from '../utils/constant';

const VideoTitle = ({ title, overview, logo }) => {
    return (
        <div className='w-full aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
            <img src={MOVIE_LOGO_URL + logo} alt='Error' className='w-[10%]' />
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div>
                <button className='bg-white hover:bg-opacity-85 text-lg text-black p-4 px-12 mr-2 rounded-lg'>
                    <FontAwesomeIcon icon={faPlay} className='mr-1' />Play
                </button>
                <button className='bg-gray-500 hover:bg-opacity-90 text-lg text-white p-4 px-12 ml-2 bg-opacity-50 rounded-lg'>
                    <FontAwesomeIcon icon={faCircleInfo} className='mr-1' />More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
