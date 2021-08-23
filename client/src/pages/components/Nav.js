import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const NavTabs = () => {

  return (
    <>
      <Navbar className='linklist' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            About
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/services'>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
                Contact
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/reservation'>
                    Reservation
                  </Nav.Link>
                  <Nav.Link as={Link} to='/cart'>
                    Cart
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>

                </>
              ) : (
                <Nav.Link as={Link} to='/signup'>
                  Signup
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTabs;
