import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <div className='menu-icon' onClick={handleClick} >
            <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
          </div>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            RaC BMSCE
          </Link>
          
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
                Rules and Regulations
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/impact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Oppurtunities
              </Link>
            </li>

            <li>
              <Link
                to='/participate'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>PARTICIPATE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;