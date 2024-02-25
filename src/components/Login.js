import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignForm] = useState("Sign In");
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        if(!isSignInForm){
            //Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, 
                photoURL: "data:image/jpeg;base64,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"
              }).then(() => {
                const {uid, emailId, displayName, photoURL} = auth.currentUser;
        dispatch(addUser({uid: uid, emailId: emailId, displayName: displayName, photoURL: photoURL}));
                navigate("/browse");
              }).catch((error) => {
                setErrorMessage(error.message);
              });
            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "--" + errorMessage);
            });
        }else{
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("user logged in::"+user);
        navigate("/browse");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "--" + errorMessage);
    });
        }
    }
    const toggleSignInForm = () => {
        setIsSignForm(!isSignInForm);
    }
  return (
    <div>
        <Header />
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"></img>
        </div>
        <form onSubmit={(e) => {e.preventDefault()}} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-90'>
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {
                !isSignInForm && (
                    <input type="text" placeholder="Full Name" className='p-2 my-4 w-full bg-gray-700 rounded-lg' ref={name}></input>
                )
            }
            <input type="text" placeholder="Email address" className='p-2 my-4 w-full bg-gray-700 rounded-lg' ref={email}></input>
            <input type="password" placeholder="Password" className='p-2 my-4 w-full bg-gray-700 rounded-lg' ref={password}></input>
            <p className="bg-red-500">{errorMessage}</p>
            <button className="p-4 my-4 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4' onClick={toggleSignInForm}>New to Netflix? Sign up now</p>
        </form>
    </div>
    
  )
}

export default Login
