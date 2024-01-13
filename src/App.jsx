import "./index.css";
import Container from './components/Container';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AllProjects from "./components/AllProjects";

const router = createBrowserRouter([  
  {
    path: "/",
    element: (
      <Container />
    )
  },
  {
    path: "/all-projects",
    element: (
      <AllProjects />
    )
  },
  
]);



const App = () => {
  
  return (
    <RouterProvider router={router} />
    
  )
}

export default App
