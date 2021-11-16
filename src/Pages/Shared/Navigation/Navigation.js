
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <>
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    sticky="top"
                    bg="light"
                    variant="dark"
                    className="nav-bar"
                >
                   <Container className="">
                   <Navbar.Brand href="#home">
                       <img
                        alt=""
                        src="https://www.pngitem.com/pimgs/m/463-4635382_circle-icons-bike-bike-icon-png-circle-transparent.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"/>{' '}
                       <span className="text-black fs-3 fw-bold text-head">RIDEBULL</span>
                      </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end fs-5">
                        <Nav.Link className="text-dark" as={HashLink} to="/home#home">
                            Home
                        </Nav.Link>
                        <Nav.Link className="text-dark" as={HashLink} to="/allProducts">
                            All Products
                        </Nav.Link>
                        {user?.email ? 
                        (
                            <>
                             <Nav.Link className="text-dark" as={HashLink} to="/dashboard">
                                   DashBoard
                                </Nav.Link>
                                <Navbar.Text className="text-dark">
                                    Signed:
                                    <a className="text-dark" href="#login">
                                        {user?.displayName || user.email}
                                    </a>
                                </Navbar.Text>
                                <Button variant="contained"
                                onClick={logOut}
                                as={HashLink}
                                    to="/logIn"

                                 color="success"> Logout </Button>

                                
                            </>
                        ) : (
                            <>
                                <Nav.Link className="text-dark"
                                    as={HashLink}
                                    to="/logIn"
                                    // className="login"
                                >
                                    LogIn
                                </Nav.Link>
                                <Nav.Link className="text-dark"
                                    as={HashLink}
                                    to="/register"
                                    // className="register"
                                >
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Navbar.Collapse>
                   </Container>
                </Navbar>
            </>
        </div>














    );
};

export default Header;