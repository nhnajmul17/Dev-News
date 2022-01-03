import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home' >Dev-News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <NavDropdown title="News" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/pythonnews'>Python</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/javanews'>JavaScript</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item as={Link} to='/phpnews'>Php</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                            <Link to='login'><Button className='me-3'>Login</Button></Link>
                            <Link to='signup'><Button>SignUp</Button></Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;