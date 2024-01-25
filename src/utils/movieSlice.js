import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovie: null,
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
    }
});

export const { addNowPlayingMovie, addTrailerVideo, addPopularMovie, addTopRatedMovie, addUpcomingMovie } = moviesSlice.actions;
export default moviesSlice.reducer;