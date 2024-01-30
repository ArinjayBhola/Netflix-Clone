import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-full aspect-video pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-lg md:text-3xl font-bold w-1/2'>{title}</h1>
            <p className='hidden md:inline-block py-6 text-base w-1/4 h-1/4 overflow-hidden'>{overview}</p>
            <div className='my-2'>
                <button className='bg-white hover:bg-opacity-85 text-lg text-black py-1 px-3 md:p-3 md:px-10 mr-2 rounded-lg'>
                    <FontAwesomeIcon icon={faPlay} className='mr-1' />Play
                </button>
                <button className='bg-gray-500 hover:bg-opacity-90 text-lg text-white p-3 px-10 ml-2 bg-opacity-50 rounded-lg hidden md:inline-block'>
                    <FontAwesomeIcon icon={faCircleInfo} className='mr-1' />More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
