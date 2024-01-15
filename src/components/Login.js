import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        console.log("Click")
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='Error' />
            </div>
            <form className="absolute p-12 bg-black w-3/12 mx-auto my-28 left-0 right-0 text-white opacity-80">
                <h1
                    className="font-bold py-4 ml-2 text-3xl">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&
                    <input type="text" placeholder="Full Name" className="p-2 my-4 bg-gray-700 w-full rounded-lg" required />
                }
                <input type="email" placeholder="Email" className="p-2 my-4 bg-gray-700 w-full rounded-lg" required />
                <input type="password" placeholder="Password" className="p-2 my-4 bg-gray-700 w-full rounded-lg" required />
                {!isSignInForm &&
                    <input type="password" placeholder="Confirm Password" className="p-2 my-4 bg-gray-700 w-full rounded-lg" required />
                }
                <button
                    className="p-3 my-2 mt-4 border bg-red-700 w-full rounded-lg">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                {isSignInForm ?
                    <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>New to Netflix? Sign Up now</p> :
                    <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>Already Registered? Sign In</p>
                }
            </form>
        </div>
    )
}

export default Login;
