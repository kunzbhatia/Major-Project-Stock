import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice'; // Assuming correct import
import { logout } from '../slices/authSlice'; // Assuming correct import

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const [hasScrolled, setHasScrolled] = useState(false); // Track scroll state

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!hasScrolled && window.location.pathname === '/about-us') {
      scrollToTop();
      setHasScrolled(true); // Prevent multiple scrolls
    }
  }, [hasScrolled, window.location.pathname]);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar bg='success' variant='dark' expand='lg' collapseOnSelect> {/* Set background color to success (a shade of green in Bootstrap) */}
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Stock Market Simulator</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/about-us' onClick={scrollToTop}>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/campuses'>
                <Nav.Link>Campuses</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/reviews'>
                <Nav.Link>Reviews</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/portfolio'>
                    <NavDropdown.Item>Portfolio</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                <LinkContainer to='/program'>
                <Nav.Link>Program</Nav.Link>
              </LinkContainer>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <FaSignInAlt /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <Nav.Link>
                      <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
