import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignForm] = useState("Sign In");
    const toggleSignInForm = () => {
        setIsSignForm(!isSignInForm);
    }
  return (
    <div>
        <Header />
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"></img>
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-90'>
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {
                !isSignInForm && (
                    <input type="text" placeholder="Full Name" className='p-2 my-4 w-full bg-gray-700 rounded-lg'></input>
                )
            }
            <input type="text" placeholder="Email address" className='p-2 my-4 w-full bg-gray-700 rounded-lg'></input>
            <input type="password" placeholder="Password" className='p-2 my-4 w-full bg-gray-700 rounded-lg'></input>
            <button className="p-4 my-4 bg-red-600 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4' onClick={toggleSignInForm}>New to Netflix? Sign up now</p>
        </form>
    </div>
    
  )
}

export default Login
