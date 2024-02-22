import React from 'react';
import ReactDOM from 'react-dom/client';
//import Body from './components/Body';
import Header from './components/Header';
//import Browse from './components/Browse';
import Login from './components/Login';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const App = () => {
  const Router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/header',
        element: <Header />
      }
    ]
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={Router}/>);
  return (
    <div>
      {App}
    </div>
  )
}



export default App
