// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAI0eXlhCHb-6DSBe0AClIwgmd6My0I7IU",
    authDomain: "netflix-clone-4b142.",
    projectId: "netflix-clone-4b142",
    storageBucket: "netflix-clone-4b142.appspot.com",
    messagingSenderId: "803235001365",
    appId: "1:803235001365:web:a3a0f9066cb0a9e4e84a1c",
    measurementId: "G-412J6HJ5TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
