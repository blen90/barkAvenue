import React from 'react';
import '../components/style.css';


function NavTabs({ currentPage, handlePageChange }) {
  return (

    <ul className="nav nav-tabs justify-content-end" >
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#services"
          onClick={() => handlePageChange('Services')}
          className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}>
          Services
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#profile"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}>
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#reservation"
          onClick={() => handlePageChange('Reservation')}
          className={currentPage === 'Reservation' ? 'nav-link active' : 'nav-link'}>
          Reservation
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('Signup')}
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}>
          Signup
        </a>
      </li>
    </ul>

  );
}

export default NavTabs;
