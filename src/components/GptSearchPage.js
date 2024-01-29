import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMAGE } from '../utils/constant'

const GptSearchPage = () => {
    return (
        <div>
            <div className="-z-10 fixed">
                <img src={BG_IMAGE} alt='Error' className="h-screen w-screen" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearchPage
