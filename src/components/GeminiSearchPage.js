import React from "react";
import GeminiSearchBar from "./GeminiSearchBar";
import GeminiMovieSuggestion from "./GeminiMovieSuggestion";
import { BG_IMAGE } from "../utils/constant";

const GeminiSearchPage = () => {
  return (
    <>
      <div className="-z-10 fixed">
        <img
          src={BG_IMAGE}
          alt="Error"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="">
        <GeminiSearchBar />
        <GeminiMovieSuggestion />
      </div>
    </>
  );
};

export default GeminiSearchPage;
