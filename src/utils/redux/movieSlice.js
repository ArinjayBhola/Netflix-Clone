import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovie: null,
        watchList: false,
        movieData: [],
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovie: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovie: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovie: (state, action) => {
            state.upcomingMovie = action.payload
        },
        toggleWatchList: (state) => {
            state.watchList = !state.watchList
        },
        addMovieData: (state, action) => {
            state.movieData.push(action.payload)
        },
        removeMovieData: (state) => {
            state.movieData.pop();
        }
    }
});

export const { addNowPlayingMovie, addTrailerVideo, addPopularMovie, addTopRatedMovie, addUpcomingMovie, toggleWatchList, addMovieData, removeMovieData } = moviesSlice.actions;
export default moviesSlice.reducer;