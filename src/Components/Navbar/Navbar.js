import React, { useEffect } from "react";
import "../Navbar/Navbar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {showCart} from "../../AppStore/showcart";
import { ItemTotal, TotalCartItems } from "../../AppStore/cartSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const cart_quantity = useSelector((state) => state.cart.cart_quantity);
    // console.log(cart_quantity)

    const cartItems = useSelector((state)=> state.cart.cart_products)
    const cartItemsPrice = useSelector((state) => state.cart.total_price)
    useEffect(()=>{
        dispatch(ItemTotal())
        dispatch(TotalCartItems())
    },[cartItems])

    const buttonStyles = {
      border:'1px solid red'
      
    }
  
  return (
    <div className="navbar">
      <div className="nav-content">
        <div className="logo-con">
          <img
            src="https://www.licious.in/image/rebranding/svg/licious-logo.svg"
            alt="nav_logo"
          />
        </div>
        <div className="location-con">
          <span className="location">
            <LocationOnIcon />
            <h4>Banglore</h4>
          </span>
          <span className="location-bottom">
            <p>Banglore, Karnakata, India</p>
          </span>
        </div>
        <div className="search-container">
          <input type="text" placeholder="search for any delicious product" />
          <SearchIcon className="search-icon" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <img
              src="https://www.licious.in/image/rebranding/svg/categories-grey.svg"
              alt="categories"
            />
            <p>Categories</p>
          </li>
          <li className="nav-item">
            <PermIdentityIcon />
            <p>Account</p>
          </li>
          
          <li onClick={() => dispatch(showCart(true))} className="cart" style={{border :cart_quantity ? "1px solid red" : "",padding:"10px",borderRadius:"5px"}}>
            <ShoppingCartIcon style={{color :cart_quantity ? "red" : ""}}/>
            {cart_quantity >= 1 ? <div>
                <p >{cart_quantity}Items</p>
                <p className="price">₹{cartItemsPrice + 36}</p>
            </div>:<p>Cart</p>}
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
