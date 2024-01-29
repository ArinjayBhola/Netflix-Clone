import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_OPTION } from '../utils/constant'

const MovieDetail = () => {
    const [trailerKey, setTrailerKey] = useState();
    const { id } = useParams();

    const getMovieData = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTION)
            const json = await data.json()
            const filterData = json.results.filter((video) => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : json.results[0];
            setTrailerKey(trailer.key)
        } catch (error) {
            console.error('Error fetching movie data:', error);
        };
    };
    useEffect(() => {
        getMovieData();
    }, [])

    return (
        <div className=''>
            <iframe
                className='h-screen w-full aspect-video'
                src={`https://www.youtube.com/embed/${trailerKey}?si=Vkwe4uw-jQwh6K4a&autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default MovieDetail
