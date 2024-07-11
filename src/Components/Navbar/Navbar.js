import React from 'react';
import '../Navbar/Navbar.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-content'>
            <div className='logo-con'>
                <img src='https://www.licious.in/image/rebranding/svg/licious-logo.svg' alt="nav_logo"/>
            </div>
            <div className='location-con'>
                <span className='location'>
                    <LocationOnIcon/>
                    <h4>Banglore</h4>
                </span>
                <span className='location-bottom'>
                   <p>Banglore, Karnakata, India</p>
                </span>
            </div>
            <div className='search-container'>
                <input type='text' placeholder='search for any delicious product'/>
                <SearchIcon className='search-icon'/>
            </div>
            <ul className='nav-items'>
                <li>
                    <img src='https://www.licious.in/image/rebranding/svg/categories-grey.svg' alt="categories"/>
                    <p>Categories</p>
                </li>
                <li>
                    <PermIdentityIcon/>
                    <p>Account</p>
                </li>
                <li>
                    <ShoppingCartIcon/>
                    <p>Cart</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;

