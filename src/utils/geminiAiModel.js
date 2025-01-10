import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const generateMovieSuggestion = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Act as Movie Recommendation system and suggest some movies for the query : comedy, only gives me names of 5 movies, comma seprated like the example result give ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya",
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "Superbad, Bridesmaids, 21 Jump Street, Airplane!, Step Brothers\n" }],
    },
  ],
});
