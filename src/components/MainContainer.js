import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;

    const randomIndex = Math.floor(Math.random() * movies.length);
    console.log(randomIndex);
    console.log(movies);

    const mainMovie = movies[randomIndex];
    const { original_title, overview, id, poster_path } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} logo={poster_path} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer
