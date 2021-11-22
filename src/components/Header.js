import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder';
import "../styles/Header.css"

function Header() {

    const [click, setClick] = useState(false);
   
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="navbar">
            <div className='navbar-container'>
                <button className='menu-icon' onClick={handleClick}>
                    <ReorderIcon />
                </button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/sovtech'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SovTechDev
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            </ul>
            </div>
         </div> 
    );
}

export default Header;