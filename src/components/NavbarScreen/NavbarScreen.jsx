import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import { useGlobalContext } from "../../context";
import LoginGoogle from "../common/LoginGoogle/LoginGoogle";
import LogoutGoogle from "../common/LogoutGoogle/LogoutGoogle";
import {useHistory} from "react-router-dom";
import { useGoogleAuth } from "../common/authGoogle";
import {LinkContainer} from 'react-router-bootstrap';

function NavbarScreen() {

    const {userDetail} = useGlobalContext();
    const historyRouter = useHistory();

    const {isSignedIn, googleUser} = useGoogleAuth();

   
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <LinkContainer to="/">
                            <Nav.Link>Landing Page</Nav.Link>
                        </LinkContainer> */}
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
  }

  export default NavbarScreen;