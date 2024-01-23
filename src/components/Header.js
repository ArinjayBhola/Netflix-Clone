import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO_URL } from '../utils/constant';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

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
    }
    return (
        <div className='absolute px-8 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
            <img src={LOGO_URL} alt='Logo' className='w-44 h-20 mt-3' />

            <div className='flex p-2'>
                {user && (
                    <div className='flex p-2'>
                        <img src={user.photoURL} alt='User Icon' className='w-12 h-12 m-4' />
                        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
