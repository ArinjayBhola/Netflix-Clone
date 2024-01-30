import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidatData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import { USER_AVATAR } from "../utils/constant";
import { BG_IMAGE } from "../utils/constant";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMesssage] = useState(null);
    const [errorSignUp, setErrorSignUp] = useState(null);
    const [errorSignIn, setErrorSignIn] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidatData(email.current.value, password.current.value)
        setErrorMesssage(message)
        if (message) return

        // Sign up
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: "name.current.value", photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        setErrorMesssage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorSignUp(errorMessage);
                    console.log(errorCode + "" + errorMessage)
                });
        }
        // Sign in 
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorSignIn(errorMessage);
                    console.log(errorCode + "" + errorMessage)
                });
        }
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_IMAGE} alt='Error' className="h-screen object-cover w-screen" />
            </div>
            <form
                onClick={(e) => e.preventDefault()}
                className="absolute p-12 bg-black w-full md:w-3/12 mx-auto my-28 left-0 right-0 text-white opacity-80">
                <h1
                    className="font-bold py-4 ml-2 text-3xl">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-2 my-4 bg-gray-700 w-full rounded-lg"
                        required
                    />
                }
                <input
                    ref={email}
                    type="email"
                    placeholder="Email"
                    className="p-2 my-4 bg-gray-700 w-full rounded-lg"
                    required
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-2 my-4 bg-gray-700 w-full rounded-lg"
                    required
                />
                <p className="text-red-500 font-bold py-2">
                    {errorMessage}{errorSignUp}{errorSignIn}
                </p>
                <button
                    className="p-3 my-2 mt-4 border bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                {isSignInForm ?
                    <p
                        className="py-6 cursor-pointer text-gray-100 hover:text-gray-300"
                        onClick={toggleSignInForm}
                    >New to Netflix? Sign Up now</p> :
                    <p
                        className="py-6 cursor-pointer text-gray-100 hover:text-gray-300"
                        onClick={toggleSignInForm}
                    >Already Registered? Sign In</p>
                }
            </form>
        </div>
    )
}

export default Login;
