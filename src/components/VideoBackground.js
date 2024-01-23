import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {

    const tarilerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieId);

    return (
        <div className=''>
            <iframe
                className='w-full aspect-video'
                src={`https://www.youtube.com/embed/${tarilerVideo ? tarilerVideo.key : ""}?si=Vkwe4uw-jQwh6K4a&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBackground