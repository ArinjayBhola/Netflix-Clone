import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { generateMovieSuggestion } from "../utils/geminiAiModel";
import { API_OPTION } from "../utils/constant";
import { addGptMovieResult } from "../utils/redux/geminiSlice";
import Error from "./Error";

const GeminiSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=true&language=hi-IN&page=1",
      API_OPTION,
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get movie results
    const gptQuery =
      "Act as Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only gives me names of 5 movies, comma seprated like the example result give ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const result = await generateMovieSuggestion.sendMessage(gptQuery);

    if (!result.response) return <Error />;

    const gptMovies = result.response.text().split(",");

    // For each movie, make an API call to TMDB API and get movie details
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };
  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button
          className="py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-3"
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
