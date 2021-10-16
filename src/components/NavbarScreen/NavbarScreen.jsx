import React from "react";
import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button, Navbar, Nav, NavDropdown} from "react-bootstrap";
// import {GoogleLogin, GoogleLogout} from "react-google-login";
import { useGlobalContext } from "../../context";
import LoginGoogle from "../common/LoginGoogle/LoginGoogle";
import LogoutGoogle from "../common/LogoutGoogle/LogoutGoogle";
import {useHistory} from "react-router-dom";
import { useGoogleAuth } from "../common/authGoogle";
import {LinkContainer} from 'react-router-bootstrap';
import * as Icon from 'react-bootstrap-icons';

function NavbarScreen() {

    const {userDetail} = useGlobalContext();
    const historyRouter = useHistory();

    const {isSignedIn, googleUser, signOut} = useGoogleAuth();

   
    return (
        <Row className="navbarContainer">
            <Col xs="6" sm="3" md="2"><img src="https://cdn2.bulbagarden.net/upload/0/0d/Pok%C3%A9mon_UNITE_logo.png" width="200px" height="auto"/></Col>
            <Col xs="6" sm="9" md="7">
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "purple"}} variant="dark">
                    <Container>
                        {/* <LinkContainer to="/">
                            <Navbar.Brand href="#home"><img src="https://cdn2.bulbagarden.net/upload/0/0d/Pok%C3%A9mon_UNITE_logo.png" width="200px" height="auto"/></Navbar.Brand>
                        </LinkContainer> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {/* <LinkContainer to="/">
                                    <Nav.Link>Landing Page</Nav.Link>
                                </LinkContainer> */}
                                <LinkContainer to="/">
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
            </Col>
            <Col md="3" className="containerUser">
                <Row>
                    <Col sm="10" style={{margin:"auto"}}>
                        <h5 className="fontWeightNormal">{googleUser.profileObj.name}</h5>
                        <h6 className="fontWeightNormal">{googleUser.profileObj.email}</h6>
                    </Col>
                    <Col sm="2" style={{margin:"auto"}}>
                        <Icon.BoxArrowLeft onClick={signOut} size="30" style={{cursor: "pointer"}} />
                    </Col>
                </Row>
                
            </Col>
        </Row>
        
    );
    
  }

  export default NavbarScreen;