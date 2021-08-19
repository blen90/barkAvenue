import React from 'react';
import { Nav } from 'reactstrap';
import { NavLink } from "react-router-dom"
const NavTabs = () => {
  return (
    <div className="NavBar">
      <Nav >
        <NavLink className="LinkList" activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/services">
          Services
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/profile">
          Profile
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/reservation">
          Reservation
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/contact">
          Contact
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/cart">
          Cart
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/login">
          Login
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/signup">
          Signup
        </NavLink>
      </Nav>
    </div>
  );
}
export default NavTabs;
