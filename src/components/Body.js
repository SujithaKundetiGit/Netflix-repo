import React, { useEffect } from 'react';
//import ReactDOM from 'react-dom/client';
//import Body from './components/Body';
import Header from './Header';
import Browse from './Browse';
//import Browse from './components/Browse';
import Login from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
  const dispatch = useDispatch();
  const Router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/header',
        element: <Header />
      },
      {
        path: '/browse',
        element: <Browse />
      }
    ]
  );
  useEffect( () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, emailId, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, emailId: emailId, displayName: displayName, photoURL: photoURL}));
        
      } else {
        // User is signed out
        dispatch(removeUser());
        
      }
    });
  },[] )
  
  

  return (
    <div>
      <RouterProvider router={Router}/>;
    </div>
  )
}



export default Body;
