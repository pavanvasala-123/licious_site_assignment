
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

// import { BrowserRouter as router , Route } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SubCategory from './Components/SubCategory/SubCategory';
import Footer from './Components/Footer/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Home/subCategory/:name",
      element: <SubCategory/>,
    },
  ]);
  
  
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
