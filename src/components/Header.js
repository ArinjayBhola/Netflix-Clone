import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/redux/userSlice';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/redux/gptSlice';
import { changeLanguage } from '../utils/redux/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    // useEffect is used so that it will run only once
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Sign In/ Sign Up
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                //Sign Out
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error")
        });
    };

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div
            className='absolute px-8 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row md:justify-between -top-2'>
            <img src={LOGO_URL} alt='Logo' className='w-44 h-20 mt-3 mx-auto md:mx-0' />

            {user && (
                <div className='flex p-2 justify-between -mt-5 md:mt-0 md:p-2 mx-auto md:mx-0'>
                    {
                        showGptSearch &&
                        <select className='px-4 my-5 bg-gray-900 mx-4 text-white rounded-lg' onChange={handleLanguageChange}>
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option key={lang.identifier} value={lang.identifier}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    }
                    <button
                        className='px-2 mx-1 md:px-4 my-5 bg-purple-800 text-white rounded-lg'
                        onClick={handleGptSearchClick}>
                        {showGptSearch ? "Home Page" : "GPT Search"}
                    </button>
                    <img src={user.photoURL} alt='User Icon' className='hidden md:inline-block w-12 h-12 m-4' />
                    <button onClick={handleSignOut} className='mx-1 font-bold text-white'>Sign Out</button>
                </div>
            )}
        </div>
    )
}

export default Header
