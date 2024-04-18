import React, { useState, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import logo from '../asserts/img/logo.png';
import '../index.css';
import Swal from "sweetalert2"
import {useNavigate} from "react-router-dom"
export default function Navbar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbar, setnavbar] = useState(false);

  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  const changebackground = () => {
    if (window.scrollY >= 90) {
      setnavbar(true);
    }
    else {
      setnavbar(false);
    }
  }
  window.addEventListener('scroll', changebackground);

const LogoutButton =()=>{
  navigate('/');
  Swal.fire({
    title: "Logout Successfully!",
    text: "Moving to Login Page!",
    icon: "success"
  });
  
}

  return (

    <div>
      <nav className={navbar ? 'nav active' : 'nav'} style={{ backgroundColor: props.color }}>

        <img src={logo} className='img' />
        <ul id="navbar" className={isMobileMenuOpen ? '#navbar' : '#navbar active'}>
          <li><Link to='/' className={location.pathname==='/' ? 'active-home' : ''}> Home </Link></li>
          <li><Link to="#" className={location.pathname==='/about' ? 'active-home' : ''}> About </Link></li>
          <li><Link to='#' className={location.pathname==='/notes' ? 'active-home' : ''}> Notes </Link></li>
          <li><Link to='#' className={location.pathname==='/contact' ? 'active-home' : ''}> Contact us </Link></li>
        </ul>
        <button className='btn btn-danger svg' onClick={LogoutButton}>Log Out</button>
        <div className='mobile-view' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars-staggered"></i>
          )}
        </div>
      </nav>
    </div>
  );
}
