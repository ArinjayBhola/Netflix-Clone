import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidatData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMesssage] = useState(null);
    const navigate = useNavigate();
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
                        displayName: "name.current.value", photoURL: "https://avatars.githubusercontent.com/u/141524374?s=400&u=8b5395804b55dcdd7e7ebbe2182a93337126f98e&v=4"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMesssage(error.message);
                    });
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + "" + errorMessage)
                });
        }
        // Sign in 
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/browse");
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // setErrorMesssage(<p className="text-red-500 font-bold ">Invalid Credential</p>)
                    console.log(errorCode + "" + errorMessage)
                });
        }
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='Error' />
            </div>
            <form
                onClick={(e) => e.preventDefault()}
                className="absolute p-12 bg-black w-3/12 mx-auto my-28 left-0 right-0 text-white opacity-80">
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
                <p className="text-red-500 font-bold py-2">{errorMessage}</p>
                <button
                    className="p-3 my-2 mt-4 border bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                {isSignInForm ?
                    <p
                        className="py-6 cursor-pointer"
                        onClick={toggleSignInForm}
                    >New to Netflix? Sign Up now</p> :
                    <p
                        className="py-6 cursor-pointer"
                        onClick={toggleSignInForm}
                    >Already Registered? Sign In</p>
                }
            </form>
        </div>
    )
}

export default Login;
