import React from 'react'
import "./index.css";
import Container from './components/container/Container';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container />
    ),
  }
]);



const App = () => {
  
  return (
    <RouterProvider router={router} />
    
  )
}

export default App
