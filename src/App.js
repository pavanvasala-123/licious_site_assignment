
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
import Cart from './Components/Cart/Cart';
import { useSelector } from 'react-redux';
// import Wrapper from './Components/Cart/Wrapper';

function App() {
  const isCartVisible = useSelector((state) => state.showCart.toggleCart);
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
      {/* {isCartVisible && <Wrapper/>} */}
      {isCartVisible && <Cart/>}
    </div>
  );
}

export default App;
